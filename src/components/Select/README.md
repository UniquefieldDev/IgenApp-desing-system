# Select

Címkézett lenyíló mező a `TextField` dobozában (`radius-md`, `line-strong` keret, `chevron-down` ikon), natív `select`-tel – mobilon a rendszer saját választóját nyitja, ami gyorsabb és megbízhatóbb bármely rajzolt listánál.

- A fogyasztó adja: `label`, `options`, `value`, `onChange`; `placeholder` az üres állapot szövege („Válasszatok kategóriát”); `hint` vagy `error` a mező alatt.
- Kevesebb mint öt lehetőségnél `Segmented` vagy `ChoiceChip` jobb: látszik minden választás.
- A hiba szövege megmondja a teendőt is, ahogy a TextField-nél.
