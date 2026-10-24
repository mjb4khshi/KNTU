/**
 * Generator script for Social Cards using Puppeteer and system Edge
 */
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const courseMap = {
  'adabiat': { name: 'ادبیات فارسی', color: '#e0218a', glow: 'rgba(224, 33, 138, 0.25)' },
  'calculus': { name: 'ریاضی عمومی', color: '#00a896', glow: 'rgba(0, 168, 150, 0.25)' },
  'physics': { name: 'فیزیک دانشگاهی', color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.25)' },
  'programming': { name: 'برنامه‌نویسی', color: '#10b981', glow: 'rgba(16, 185, 129, 0.25)' },
  'micro economics': { name: 'اقتصاد خرد', color: '#d97706', glow: 'rgba(217, 119, 6, 0.25)' },
  'macroeconomics': { name: 'اقتصاد کلان', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.25)' },
  'numerical-analysis': { name: 'محاسبات عددی', color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.25)' },
  'statics': { name: 'استاتیک و مکانیک', color: '#c2410c', glow: 'rgba(194, 65, 12, 0.25)' },
  'projects': { name: 'پروژه‌ها و مقالات', color: '#a855f7', glow: 'rgba(168, 85, 247, 0.25)' }
};

const defaultMeta = { name: 'یادداشت‌های آزاد • KNTU', color: '#00a896', glow: 'rgba(0, 168, 150, 0.25)' };

function extractMarkdownData(filePath, docsRoot) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split(/\r?\n/).map(l => l.trim());

  let h1 = null;
  const h2s = [];
  const h3s = [];

  for (const line of lines) {
    if (line.startsWith('# ')) {
      if (!h1) h1 = line.replace(/^#\s+/, '').trim();
    } else if (line.startsWith('## ')) {
      h2s.push(line.replace(/^##\s+/, '').trim());
    } else if (line.startsWith('### ')) {
      h3s.push(line.replace(/^###\s+/, '').trim());
    }
  }

  const rel = path.relative(docsRoot, filePath);
  const folder = rel.split(path.sep)[0] || 'general';
  const meta = courseMap[folder] || defaultMeta;

  if (!h1) {
    h1 = path.basename(filePath, '.md');
  }

  // Create card output path
  // docs/assets/cards/relative/path.png
  const cardRel = rel.replace(/\.md$/, '.png');

  return {
    relPath: rel.replace(/\\/g, '/'),
    cardRel: cardRel.replace(/\\/g, '/'),
    title: h1,
    subheadings: h2s.slice(0, 3),
    allH2: h2s.slice(0, 6),
    allH3: h3s.slice(0, 4),
    category: meta.name,
    color: meta.color,
    glow: meta.glow,
    folder: folder
  };
}

async function renderCard(browser, templateHtml, note, outPath) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

  await page.setContent(templateHtml, { waitUntil: 'domcontentloaded' });
  await page.evaluate(async (data) => {
    window.applyCardData(data);
    if (document.fonts) {
      await document.fonts.ready;
    }
  }, note);

  // Give a small delay for smooth canvas & fonts
  await new Promise(r => setTimeout(r, 60));

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await page.screenshot({ path: outPath, type: 'png' });
  await page.close();
}

async function main() {
  const docsRoot = path.resolve(__dirname, '../../docs');
  const outBase = path.join(docsRoot, 'assets/cards');

  // Load template HTML
  const templatePath = path.resolve(__dirname, 'card-template.html');
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  // Collect all MD files
  const mdFiles = [];
  function walk(dir) {
    const list = fs.readdirSync(dir);
    for (const f of list) {
      const full = path.join(dir, f);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (f !== 'assets' && f !== 'javascripts') walk(full);
      } else if (f.endsWith('.md')) {
        mdFiles.push(full);
      }
    }
  }
  walk(docsRoot);

  console.log(`Found ${mdFiles.length} markdown notes to generate social cards...`);

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
  });

  let count = 0;
  for (const mdPath of mdFiles) {
    const note = extractMarkdownData(mdPath, docsRoot);
    const dest = path.join(outBase, note.cardRel);

    // If card doesn't exist or is older than markdown file, generate it
    let needBuild = true;
    if (fs.existsSync(dest)) {
      const mdStat = fs.statSync(mdPath);
      const cardStat = fs.statSync(dest);
      if (cardStat.mtimeMs > mdStat.mtimeMs) {
        needBuild = false;
      }
    }

    if (needBuild) {
      process.stdout.write(`Generating [${note.folder}] ${note.title}... `);
      await renderCard(browser, templateHtml, note, dest);
      console.log('✓');
      count++;
    }
  }

  await browser.close();
  console.log(`Finished! Generated/Updated ${count} cards.`);
}

if (require.main === module) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { main, extractMarkdownData };
