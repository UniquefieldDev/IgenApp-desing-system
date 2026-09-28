# Avatar

Kör alakú kép vagy monogram (`display` betű, `surface-sunk` alap) személyekhez: vendégek, szolgáltató kapcsolattartója. A `pair` változat a pár két monogramja egymásba érő `rose` és `lagoon` körben – a logó két pöttyének párja, és csak a párra való.

- A fogyasztó adja: `name` (a monogram az első két szó kezdőbetűje), `src`, `size` (`sm` 28px listasorban, `md` 40px kártyán, `lg` 56px profilban); a párnál `pair: [{name}, {name}]`.
- `tone="rose"`/`"lagoon"` egyedül csak akkor, ha a két partnert külön-külön jelöljük (pl. „ki vállalta”); vendégek mindig semlegesek.
- A képen nincs keret és árnyék; a páros változat 2px `surface` színű elválasztást kap a körök között.
