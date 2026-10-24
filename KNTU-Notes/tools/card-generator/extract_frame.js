const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function extractVideoFrame() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 300, height: 300 });

  const videoPath = path.resolve('KNTU-Notes/docs/photo_2026-09-04_20-05-34.mp4');
  const videoUri = 'file:///' + videoPath.replace(/\\/g, '/');

  const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;overflow:hidden;background:#000;">
  <video id="v" src="${videoUri}" muted autoplay playsinline style="width:300px;height:300px;object-fit:cover;"></video>
</body>
</html>`;

  await page.setContent(html);
  // Wait 1.2 seconds for video to play nicely
  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({ path: 'KNTU-Notes/tools/card-generator/real_avatar.png' });
  await browser.close();
  console.log('Real video frame captured successfully!');
}

extractVideoFrame().catch(err => {
  console.error(err);
  process.exit(1);
});
