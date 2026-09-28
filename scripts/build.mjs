// Igen design system – build
// src/ (forrás, az artifact project/ mappájának tükre) → dist/, claude-design/, docs/
// Futtatás: node scripts/build.mjs   (npm run build)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');
const CD = path.join(ROOT, 'claude-design');
const DOCS = path.join(ROOT, 'docs');
const rd = (p) => fs.readFileSync(p, 'utf8');
const wr = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const cp = (a, b) => { fs.mkdirSync(path.dirname(b), { recursive: true }); fs.copyFileSync(a, b); };
const rmrf = (p) => fs.rmSync(p, { recursive: true, force: true });

// ---------- 1. tokens.css a tokens.json-ból (két téma + típusstílus-osztályok)
const t = JSON.parse(rd(path.join(SRC, 'tokens.json')));
const themes = t.color.themes.map((x) => x.id);
const first = themes[0];
const val = (tok, th) => {
  const v = tok.value;
  const raw = typeof v === 'string' ? v : (v[th] ?? v[first]);
  return String(raw).replace(/^\{(.+)\}$/, 'var(--$1)');
};
const css = [];
for (const th of themes) {
  const sel = th === first ? `:root, [data-theme="${th}"]` : `[data-theme="${th}"]`;
  const body = ['color', 'shadow'].flatMap((f) => (t[f]?.tokens ?? []).map((tok) => `  --${tok.name}: ${val(tok, th)};`)).join('\n');
  css.push(`${sel} {\n${body}\n}`);
}
const other = Object.entries(t)
  .filter(([k, v]) => v && typeof v === 'object' && Array.isArray(v.tokens) && !['color', 'shadow'].includes(k))
  .flatMap(([, v]) => v.tokens.map((tok) => `  --${tok.name}: ${tok.value};`));
for (const [k, v] of Object.entries(t.type.families)) other.push(`  --font-${k}: ${v};`);
css.push(`:root {\n${other.join('\n')}\n}`);
for (const g of t.type.groups) for (const st of g.styles) {
  let d = `font-family: var(--font-${g.family}); font-size: ${st.fontSize}; line-height: ${st.lineHeight}; font-weight: ${st.fontWeight};`;
  if (st.letterSpacing) d += ` letter-spacing: ${st.letterSpacing};`;
  css.push(`.${st.name} { ${d} }`);
}
const tokensCss = `/* Igen – tokens. Generált fájl: src/tokens.json az igazság, ezt ne szerkeszd. */\n${css.join('\n')}\n`;

// ---------- 2. dist/
rmrf(DIST);
const bundleJs = rd(path.join(SRC, 'components/bundle.js'));
const bundleCss = rd(path.join(SRC, 'components/bundle.css'));
const dts = rd(path.join(SRC, 'components/index.d.ts'));
wr(path.join(DIST, 'tokens.css'), tokensCss);
wr(path.join(DIST, 'igen.css'), `${tokensCss}\n${bundleCss}`);
wr(path.join(DIST, 'igen.js'), bundleJs);
wr(path.join(DIST, 'igen.d.ts'), dts);
cp(path.join(SRC, 'tokens.json'), path.join(DIST, 'tokens.json'));

// ---------- 3. React UMD (node_modules-ból; nélküle a CDN-tartalék viszi)
const vendor = {};
for (const [name, file] of [['react', 'react/umd/react.production.min.js'], ['react-dom', 'react-dom/umd/react-dom.production.min.js']]) {
  const p = path.join(ROOT, 'node_modules', file);
  if (fs.existsSync(p)) vendor[name] = p;
}
if (!vendor.react) console.warn('! react/react-dom nincs a node_modules-ban (npm install) – a preview-k a jsDelivr CDN-ről töltik.');

