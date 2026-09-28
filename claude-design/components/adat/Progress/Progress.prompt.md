# Progress

Kitöltöttség-sáv számokkal: a költségvetés lekötött része, az RSVP-válaszok aránya, a teendők készültsége. A szám mindig ott van a sáv mellett (`amount` vagy `time` stílus, táblázatos számjegyek), a sáv önmagában soha nem hordozza az információt.

- A fogyasztó adja: `value`, `max`, `label`; `valueLabel` és `maxLabel` a két szélső szám, `hint` a bal alsó magyarázat.
- Kitöltés `rose`; `tone="lagoon"` a fizetéshez és a visszaszámláláshoz kötődő haladásra.
- A két pötty (`dots`, alapból be): a kitöltés végén a saját színű pötty halad, a sáv végén a másik vár; 100%-nál összeérnek és a logó jelévé állnak össze. A pozíció százalékos, így bármilyen szélességen (390px-en is) működik. Szűk, ismétlődő sorokban (táblázat, lista) `dots={false}`.
- `max` fölött nincsenek pöttyök: a sáv `danger` lesz, és a szám is – ez a kerettúllépés egyetlen vizuális jele a Progress-en, mellé `Callout` kell.
- Nagy összeg a sáv fölé `amount-l` stílusban, egy kártyán egyszer.
