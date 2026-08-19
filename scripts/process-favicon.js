import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function processImage() {
  const browser = await puppeteer.launch({ headless: 'shell' });
  const page = await browser.newPage();

  const imgPath = 'C:/Users/DELL/.gemini/antigravity/brain/148a4c32-4c81-47ed-a08b-38b8ed395320/.user_uploaded/media_1786207083989.jpg';
  const imgBuf = fs.readFileSync(imgPath);
  const base64 = imgBuf.toString('base64');
  const dataUrl = 'data:image/jpeg;base64,' + base64;

  // Render 512x512 PNG
  await page.setViewport({ width: 512, height: 512, deviceScaleFactor: 1 });
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { width: 512px; height: 512px; overflow: hidden; background: #5055F6; }
        img { display: block; width: 512px; height: 512px; object-fit: cover; }
      </style>
    </head>
    <body>
      <img src="${dataUrl}" />
    </body>
    </html>
  `);

  await page.waitForSelector('img');
  
  const png512 = await page.screenshot({ type: 'png' });
  fs.writeFileSync('public/favicon.png', png512);
  fs.writeFileSync('public/apple-touch-icon.png', png512);

  // Render 32x32 PNG for favicon-32x32.png and favicon.ico
  await page.setViewport({ width: 32, height: 32, deviceScaleFactor: 2 });
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { width: 32px; height: 32px; overflow: hidden; }
        img { display: block; width: 32px; height: 32px; object-fit: cover; }
      </style>
    </head>
    <body>
      <img src="${dataUrl}" />
    </body>
    </html>
  `);
  const png32 = await page.screenshot({ type: 'png' });
  fs.writeFileSync('public/favicon-32x32.png', png32);
  fs.writeFileSync('public/favicon.ico', png32);

  // Get color sample from original image to verify background color
  const sampleColor = await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    const img = document.querySelector('img');
    ctx.drawImage(img, 0, 0);
    const pixel = ctx.getImageData(0, 0, 1, 1).data;
    return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
  });
  console.log('Sample background color from image:', sampleColor);

  // Create SVG version containing the image so favicon.svg works everywhere perfectly
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image href="${dataUrl}" x="0" y="0" width="512" height="512"/>
</svg>`;
  fs.writeFileSync('public/favicon.svg', svgContent);

  await browser.close();
  console.log('All favicons created in public/ successfully!');
}

processImage().catch(console.error);
