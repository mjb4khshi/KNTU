const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
async function test() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('https://mjb4khshi.github.io/KNTU/tags/', { waitUntil: 'networkidle2' });
  const html = await page.$eval('#sarv-tags-cloud-container', el => el.innerHTML);
  console.log('CONTAINER HTML:', html);
  const pillCount = await page.$$eval('.sarv-tag-pill', els => els.length);
  console.log('PILL COUNT:', pillCount);
  await browser.close();
}
test();
