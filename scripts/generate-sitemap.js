// Sitemap + robots.txt generator — runs automatically before every build ("prebuild").
//
// The router (src/App.jsx) is the single source of truth: routes are parsed from it,
// and dynamic routes (/services/:slug, /industries/:slug) are expanded from the same
// data files the pages render from. If a route is added, removed, or renamed in the
// router, the sitemap follows automatically. Never hand-edit public/sitemap.xml.

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { getExpandedRoutes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const BASE_URL = 'https://creativals.com';

// ── 1+2. Routes from the router, dynamic patterns expanded from data files ──
const { routePaths, urls, errors } = getExpandedRoutes();

// ── Real <lastmod> from git: last commit touching the URL's source files. ────
// Files with uncommitted changes count as modified today (they'll ship in the
// commit this build belongs to). <priority> is not emitted — Google ignores it.
const today = new Date().toISOString().split('T')[0];

let dirtyFiles = new Set();
try {
  dirtyFiles = new Set(
    execSync('git status --porcelain', { cwd: REPO_ROOT, encoding: 'utf8' })
      .split('\n')
      .map((l) => l.slice(3).trim().replace(/\\/g, '/'))
      .filter(Boolean)
  );
} catch {
  /* not a git checkout — every lastmod falls back to today */
}

const gitDateCache = new Map();
const gitLastTouched = (file) => {
  if (gitDateCache.has(file)) return gitDateCache.get(file);
  let date = null;
  if (dirtyFiles.has(file)) {
    date = today;
  } else {
    try {
      const iso = execSync(`git log -1 --format=%cI -- "${file}"`, {
        cwd: REPO_ROOT,
        encoding: 'utf8',
      }).trim();
      if (iso) date = iso.split('T')[0];
    } catch {
      /* fall through to today */
    }
  }
  date = date || today;
  gitDateCache.set(file, date);
  return date;
};

const lastmodFor = (sources) => {
  const dates = (sources || []).map(gitLastTouched);
  return dates.length ? dates.sort().at(-1) : today;
};

// ── 3. Validate: every sitemap URL must match a real router route ────────────
const matchesRoute = (url, route) =>
  route.includes(':')
    ? new RegExp(`^${route.replace(/:[^/]+/g, '[^/]+')}$`).test(url)
    : url === route;

const rows = urls.map(({ url, route }) => ({
  url,
  route,
  ok: routePaths.some((r) => matchesRoute(url, r)),
}));
rows.filter((r) => !r.ok).forEach((r) => errors.push(`Sitemap URL ${r.url} matches no route`));

if (errors.length) {
  console.error('❌ Sitemap generation failed:');
  errors.forEach((e) => console.error('   - ' + e));
  process.exit(1);
}

// ── 4. Write sitemap.xml ─────────────────────────────────────────────────────
const entries = urls
  .map(({ url, sources }) => `  <url>
    <loc>${BASE_URL}${url === '/' ? '/' : url}</loc>
    <lastmod>${lastmodFor(sources)}</lastmod>
  </url>`)
  .join('\n');

const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

const publicDir = path.join(__dirname, '../public');
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXML);

// ── 5. Write robots.txt ──────────────────────────────────────────────────────
fs.writeFileSync(
  path.join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`
);

// ── 6. Report ────────────────────────────────────────────────────────────────
const pad = (s, n) => String(s).padEnd(n);
console.log(`✅ sitemap.xml — ${urls.length} URLs (all match router routes)\n`);
console.log(pad('URL', 52) + pad('ROUTE', 24) + 'OK');
rows.forEach((r) => console.log(pad(r.url, 52) + pad(r.route, 24) + (r.ok ? '✓' : '✗')));
console.log('\n✅ robots.txt regenerated');
