# TabBar

Az app alsó navigációja: legfeljebb öt fül ikonnal és felirattal, lebegő pirulában, liquid glass réteggel a tartalom fölött. Alapból **Áttekintés, Terv, Szolgáltatók, Naptár, Vendégek**. „A nap” nem fül: az Áttekintés kártyájáról és a Naptárból nyílik, mert nyomtatható, megosztott lap, nem napi munkafelület.

- A fogyasztó adja: `active`, `onSelect` vagy `hrefFor`; `items` csak akkor, ha a területek listája változik (mindig ≤5, ikon a rendszer készletéből). `badge` a fülön a függő teendők száma.
- Aktív fül: `rose-soft` pirula, `rose` ikon és felirat; a többi `ink-muted`. A felirat mindig látszik – csak-ikon fül nincs. A felirat 11px, a rendszer legkisebb szövege: ezért nem lehet ötnél több fül, és nem lehet hosszabb név, mint „Szolgáltatók”.
- Magasság `tabbar` (64px) + alul a safe area. A tartalom alján ennyi + `space-4` hely maradjon, hogy az utolsó sor ne csússzon alá.
- 1024px-től (`bp-desktop`) a TabBar helyét a `TopNav` veszi át; a két navigáció egyszerre soha.