// ---------- 4. önálló preview-k (Claude Design + docs)
const GROUP_SLUG = { 'Márka': 'marka', 'Műveletek': 'muveletek', 'Űrlap': 'urlap', 'Elrendezés': 'elrendezes', 'Státusz': 'statusz', 'Naptár': 'naptar', 'A nap': 'a-nap', 'Navigáció': 'navigacio', 'Ikonok': 'ikonok', 'Rétegek': 'retegek', 'Visszajelzés': 'visszajelzes', 'Adat': 'adat', 'Szolgáltatók': 'szolgaltatok', 'Webhely': 'webhely' };
const safe = (s) => s.replace(/<\//g, '<\\/').replace(/<!--/g, '\\x3C!--');
const cdn = (pkg, file) => `https://cdn.jsdelivr.net/npm/${pkg}@18/umd/${file}`;
const headInject = (vendorRel) => [
  `<style>${safe(tokensCss)}\n${safe(bundleCss)}</style>`,
  vendor.react ? `<script src="${vendorRel}react.production.min.js"></script>` : '',
  `<script>if(!window.React){document.write('<script src="${cdn('react', 'react.production.min.js')}"><\\/script>')}</script>`,
  vendor['react-dom'] ? `<script src="${vendorRel}react-dom.production.min.js"></script>` : '',
  `<script>if(!window.ReactDOM){document.write('<script src="${cdn('react-dom', 'react-dom.production.min.js')}"><\\/script>')}</script>`,
  `<script>${safe(bundleJs)}</script>`,
].filter(Boolean).join('\n');

const comps = fs.readdirSync(path.join(SRC, 'components'), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();
const cards = [];
for (const comp of comps) {
  const pv = path.join(SRC, 'components', comp, 'preview.html');
  if (!fs.existsSync(pv)) continue;
  const html = rd(pv);
  const m = html.match(/^<!-- @dsCard (.*?) -->/);
  const attrs = Object.fromEntries([...(m?.[1] ?? '').matchAll(/(\w+)="([^"]*)"/g)].map((x) => [x[1], x[2]]));
  const page = /\bpage\b/.test(m?.[1] ?? '');
  const group = attrs.group ?? (comp === 'Cover' ? 'Márka' : 'Egyéb');
  const height = Number(attrs.height ?? 120);
  const slug = GROUP_SLUG[group] ?? group.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const readmeP = path.join(SRC, 'components', comp, 'README.md');
  const readme = fs.existsSync(readmeP) ? rd(readmeP) : '';
  const summary = (readme.split('\n\n')[1]?.split('. ')[0] ?? comp).replace(/[`*]/g, '').slice(0, 200);
  const make = (vendorRel) => `<!-- @dsCard group="${group}" height=${height} width=960${page ? ' page' : ''} -->\n` +
    html.split('\n').slice(1).join('\n').replace('<html lang="hu">', `<html lang="hu" data-theme="${first}">`).replace('</head>', `${headInject(vendorRel)}\n</head>`);
  wr(path.join(CD, 'components', slug, comp, `${comp}.html`), make('../../../_vendor/'));
  if (readme) wr(path.join(CD, 'components', slug, comp, `${comp}.prompt.md`), readme);
  const i = dts.indexOf(`export declare function ${comp}(`);
  if (i >= 0) {
    let start = dts.lastIndexOf('export declare function', i - 1); start = start < 0 ? 0 : dts.indexOf('\n', start) + 1;
    const end = dts.indexOf('\n', i) + 1;
    wr(path.join(CD, 'components', slug, comp, `${comp}.d.ts`), `// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts\n${dts.slice(start, end)}`);
  }
  const bridge = `<script>(function(){function h(){try{parent.postMessage({igenHeight:document.documentElement.scrollHeight,name:${JSON.stringify(comp)}},'*')}catch(e){}}window.addEventListener('message',function(e){if(e.data&&e.data.igenTheme){document.documentElement.setAttribute('data-theme',e.data.igenTheme);setTimeout(h,50)}});window.addEventListener('load',function(){h();setTimeout(h,400);setTimeout(h,1500)});if(window.ResizeObserver){new ResizeObserver(h).observe(document.body)}})();</script>\n</body>`;
  wr(path.join(DOCS, 'previews', `${comp}.html`), make('../vendor/').replace(/<\/body>(?![\s\S]*<\/body>)/, bridge));
  cards.push({ name: comp, path: `components/${slug}/${comp}/${comp}.html`, group, viewport: { width: 960, height }, subtitle: summary, page });
}

// ---------- 5. claude-design/ csomag
for (const f of fs.readdirSync(CD)) if (f !== 'components') rmrf(path.join(CD, f));
cp(path.join(SRC, 'components/bundle.js'), path.join(CD, '_ds_bundle.js'));
wr(path.join(CD, '_ds_bundle.css'), bundleCss);
wr(path.join(CD, '_ds_tokens.css'), tokensCss);
wr(path.join(CD, 'components.d.ts'), dts);
cp(path.join(SRC, 'tokens.json'), path.join(CD, 'tokens.json'));
for (const [n, p] of Object.entries(vendor)) cp(p, path.join(CD, '_vendor', path.basename(p)));
for (const f of fs.readdirSync(path.join(SRC, 'assets/logo'))) cp(path.join(SRC, 'assets/logo', f), path.join(CD, 'assets/logo', f));
wr(path.join(CD, 'README.md'), rd(path.join(SRC, 'brand-book.md')));
wr(path.join(CD, 'SKILL.md'), rd(path.join(ROOT, 'scripts/SKILL.template.md')).replace('{{COMPONENTS}}', comps.filter((c) => !['Cover', 'Palette'].includes(c)).join(', ')));
wr(path.join(CD, '_ds_manifest.json'), JSON.stringify({ name: 'Igen', namespace: 'Igen', bundle: '_ds_bundle.js', css: ['_ds_tokens.css', '_ds_bundle.css'], types: 'components.d.ts', tokens: 'tokens.json', cards: cards.map(({ page, ...c }) => c) }, null, 2));

// ---------- 6. docs/ (GitHub Pages galéria)
for (const [n, p] of Object.entries(vendor)) cp(p, path.join(DOCS, 'vendor', path.basename(p)));
const ORDER = ['Márka', 'Ikonok', 'Műveletek', 'Űrlap', 'Navigáció', 'Elrendezés', 'Státusz', 'Szolgáltatók', 'Naptár', 'A nap', 'Adat', 'Visszajelzés', 'Rétegek', 'Webhely'];
const groupsOrdered = [...new Set([...ORDER.filter((g) => cards.some((c) => c.group === g)), ...cards.map((c) => c.group)])];
const gallery = rd(path.join(ROOT, 'scripts/gallery.template.html'))
  .replace('{{TOKENS_CSS}}', safe(tokensCss))
  .replace('{{CARDS_JSON}}', safe(JSON.stringify({ groups: groupsOrdered, cards })));
wr(path.join(DOCS, 'index.html'), gallery);
wr(path.join(DOCS, '.nojekyll'), '');

console.log(`kész: dist/ (4 fájl), claude-design/ (${cards.length} kártya), docs/ (galéria + ${cards.length} preview)`);
