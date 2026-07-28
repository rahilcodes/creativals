// IndexNow submission — run MANUALLY after a deploy is live, never during build:
//
//   node scripts/indexnow-submit.js
//
// Submits every sitemap URL to api.indexnow.org so Bing/Yandex/Naver pick up
// changes fast (audit 27 Jul, finding 12). The key file must be reachable at
// https://creativals.com/<key>.txt before this succeeds — i.e. deploy first.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getExpandedRoutes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOST = 'creativals.com';
const BASE_URL = `https://${HOST}`;

// The key is whatever <hex>.txt file sits in public/ (single source of truth).
const keyFile = fs
  .readdirSync(path.join(__dirname, '../public'))
  .find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error('❌ No IndexNow key file (32-hex .txt) found in public/');
  process.exit(1);
}
const key = keyFile.replace('.txt', '');

const { urls, errors } = getExpandedRoutes();
if (errors.length) {
  console.error('❌ Route expansion failed:');
  errors.forEach((e) => console.error('   - ' + e));
  process.exit(1);
}
const urlList = urls.map(({ url }) => `${BASE_URL}${url === '/' ? '/' : url}`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `${BASE_URL}/${keyFile}`,
    urlList,
  }),
});

// 200 = accepted, 202 = accepted-pending-key-validation; anything else is a failure.
if (res.status === 200 || res.status === 202) {
  console.log(`✅ IndexNow accepted ${urlList.length} URLs (HTTP ${res.status})`);
} else {
  console.error(`❌ IndexNow rejected the submission: HTTP ${res.status} ${await res.text()}`);
  process.exit(1);
}
