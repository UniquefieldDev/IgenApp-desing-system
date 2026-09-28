# Igen – design system

Az **Igen** magyar, AI-alapú esküvőtervező platform design systeme: tokenek két témában, 34 React-komponens élő előnézettel és magyar használati szabályokkal, 53 ikon, a „Két pötty” logó, és a brand book. Egy rendszer a webhelyhez és az apphoz.

- **Brand book**: [`src/brand-book.md`](src/brand-book.md) – hang, szín, tipográfia, forma, státuszok, webhely és app, képernyő-receptek az 1.0 területeihez.
- **Galéria**: `docs/index.html` – minden kártya világos és sötét témában (GitHub Pages-re települ a workflow-val).
- **Claude Design**: `claude-design/` – a claude.ai/design design-system projektbe tölthető csomag.

## Használat kódban

```html
<link rel="stylesheet" href="dist/igen.css">   <!-- tokenek + komponens-stílusok; a Google Fonts-ot is betölti -->
<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="dist/igen.js"></script>           <!-- window.Igen -->
<script>
  const { Button, TabBar } = window.Igen;
  ReactDOM.createRoot(document.getElementById('app')).render(
    React.createElement(Button, { variant: 'primary' }, 'Koncepció készítése'));
</script>
```

- Sötét téma: `<html data-theme="dark">`. Csak tokenek: `dist/tokens.css`; a nyers adatok: `dist/tokens.json`.
- Propok: `dist/igen.d.ts`; komponensenként a használati szabály: `src/components/<Név>/README.md`.
- A bundle klasszikus script, nem modul: `window.React` és `window.ReactDOM` (18) előtte töltődjön be.

## A repó szerkezete

```
src/                      A FORRÁS – az artifact-beli design system project/ mappájának tükre
  tokens.json             tokenek (szín két témában, típus, térköz, sugár, árnyék, méret, layout, z)
  brand-book.md           a brand book
  components/bundle.js    a komponensek (egy klasszikus script → window.Igen)
  components/bundle.css   a stíluslap (tokenekre hivatkozik)
  components/index.d.ts   típusok
  components/<Név>/       README.md (szabályok) + preview.html (élő előnézet, első sor: @dsCard)
  assets/logo/            logó SVG-k, app-ikon, a logóterv PDF-je
scripts/build.mjs         src → dist, claude-design, docs
scripts/check.mjs         render-ellenőrzés Chromiumban (playwright)
dist/                     GENERÁLT: tokens.css, igen.css, igen.js, igen.d.ts, tokens.json
claude-design/            GENERÁLT: Claude Design-csomag (önálló kártyák, _ds_manifest.json, SKILL.md)
docs/                     GENERÁLT: GitHub Pages galéria
```

Generált mappát ne szerkessz: a következő `npm run build` felülírja. Ami változik, az a `src/`-ban változik.

## Fejlesztés

```bash
npm install          # react, react-dom (a preview-k helyi React-tel), playwright
npm run build        # dist/, claude-design/, docs/
npm run check        # minden preview megnyílik és mountol (npx playwright install chromium egyszer)
npm run package:claude-design   # zip a Claude Design-hoz
```

Új komponens: függvény a `src/components/bundle.js`-ben (és az exportáló objektumban, meg a fejléc-kommentben), stílus a `bundle.css`-ben, típus az `index.d.ts`-ben, `src/components/<Név>/README.md` + `preview.html` – a preview első sora `<!-- @dsCard group="…" height=N -->`. A brand book szabályai (egy `primary` nézetenként, üveg csak lebegő rétegen, 44px érintési cél, 4,5:1 kontraszt mindkét témában) itt is érvényesek.

## Kapcsolat az artifact-tal

A rendszer szerkeszthető változata egy Design System artifact a claude.ai-on; annak `project/` mappája és ez a `src/` ugyanaz a fájlszerkezet (a `project/README.md` itt `brand-book.md`, a lap által generált `api/`, `tokens.css`, `manifest.json` nincs itt). Szinkron bármelyik irányba: a fájlok másolása.

## Betűk

Bricolage Grotesque (címsor), Figtree (szöveg), DM Mono (adat) – Google Fonts, latin-ext készlet; a `bundle.css` első sora tölti be. Offline használathoz a fontfájlokat a `src/fonts/` mappába kell tenni és a `tokens.json` `type.fonts` listájába felvenni.
