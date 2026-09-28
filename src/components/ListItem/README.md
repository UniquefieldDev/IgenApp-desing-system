# ListItem

Egy sor egy listában: bal oldalon ikon vagy avatar, középen cím és meta, jobb oldalon státusz vagy összeg, végén nyíl, ha a sor továbbvisz. A `List` konténer adja a keretet és az elválasztókat (`inset` nélkül kártyaként, `inset`-tel csak vonalakkal).

- A fogyasztó adja: `title`, `meta`; `leading` (Icon `ink-muted`, Avatar), `trailing` (StatusTag, `amount` stílusú összeg, dátum); `href` vagy `onClick`, ha a sor művelet – ilyenkor a nyíl magától megjelenik, és az egész sor a 44px-es érintési cél.
- Egy sor egy dolog: a sorban nincs második gomb. Ha kell (törlés, kedvenc), az a részletlapon vagy egy Sheet-ben van.
- Cím és meta egy-egy sor, ellipszissel; hosszú szöveg a részletlapra való.
- Szolgáltatók listájában a `VendorCard compact` gazdagabb; a ListItem a vendéglista, a beállítások és a menük sora.
