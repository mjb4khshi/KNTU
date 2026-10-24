const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const path = require('path');

async function testLocal() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  page.on('console', msg => console.log('LOCAL LOG:', msg.text()));
  page.on('pageerror', err => console.log('LOCAL PAGE ERROR:', err.message));

  const localFile = 'file:///' + path.resolve('KNTU-Notes/site/tags/index.html').replace(/\\/g, '/');
  await page.goto(localFile, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 600));

  const pillCount = await page.$$eval('.sarv-tag-pill', els => els.length);
  console.log('LOCAL PILL COUNT:', pillCount);
  await browser.close();
}
testLocal();
