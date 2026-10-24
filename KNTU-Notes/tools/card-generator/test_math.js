const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testMath() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:8000/calculus/%D9%81%D9%87%D8%B1%D8%B3%D8%AA%20%D9%85%D8%B7%D8%A7%D9%84%D8%A8/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));

  const hasMjml = await page.$$eval('mjx-container', els => els.length);
  console.log('MJX CONTAINERS FOUND:', hasMjml);

  const readingTime = await page.$eval('.sarv-reading-meta', el => el.innerText.trim());
  console.log('READING TIME METADATA:', readingTime);

  await browser.close();
}
testMath();
