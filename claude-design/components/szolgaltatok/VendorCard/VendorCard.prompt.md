# VendorCard

Egy szolgáltató kártyája: kép (vagy kategória-ikon `surface-sunk` mezőn), kategória és hely szemöldökben, név, ártól-ig `amount` stílusban, a csatorna státusza `StatusTag`-gel és egy művelet. A `compact` változat vízszintes sor a listákhoz és a mobil nézethez.

- A fogyasztó adja: `name`, `category`, `place`, `price` („450 000 Ft-tól”), `status`, `image` vagy `icon`, `note` (egy sor: mi a következő lépés vagy a pár jegyzete), `action` (`Button size="sm"`), `href`.
- A státusz mindig látszik, ha a szolgáltató a pár csatornájában van; a még nem jelölt AI-javaslatnak nincs címkéje, a művelete „Hozzáadás a jelöltekhez”.
- Rácsban: 3 oszlop 1280px-en, 2 oszlop tableten, `compact` sor mobilon. Kép 3:2, `object-fit: cover`; a kép díszít, a döntés a szövegen alapul.
- Árat csak akkor mutatunk, ha a szolgáltató megadta; becsült ár nincs.
