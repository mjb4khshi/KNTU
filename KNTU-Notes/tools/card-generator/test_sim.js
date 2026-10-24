const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testSim() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE JS ERROR:', err.message));

  await page.goto('https://mjb4khshi.github.io/KNTU/calculus/%D9%85%D8%B3%DB%8C%D8%B1%D9%87%D8%A7%DB%8C%20%D9%85%D8%AA%D8%B9%D8%A7%D9%85%D8%AF/', { waitUntil: 'networkidle2' });

  const canvasExists = await page.$('#orthoCanvas') !== null;
  console.log('CANVAS EXISTS:', canvasExists);

  await browser.close();
}
testSim();
