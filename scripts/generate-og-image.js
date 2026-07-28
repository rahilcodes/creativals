// One-off generator for the default social-share image (public/og-default.png,
// 1200x630). Re-run manually if the brand system changes:
//
//   node scripts/generate-og-image.js
//
// Renders a neo-brutalist card with the site's own self-hosted fonts so the
// share image matches the design system exactly. Not part of the build.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, '../public/fonts');
const outFile = path.join(__dirname, '../public/og-default.png');

const fontUrl = (f) => 'file:///' + path.join(fontsDir, f).replace(/\\/g, '/');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face {
    font-family: 'Archivo';
    font-weight: 100 900;
    font-stretch: 62% 125%;
    src: url('${fontUrl('archivo-var.woff2')}') format('woff2-variations');
  }
  @font-face {
    font-family: 'IBM Plex Mono';
    font-weight: 500;
    src: url('${fontUrl('ibm-plex-mono-500.woff2')}') format('woff2');
  }
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: #F4F2EC;
    font-family: 'Archivo', sans-serif; color: #17151A;
    display: flex; align-items: center; justify-content: center;
  }
  .card {
    width: 1080px; height: 510px; background: #FFFFFF;
    border: 6px solid #17151A; box-shadow: 18px 18px 0 #17151A;
    padding: 56px 64px; display: flex; flex-direction: column; justify-content: space-between;
  }
  .kicker {
    font-family: 'IBM Plex Mono', monospace; font-weight: 500; font-size: 26px;
    letter-spacing: 0.14em; text-transform: uppercase;
  }
  .kicker .dot { color: #4F46E5; }
  h1 {
    font-size: 118px; font-weight: 850; font-stretch: 85%;
    line-height: 0.95; letter-spacing: -0.02em; text-transform: uppercase;
  }
  h1 .accent { background: #FFD84D; padding: 0 14px; box-shadow: 6px 6px 0 #17151A; }
  .sub { font-size: 33px; font-weight: 600; line-height: 1.35; }
  .bottom { display: flex; justify-content: space-between; align-items: flex-end; }
  .url {
    font-family: 'IBM Plex Mono', monospace; font-weight: 500; font-size: 28px;
    background: #17151A; color: #F4F2EC; padding: 10px 22px;
  }
  .geo { font-family: 'IBM Plex Mono', monospace; font-size: 24px; letter-spacing: 0.08em; }
</style></head><body>
  <div class="card">
    <div class="kicker"><span class="dot">&#9632;</span> DIGITAL GROWTH AGENCY</div>
    <h1>CREATI<span class="accent">VALS</span></h1>
    <div class="sub">Websites &middot; E-commerce &middot; SEO &middot; Google Ads<br>Branding &middot; AI Automation</div>
    <div class="bottom">
      <div class="url">creativals.com</div>
      <div class="geo">HYDERABAD &middot; IN</div>
    </div>
  </div>
</body></html>`;

// setContent() leaves the page on about:blank, which blocks file:// font
// loads — write to a temp file and navigate to it instead.
const tmpFile = path.join(__dirname, '.og-tmp.html');
fs.writeFileSync(tmpFile, html);

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.goto('file:///' + tmpFile.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await page.screenshot({ path: outFile });
} finally {
  await browser.close();
  fs.unlinkSync(tmpFile);
}
console.log('✅ wrote ' + outFile);
