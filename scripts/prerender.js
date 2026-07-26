// Snapshot prerendering — runs automatically after every build ("postbuild").
//
// Serves the fresh dist/ locally, renders every route from the router in
// headless Chrome, and writes the fully-rendered HTML back into dist/ so every
// public URL ships real HTML: content, unique <title>, meta description,
// canonical, and JSON-LD in the raw source (no JS execution needed).
//
// URL mapping (kept in sync with public/.htaccess):
//   /                 -> dist/index.html   (replaces the SPA shell)
//   /services/seo     -> dist/services/seo.html
//   unknown routes    -> fall back to /index.html (React shows the 404 page)
//
// After writing, it re-reads every file (raw, no JS) and prints the crawl
// report: route → status, title, meta description, H1 count, word count,
// schema types. Hard failures (missing title/description/canonical/schema or
// non-200) exit 1 and block the build.

import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { getExpandedRoutes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '../dist');
const PORT = 4179;
const CONCURRENCY = 4;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.mp4': 'video/mp4', '.json': 'application/json', '.xml': 'application/xml',
  '.txt': 'text/plain', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('❌ dist/index.html not found — run "vite build" first.');
  process.exit(1);
}

const { urls, errors } = getExpandedRoutes();
if (errors.length) {
  errors.forEach((e) => console.error('❌ ' + e));
  process.exit(1);
}
const routes = urls.map((u) => u.url);

// The pristine SPA shell — served during the crawl, before snapshots exist.
const shell = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

// ── Local server mimicking the production .htaccess behaviour ────────────────
const server = http.createServer((req, res) => {
  const reqPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const safe = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(DIST, safe);
  if (!filePath.startsWith(DIST)) { res.writeHead(403); res.end(); return; }

  let serveFile = null;
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) serveFile = filePath;
  else if (fs.existsSync(filePath + '.html')) serveFile = filePath + '.html';

  if (serveFile) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(serveFile)] || 'application/octet-stream' });
    fs.createReadStream(serveFile).pipe(res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(shell); // SPA fallback
  }
});

const snapshotPath = (route) =>
  route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route.slice(1) + '.html');

// ── Crawl ────────────────────────────────────────────────────────────────────
const crawl = async () => {
  await new Promise((resolve) => server.listen(PORT, resolve));
  const browser = await puppeteer.launch({ headless: 'shell' });
  const results = new Map(); // route -> { html, status }
  const failures = [];

  const renderRoute = async (route) => {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: 1280, height: 800 });
      // Reveal-on-scroll components render visible immediately under reduced
      // motion, so snapshots contain visible content, not opacity-0 blocks.
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      const resp = await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle2',
        timeout: 45000,
      });
      // PageLayout injects breadcrumb JSON-LD + canonical on every page — a
      // reliable "React has rendered and SEO effects ran" signal.
      await page.waitForFunction(
        () => document.getElementById('breadcrumb-schema') &&
              document.querySelector('link[rel="canonical"]') &&
              document.querySelector('#root').children.length > 0,
        { timeout: 15000 }
      );
      await new Promise((r) => setTimeout(r, 250));
      const html = await page.content();
      results.set(route, { html, status: resp.status() });
      console.log(`  ✓ ${route}`);
    } catch (e) {
      failures.push(`${route}: ${e.message.split('\n')[0]}`);
      console.error(`  ✗ ${route}: ${e.message.split('\n')[0]}`);
    } finally {
      await page.close();
    }
  };

  console.log(`Prerendering ${routes.length} routes...`);
  const queue = [...routes];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length) await renderRoute(queue.shift());
    })
  );

  await browser.close();
  server.close();

  if (failures.length) {
    console.error(`\n❌ ${failures.length} route(s) failed to render — no files written.`);
    process.exit(1);
  }

  // ── Write snapshots (all-or-nothing; '/' overwrites the shell last) ────────
  for (const route of routes.filter((r) => r !== '/')) {
    const file = snapshotPath(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, '<!doctype html>\n' + results.get(route).html.replace(/^<!doctype html>/i, '').trim());
  }
  fs.writeFileSync(snapshotPath('/'), '<!doctype html>\n' + results.get('/').html.replace(/^<!doctype html>/i, '').trim());

  // ── 0.2b crawl report from the RAW written files (no JS execution) ─────────
  const report = [];
  const hardErrors = [];
  const warnings = [];

  for (const route of routes) {
    const raw = fs.readFileSync(snapshotPath(route), 'utf8');
    const status = results.get(route).status;
    const title = (raw.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const desc = (raw.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/) || [])[1] || '';
    const canonical = (raw.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/) || [])[1] || '';
    const h1Count = (raw.match(/<h1[\s>]/g) || []).length;
    const schemaTypes = [...raw.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)]
      .flatMap((m) => {
        try {
          const parsed = JSON.parse(m[1]);
          return (Array.isArray(parsed) ? parsed : [parsed]).map((s) =>
            Array.isArray(s['@type']) ? s['@type'].join('+') : s['@type']);
        } catch { return ['PARSE-ERROR']; }
      });
    const bodyText = raw
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&[a-z]+;/g, ' ');
    const words = bodyText.split(/\s+/).filter(Boolean).length;

    if (status !== 200) hardErrors.push(`${route}: HTTP ${status}`);
    if (!title) hardErrors.push(`${route}: missing <title>`);
    if (!desc) hardErrors.push(`${route}: missing meta description`);
    if (!canonical) hardErrors.push(`${route}: missing canonical`);
    if (!schemaTypes.length || schemaTypes.includes('PARSE-ERROR')) hardErrors.push(`${route}: JSON-LD missing or invalid`);
    const expectedCanonical = `https://creativals.com${route === '/' ? '/' : route}`;
    if (canonical && canonical !== expectedCanonical) hardErrors.push(`${route}: canonical is ${canonical}`);
    if (h1Count !== 1) warnings.push(`${route}: ${h1Count} H1 tags`);
    if (title.length > 60) warnings.push(`${route}: title ${title.length} chars (>60)`);
    if (desc.length > 155) warnings.push(`${route}: description ${desc.length} chars (>155)`);

    report.push({ route, status, title, titleLen: title.length, descLen: desc.length, h1Count, words, schemaTypes });
  }

  const pad = (s, n) => String(s).padEnd(n).slice(0, n);
  console.log('\nCRAWL REPORT (from raw snapshot HTML — no JS executed)');
  console.log(pad('ROUTE', 40) + pad('ST', 4) + pad('TITLE(len)', 12) + pad('DESC', 6) + pad('H1', 4) + pad('WORDS', 7) + 'SCHEMA');
  for (const r of report) {
    console.log(
      pad(r.route, 40) + pad(r.status, 4) + pad(`ok(${r.titleLen})`, 12) +
      pad(r.descLen, 6) + pad(r.h1Count, 4) + pad(r.words, 7) + r.schemaTypes.join(', ')
    );
  }

  if (warnings.length) {
    console.log(`\n⚠ ${warnings.length} warning(s) (fix in on-page pass, non-blocking):`);
    warnings.forEach((w) => console.log('  - ' + w));
  }
  if (hardErrors.length) {
    console.error(`\n❌ ${hardErrors.length} hard error(s):`);
    hardErrors.forEach((e) => console.error('  - ' + e));
    process.exit(1);
  }
  console.log(`\n✅ ${routes.length} routes prerendered into dist/ — every page ships real HTML with title, description, canonical, and JSON-LD in source.`);
};

crawl().catch((e) => {
  console.error(e);
  process.exit(1);
});
