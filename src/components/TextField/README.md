# TextField

Címkézett beviteli mező segédszöveggel vagy hibaüzenettel. A címke mindig látszik, a placeholder csak példát mutat.

- A fogyasztó adja: `label` (kötelező), `hint` vagy `error`, `suffix` (mértékegység: „Ft”, „fő”), valamint minden szokásos `input` attribútumot.
- Hibaüzenet: mi a gond és hogyan javítható, bocsánatkérés nélkül.
- Forintösszegnél a `suffix` „Ft”, a számot ezres szóközzel tagoljuk.
