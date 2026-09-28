# Stepper

Több lépéses folyamat haladása: „2 / 4 · Stílus és hangulat” és alatta a lépések a logó pöttyeivel. A kész lépés összeért pár, az aktuális két színes, még külön álló pötty, a hátralévő halvány pár; a lépéseket vonal köti össze, ami a megtett úton `rose`. A koncepció-brief (a pár, a stílus, a helyszín és dátum, a keret) és a fizetés lépései használják; egy Sheet-ben nincs Stepper.

- A fogyasztó adja: `steps` (rövid főnevek, 2–5 szó) és `current` (0-tól).
- A lépésnév szöveg is, nem csak jel; a képernyőolvasó a kész lépéseket „kész”-ként olvassa.
- 390px-en 5 lépés is elfér; ennél több lépés ne legyen.
- Az AppBar alatt ül, a képernyő tetején; a „Tovább” gomb a képernyő alján, a TabBar fölött, `primary`.
