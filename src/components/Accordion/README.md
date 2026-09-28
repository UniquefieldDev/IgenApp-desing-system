# Accordion

Kérdés–válasz lista natív `details`/`summary` elemekkel: hajszálvonalak között. Nyíl helyett a logó két pöttye jelzi az állapotot: zárva a `rose` és a `lagoon` pötty külön áll, nyitáskor egymás felé csúsznak és összeérnek, mint a logóban (a metszet `ink`). Díszítő elem, az állapotot a natív `details` közli a képernyőolvasóval. Gyakori kérdések a landingen és a súgóban; az appban a „Miért ezt javasoljuk?” magyarázatok.

- A fogyasztó adja: `items` (`q` egy kérdő mondat, `a` egy-két bekezdés; `open` a kezdetben nyitott).
- Egyszerre több is lehet nyitva – a natív viselkedést nem írjuk felül; a kérdés sora 56px, teljes szélességében kattintható.
- 6–8 tétel fölött csoportosítsuk címekkel (`SectionHeader`), ne egy hosszú harmonikába.
