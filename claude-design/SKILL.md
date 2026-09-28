---
name: igen-design-system
description: Az Igen (magyar AI-esküvőtervező) design systeme – tokenek, komponensek, logó. Olvasd el, mielőtt Igen-képernyőt, webhelyet vagy appot tervezel.
---

# Igen design system – használat

A márka és a szabályok: `README.md` (hang, szín, tipográfia, forma, státuszok, webhely és app, képernyő-receptek). Ez a fájl a mechanika.

## Betöltés

1. `_ds_tokens.css` – minden token CSS-változóként (`--rose`, `--space-4`, `--radius-pill`, `--font-display`…) és minden szövegstílus osztályként (`.display-m`, `.body`, `.amount`). Sötét téma: `<html data-theme="dark">`.
2. `_ds_bundle.css` – a komponensek stíluslapja (első sora tölti be a Google Fonts betűket: Bricolage Grotesque, Figtree, DM Mono, latin-ext).
3. React 18 és ReactDOM 18 (`_vendor/`), majd `_ds_bundle.js` → `window.Igen`.
4. Komponensek: `window.Igen.<Név>` – Accordion, AppBar, Avatar, Button, CalendarItem, Callout, Card, Checkbox, ChoiceChip, DotList, DotsLoader, EmptyState, Footer, Icon, IconButton, ListItem, Logo, Menu, Pager, PriceCard, Progress, ScheduleSlot, SectionHeader, Segmented, Select, Sheet, StatusTag, Stepper, Switch, TabBar, TextField, Toast, TopNav, VendorCard. Propok és értékek: `components.d.ts` (komponensenként a mappájában `<Név>.d.ts`, a használati szabály `<Név>.prompt.md`).

## Szabályok, amiket a rendszer nem enged megkerülni

- Kézzel rajzolt gomb, mező, címke, ikon helyett a bundle komponensét kell mountolni. Ikon: `Igen.Icon` a készletből (`components.d.ts` `IconName`); emoji sehol.
- Egy nézeten egy `primary` (rose) gomb; a `lagoon` csak a fizetési pont és a „Lefoglalva”; a türkiz szövegként csak `--lagoon-text`.
- 1024px alatt app-elrendezés (`TabBar` + `AppBar` + `Sheet`), fölötte webes (`TopNav`, `SectionHeader`, `Footer`). Mobil tervezési szélesség 390px, asztali 1280px.
- Színátmenet nincs; üveg (`.ig-glass`) csak a lebegő navigáción és a színes háttér fölött lebegő kártyán; panel és űrlap mindig tömör.
- Minden érintési cél ≥ 44px; szöveg 4,5:1 mindkét témában; a státusz mindig szöveg is, nem csak szín.
- Tegezés, a párhoz szólva; számok: `2 700 000 Ft`, dátum `2027. június 12.`, idő `15:30`.

## Logó

`assets/logo/`: szókép világos/sötét háttérre, jel (két pötty), egyszínű változat, app-ikon, a teljes logóterv PDF-ben. Kódban: `Igen.Logo` (`variant="mark"` a jelhez), a témával együtt vált.
