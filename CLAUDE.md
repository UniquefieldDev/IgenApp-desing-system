# Igen design system – útmutató Claude Code-nak

Ez a repó az **Igen** (magyar AI-esküvőtervező) design systeme. Forrás: `src/`; minden más generált (`npm run build`).

## Ha `/design-sync` fut (Claude Design szinkron)

- **Cél**: egy Claude Design design-system projekt „Igen” néven. Ha már van ilyen, azt frissítsd; ne hozz létre másodikat.
- **Bundle**: `dist/igen.js` – egy klasszikus script, `window.Igen`-re teszi a komponenseket (nincs ES-modul, nincs import). Függőség: React 18 és ReactDOM 18 globálként (`window.React`, `window.ReactDOM`) a bundle előtt.
- **Stíluslap**: `dist/igen.css` (tokenek CSS-változóként + komponens-stílusok; első sora tölti a Google Fonts betűket). Sötét téma: `<html data-theme="dark">`.
- **Tokenek**: `src/tokens.json` (szín két témában, típus, térköz, sugár, árnyék, méret, layout, z).
- **Típusok / propok**: `src/components/index.d.ts` (kézzel írt, dokumentált prop-szerződések – ezt használd, ne generálj újat).
- **Kártyák**: kész, önálló preview-k a `claude-design/components/<csoport>/<Név>/<Név>.html` alatt, első sorukban `<!-- @dsCard group="…" height=N width=960 -->`. A csoportnevek magyarok (Márka, Ikonok, Műveletek, Űrlap, Navigáció, Elrendezés, Státusz, Szolgáltatók, Naptár, A nap, Adat, Visszajelzés, Rétegek, Webhely) – tartsd meg őket. Használati szabály komponensenként: ugyanott `<Név>.prompt.md`.
- **Brand book**: `src/brand-book.md` – ez menjen a projekt leírásába / README-jébe. Az ügynöknek szóló rövid használati utasítás: `claude-design/SKILL.md`.
- **Logó**: `src/assets/logo/` – SVG-k és a logóterv PDF-je; feltöltendő eszközök.
- **Ne** rajzold újra a komponenseket, ne generálj Tailwind-alapú másolatot: a bundle a hiteles, a preview-k pedig azt mountolják. Egy komponens = a `window.Igen.<Név>` függvény.
- Ellenőrzés a feltöltés előtt: `npm install && npm run build && npm run check` (a check Chromiumban nyit meg minden preview-t; `npx playwright install chromium` egyszer).

## Szabályok, amiket a rendszer nem enged megkerülni

Egy nézeten egy `primary` (rose) gomb; `lagoon` csak fizetési pont és „Lefoglalva”; üveg csak lebegő navigáción; 44px érintési cél; 4,5:1 kontraszt mindkét témában; a két pötty motívum egy képernyőn legfeljebb két helyen. A teljes lista: `src/brand-book.md`.
