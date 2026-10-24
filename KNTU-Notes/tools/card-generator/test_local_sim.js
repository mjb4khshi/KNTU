const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testLocalSim() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  page.on('console', msg => console.log('SIM LOG:', msg.text()));
  page.on('pageerror', err => console.log('SIM ERROR:', err.message));

  await page.goto('http://localhost:8000/calculus/%D9%85%D8%B3%DB%8C%D8%B1%D9%87%D8%A7%DB%8C%20%D9%85%D8%AA%D8%B9%D8%A7%D9%85%D8%AF/', { waitUntil: 'networkidle2' });

  // Move mouse over canvas to trigger interactive rendering
  await page.mouse.move(500, 350);
  await new Promise(r => setTimeout(r, 400));

  const tooltipText = await page.$eval('#orthoTooltip', el => el.innerText);
  console.log('SIM TOOLTIP TEXT:', tooltipText);

  await browser.close();
}
testLocalSim();
