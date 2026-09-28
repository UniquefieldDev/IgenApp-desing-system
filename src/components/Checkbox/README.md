# Checkbox

Címkézett jelölőnégyzet (`radius-sm`, kipipálva `mint`), 44px-es sorban, opcionális segédszöveggel. Ugyanaz a négyzet, amit a Naptár teendője használ – itt űrlapban és beállítási listában áll.

- A fogyasztó adja: `label`, `checked`, `onChange`; `hint` a következményt mondja el („A vendég kap emlékeztetőt”).
- Több egymás alatti Checkbox egy `List inset` konténerben; a csoportnak van címe (`label` stílus).
- Kizáró választáshoz nem Checkbox: 2–4 lehetőségnél `Segmented`, több és többesnél `ChoiceChip`, hosszú listánál `Select`.
