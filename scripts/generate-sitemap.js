import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import data files to generate dynamic routes
import industries from '../src/data/industries.js';
import brandingServices from '../src/data/servicesBranding.js';
import devServices from '../src/data/servicesDev.js';
import mktgServices from '../src/data/services.js';
import extraServices from '../src/data/servicesExtra.js';

const allServices = [...brandingServices, ...devServices, ...mktgServices, ...extraServices];

const BASE_URL = 'https://creativals.com';

const staticRoutes = [
  { url: '/', priority: 1.0 },
  { url: '/services', priority: 0.9 },
  { url: '/industries', priority: 0.9 },
  { url: '/contact', priority: 0.9 },
  { url: '/about', priority: 0.7 },
  { url: '/approach', priority: 0.7 },
  { url: '/pricing', priority: 0.7 },
  { url: '/case-studies', priority: 0.8 },
  { url: '/join-us', priority: 0.6 },
  { url: '/academy', priority: 0.6 },
  { url: '/resources', priority: 0.6 },
  { url: '/client-reviews', priority: 0.6 },
  { url: '/automations', priority: 0.6 },
  { url: '/experiments', priority: 0.6 },
  { url: '/playbooks', priority: 0.6 },
  { url: '/products', priority: 0.6 },
  { url: '/results', priority: 0.6 },
  { url: '/success-stories', priority: 0.6 },
];

const dynamicRoutes = [];

industries.forEach(ind => {
  dynamicRoutes.push({ url: `/industry/${ind.slug}`, priority: 0.8 });
});

allServices.forEach(srv => {
  dynamicRoutes.push({ url: `/service/${srv.slug}`, priority: 0.8 });
});

const allUrls = [...staticRoutes, ...dynamicRoutes];

let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

const date = new Date().toISOString().split('T')[0];

allUrls.forEach(route => {
  sitemapXML += `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${date}</lastmod>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>\n`;
});

sitemapXML += `</urlset>`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXML);
console.log('✅ sitemap.xml generated successfully!');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('✅ robots.txt generated successfully!');
