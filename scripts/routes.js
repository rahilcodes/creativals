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

const SLUG_SOURCES = {
  '/services/:slug': allServices.map((s) => s.slug),
  '/industries/:slug': industries.map((i) => i.slug),
};

// All <Route path="..."> values from the router, except the "*" catch-all.
export function getRoutePaths() {
  const appSource = fs.readFileSync(path.join(__dirname, '../src/App.jsx'), 'utf8');
  return [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((p) => p !== '*');
}

// Expands dynamic patterns into concrete URLs.
// Returns { urls: [{ url, route }], errors: [string] }.
export function getExpandedRoutes() {
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

  return { routePaths, urls, errors };
}
