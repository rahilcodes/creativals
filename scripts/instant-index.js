// Master Instant Indexing Script for Creativals
//
// Submits all site URLs (~52 routes) to:
//   1. IndexNow API (Bing, Yandex, Seznam, Naver)
//   2. Google Indexing API (Googlebot)
//
// Usage:
//   npm run instant-index

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { getExpandedRoutes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const HOST = 'creativals.com';
const BASE_URL = `https://${HOST}`;

console.log('🚀 Starting Instant Indexing for Creativals...\n');

// ── 1. Gather all site URLs ───────────────────────────────────────────────────
const { urls, errors } = getExpandedRoutes();
if (errors.length) {
  console.error('❌ Route expansion failed:');
  errors.forEach((e) => console.error('   - ' + e));
  process.exit(1);
}

const urlList = urls.map(({ url }) => `${BASE_URL}${url === '/' ? '/' : url}`);
console.log(`📌 Found ${urlList.length} site URLs to submit.`);

// ── 2. IndexNow Submission (Bing, Yandex, Naver, Seznam) ─────────────────────
async function submitIndexNow() {
  console.log('\n--- 1/2: Submitting to IndexNow (Bing / Yandex / Naver) ---');
  
  const publicDir = path.join(REPO_ROOT, 'public');
  const keyFile = fs.readdirSync(publicDir).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
  
  if (!keyFile) {
    console.error('⚠️ IndexNow skipped: No 32-hex key file found in public/');
    return;
  }

  const key = keyFile.replace('.txt', '');

  try {
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

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ IndexNow accepted ${urlList.length} URLs (HTTP ${res.status})`);
    } else {
      const text = await res.text();
      console.error(`❌ IndexNow returned HTTP ${res.status}: ${text}`);
    }
  } catch (err) {
    console.error(`❌ IndexNow network error: ${err.message}`);
  }
}

// ── 3. Google Indexing API Submission ─────────────────────────────────────────
function base64url(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getGoogleAccessToken(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claimSet = base64url(
    JSON.stringify({
      iss: creds.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  );

  const signatureInput = `${header}.${claimSet}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signatureInput);
  const signature = base64url(signer.sign(creds.private_key));

  const jwt = `${signatureInput}.${signature}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    throw new Error(`Google Auth Failed (HTTP ${tokenRes.status}): ${errText}`);
  }

  const data = await tokenRes.json();
  return data.access_token;
}

async function submitGoogleIndexing() {
  console.log('\n--- 2/2: Submitting to Google Indexing API ---');

  const keyPath = path.join(REPO_ROOT, 'google-service-account.json');
  let creds = null;

  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    try {
      creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    } catch {
      console.error('⚠️ Could not parse GOOGLE_SERVICE_ACCOUNT_KEY environment variable.');
    }
  } else if (fs.existsSync(keyPath)) {
    try {
      creds = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
    } catch {
      console.error(`⚠️ Could not parse file at ${keyPath}`);
    }
  }

  if (!creds || !creds.client_email || !creds.private_key) {
    console.log('ℹ️ Google Indexing API credentials (google-service-account.json) not found.');
    console.log('   To enable Google instant indexing:');
    console.log('   1. Create a Google Cloud Service Account & download the JSON key file.');
    console.log('   2. Save it as "google-service-account.json" in the repository root.');
    console.log('   3. Add the Service Account email as Owner in Google Search Console.');
    return;
  }

  try {
    const accessToken = await getGoogleAccessToken(creds);
    console.log(`🔑 Authenticated as ${creds.client_email}`);

    let successCount = 0;
    let failCount = 0;

    for (const url of urlList) {
      try {
        const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            url,
            type: 'URL_UPDATED',
          }),
        });

        if (res.ok) {
          successCount++;
        } else {
          failCount++;
          const errJson = await res.json().catch(() => ({}));
          console.warn(`   ⚠️ ${url} -> ${res.status}: ${errJson.error?.message || 'Failed'}`);
        }
      } catch (_err) {
        failCount++;
      }
    }

    console.log(`✅ Google Indexing complete: ${successCount} succeeded, ${failCount} failed.`);
  } catch (err) {
    console.error(`❌ Google Indexing failed: ${err.message}`);
  }
}

// ── 4. Main Execution ────────────────────────────────────────────────────────
await submitIndexNow();
await submitGoogleIndexing();
console.log('\n🎉 Instant Indexing process completed!\n');
