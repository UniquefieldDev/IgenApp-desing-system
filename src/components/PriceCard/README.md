# PriceCard

Árkártya a csomagválasztáshoz: név, ár `display-l` méretben, időszak, egy mondat, pipás lista (`mint` pipa), gomb. A `featured` a fizetési pont: `shadow-card`, `lagoon` jelvény („Ajánlott”) és `lagoon` gomb – a rendszerben a türkiz a fizetés színe.

- A fogyasztó adja: `name`, `price` (ezres tagolás szóközzel, „Ft” utána), `period` („egyszeri”, „az esküvőig”), `lead`, `features` (3–6 sor, ige nélkül: „Vendéglista és RSVP”), `action`, `featured`, `badge`.
- Két-három kártya egy sorban 1024px-től, alatta egymás alatt; a `featured` középen vagy elsőként.
- Az ingyenes csomag gombja `secondary` („Kezdjük el”), a fizetősé `lagoon` („Teljes hozzáférés”). A `primary` rózsaszín itt nem jelenik meg – a képernyő fő művelete a fizetés.
- A feltételek (dátum rögzül, nem átruházható) a kártya alatt `Callout info`-ban, nem a listában.
