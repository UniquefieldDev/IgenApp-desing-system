// Render-ellenőrzés: minden docs/previews/*.html megnyílik Chromiumban, a bundle mountol, nincs konzolhiba.
// Futtatás: npm run check   (előtte: npm run build; a playwright devDependency)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(ROOT, 'docs/previews');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html')).sort();
// CHROMIUM_PATH: saját Chromium, ha a playwright böngészője nincs letöltve
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
let fails = 0;
for (const f of files) {
  const page = await browser.newPage({ viewport: { width: 960, height: 800 } });
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.googleapis|net::ERR/.test(m.text())) errs.push(m.text()); });
  await page.goto('file://' + path.join(dir, f), { waitUntil: 'load' });
  await page.waitForTimeout(200);
  const r = await page.evaluate(() => ({ igen: !!window.Igen, kids: (document.getElementById('root') || document.body).children.length }));
  const bad = errs.length || !r.igen || r.kids === 0;
  if (bad) fails++;
  console.log(`${bad ? 'FAIL' : 'ok  '} ${f.padEnd(24)} ${errs.join(' | ').slice(0, 160)}`);
  await page.close();
}
await browser.close();
console.log(`${files.length} preview, ${fails} hiba`);
process.exit(fails ? 1 : 0);
