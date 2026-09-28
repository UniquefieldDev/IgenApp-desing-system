# Sheet

Alulról felcsúszó panel mobilon (`mode="sheet"`, fogantyúval) és középre igazított ablak weben (`mode="dialog"`): ugyanaz a tartalom, kétféle elhelyezés. Alatta `overlay` sötétítő réteg; a panel tömör `surface-raised`, mert űrlap és döntés ül rajta – itt nincs üveg.

- A fogyasztó adja: `title`, `onClose` (a scrimre kattintás is zár), `children`, `footer` (a fő művelet `primary`, mellette `ghost` „Mégse”; mobilon a gombok teljes szélesek).
- Egy Sheet egy feladat: státusz átállítása, szolgáltató megkeresése, egy mező szerkesztése. Több lépés → külön képernyő `Stepper`-rel.
- A megnyitáskor a fókusz a címre vagy az első mezőre kerül, Esc zár – ez a fogyasztó dolga; a komponens a `role="dialog"`-ot és a címkét adja.
- Mobilon 1024px alatt mindig sheet, fölötte dialog; a döntést a fogyasztó hozza a `bp-desktop` alapján.
- `inline` a beágyazott bemutatóhoz (a scrim a szülőhöz igazodik, nem az ablakhoz).
