// Shared route derivation for build scripts (sitemap + prerender).
// The router (src/App.jsx) is the single source of truth: static paths are
// parsed from it and dynamic patterns are expanded from the same data files
// the pages render from.

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

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const allServices = [...baseServices, ...extraServices, ...devServices, ...brandingServices];

// Each slug remembers which data file defines it, so the sitemap can compute a
// real per-URL <lastmod> from git history (file-level granularity: editing one
// service touches the lastmod of every slug in that file — acceptable).
const SLUG_SOURCES = {
  '/services/:slug': [
    ...baseServices.map((s) => ({ slug: s.slug, file: 'src/data/services.js' })),
    ...extraServices.map((s) => ({ slug: s.slug, file: 'src/data/servicesExtra.js' })),
    ...devServices.map((s) => ({ slug: s.slug, file: 'src/data/servicesDev.js' })),
    ...brandingServices.map((s) => ({ slug: s.slug, file: 'src/data/servicesBranding.js' })),
  ],
  '/industries/:slug': industries.map((i) => ({ slug: i.slug, file: 'src/data/industries.js' })),
};

// Extra content-bearing files per dynamic route (template + page shell).
const ROUTE_EXTRA_SOURCES = {
  '/services/:slug': ['src/templates/ServicePageTemplate.jsx', 'src/pages/ServicePage.jsx'],
  '/industries/:slug': ['src/templates/IndustryPageTemplate.jsx', 'src/pages/IndustryPage.jsx'],
};

function readAppSource() {
  return fs.readFileSync(path.join(__dirname, '../src/App.jsx'), 'utf8');
}

// Component name -> source file, parsed from App.jsx's eager and lazy imports.
function getComponentFiles(appSource) {
  const map = {};
  for (const m of appSource.matchAll(/import\s+(\w+)\s+from\s+'\.\/(pages\/[\w-]+)'/g))
    map[m[1]] = `src/${m[2]}.jsx`;
  for (const m of appSource.matchAll(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\('\.\/(pages\/[\w-]+)'\)\)/g))
    map[m[1]] = `src/${m[2]}.jsx`;
  return map;
}

// All <Route path="..."> values from the router, except the "*" catch-all.
export function getRoutePaths() {
  return [...readAppSource().matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((p) => p !== '*');
}

// Expands dynamic patterns into concrete URLs.
// Returns { urls: [{ url, route, sources }], errors: [string] } where sources
// lists the repo-relative files whose git history determines the URL's lastmod.
export function getExpandedRoutes() {
  const appSource = readAppSource();
  const componentFiles = getComponentFiles(appSource);
  const routeComponents = Object.fromEntries(
    [...appSource.matchAll(/<Route\s+path="([^"]+)"\s+element={<(\w+)/g)].map((m) => [m[1], m[2]])
  );

  const routePaths = getRoutePaths();
  const urls = [];
  const errors = [];

  for (const p of routePaths) {
    if (p.includes(':')) {
      const slugs = SLUG_SOURCES[p];
      if (!slugs) {
        errors.push(`Dynamic route "${p}" has no slug source in scripts/routes.js — add one.`);
        continue;
      }
      const extra = ROUTE_EXTRA_SOURCES[p] || [];
      const seen = new Set();
      for (const { slug, file } of slugs) {
        if (seen.has(slug)) errors.push(`Duplicate slug "${slug}" for route ${p}`);
        seen.add(slug);
        urls.push({ url: p.replace(/:.+$/, slug), route: p, sources: [file, ...extra] });
      }
    } else {
      const componentFile = componentFiles[routeComponents[p]];
      urls.push({ url: p, route: p, sources: componentFile ? [componentFile] : [] });
    }
  }

  return { routePaths, urls, errors };
}
