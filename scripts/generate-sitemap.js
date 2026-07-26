// Sitemap + robots.txt generator — runs automatically before every build ("prebuild").
//
// The router (src/App.jsx) is the single source of truth: routes are parsed from it,
// and dynamic routes (/services/:slug, /industries/:slug) are expanded from the same
// data files the pages render from. If a route is added, removed, or renamed in the
// router, the sitemap follows automatically. Never hand-edit public/sitemap.xml.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import the four service files directly (src/data/allServices.js uses
// extensionless imports that Vite resolves but plain Node ESM cannot).
import industries from '../src/data/industries.js';
import baseServices from '../src/data/services.js';
import extraServices from '../src/data/servicesExtra.js';
import devServices from '../src/data/servicesDev.js';
import brandingServices from '../src/data/servicesBranding.js';

const allServices = [...baseServices, ...extraServices, ...devServices, ...brandingServices];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://creativals.com';

// ── 1. Parse route paths straight out of the router ─────────────────────────
const appSource = fs.readFileSync(path.join(__dirname, '../src/App.jsx'), 'utf8');
const routePaths = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => p !== '*'); // catch-all 404 is not a public URL

// ── 2. Expand dynamic patterns from the data files ───────────────────────────
const SLUG_SOURCES = {
  '/services/:slug': allServices.map((s) => s.slug),
  '/industries/:slug': industries.map((i) => i.slug),
};

const PRIORITIES = [
  [/^\/$/, 1.0],
  [/^\/(services|industries|contact)$/, 0.9],
  [/^\/(services|industries)\/[^/]+$/, 0.8],
  [/^\/case-studies$/, 0.8],
  [/^\/(about-us|approach|pricing|results)$/, 0.7],
];
const priorityFor = (url) => {
  const hit = PRIORITIES.find(([re]) => re.test(url));
  return hit ? hit[1] : 0.6;
};

const urls = [];
const errors = [];

for (const p of routePaths) {
  if (p.includes(':')) {
    const slugs = SLUG_SOURCES[p];
    if (!slugs) {
      errors.push(`Dynamic route "${p}" has no slug source in generate-sitemap.js — add one.`);
      continue;
    }
    const seen = new Set();
    for (const slug of slugs) {
      if (seen.has(slug)) errors.push(`Duplicate slug "${slug}" for route ${p}`);
      seen.add(slug);
      urls.push({ url: p.replace(/:.+$/, slug), route: p });
    }
  } else {
    urls.push({ url: p, route: p });
  }
}

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
const today = new Date().toISOString().split('T')[0];
const entries = urls
  .map(({ url }) => `  <url>
    <loc>${BASE_URL}${url === '/' ? '/' : url}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priorityFor(url).toFixed(1)}</priority>
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
