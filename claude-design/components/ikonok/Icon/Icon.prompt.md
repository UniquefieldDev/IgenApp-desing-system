# Icon

Az Igen ikonkészlete: 24-es rács, 2px vonal, kerek végek és sarkok, mindig `currentColor`. A készlet a Lucide rácsán készült, ezért egy hiányzó ikon a Lucide-ból (ISC licenc) átvehető átrajzolás nélkül – de a bővítés is ebbe a komponensbe kerüljön, ne szabadon szórt SVG-kbe.

- A fogyasztó adja: `name` és opcionálisan `size` (`16` = icon-sm, `20` = icon-md, alap; `24` = icon-lg). Ismeretlen név esetén a figyelmeztető kör jelenik meg – a preview-n rögtön feltűnik.
- Az ikon dekoratív, ha felirat áll mellette: ekkor `aria-hidden`. Önálló jelentéssel (ikon-gomb, státusz) `label`-t kap, vagy az `IconButton` viszi a feliratot.
- Színe a környező szöveg színe. Sűrű listákban `ink-muted`, kiemelt helyen `rose`; a `lagoon`-t ikonra sem használjuk szövegszínként, arra a `lagoon-text` van.
- Területek ikonjai (TabBar, üres állapotok): Áttekintés `home`, Terv `sparkles`, Szolgáltatók `briefcase`, Naptár `calendar`, Vendégek `users`, A nap `sun`. Szolgáltató-kategóriák: helyszín `map-pin`, fotó `camera`, zene `music`, catering `utensils`, dekor `leaf`, ruha/ajándék `gift`.
- Emoji sehol; ikon helyett szöveg mindig megengedett, fordítva nem.
