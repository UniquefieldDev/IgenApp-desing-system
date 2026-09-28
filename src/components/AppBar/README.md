# AppBar

Mobil képernyőfejléc: vissza-gomb, cím és legfeljebb két művelet egy 56px-es sávban (`appbar`). A `large` változat a képernyő első nézetén a címet `display-m` méretben a sáv alá teszi, `subtitle`-lel (pl. a hátralévő napok); görgetéskor a fogyasztó a kis változatra vált.

- A fogyasztó adja: `title`, `onBack` vagy `backHref` (a gyökérképernyőkön egyik sem – ott a bal oldal üres), `action` (IconButton vagy `Button size="sm"`).
- Alapból üvegréteg a tartalom fölött, mint a TopNav; `glass={false}` tömör – ez kell nyomtatásnál és beágyazásnál.
- A cím egy sor, ellipszissel; ne rövidítsük a területek nevét, inkább kis változat.
- Webes nézetben (≥1024px) nincs AppBar: a TopNav és a `heading` stílusú oldalcím helyettesíti.
