const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testLocalHttp() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  page.on('console', msg => console.log('HTTP LOG:', msg.text()));
  page.on('pageerror', err => console.log('HTTP PAGE ERROR:', err.message));

  await page.goto('http://localhost:8000/tags/', { waitUntil: 'networkidle2' });
  const pillCount = await page.$$eval('.sarv-tag-pill', els => els.length);
  console.log('HTTP PILL COUNT:', pillCount);
  const totalCount = await page.$eval('#total-tags-count', el => el.textContent);
  console.log('TOTAL COUNT TEXT:', totalCount);
  await browser.close();
}
testLocalHttp();
