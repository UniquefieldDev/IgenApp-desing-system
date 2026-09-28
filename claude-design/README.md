# Igen — design system

Az Igen magyar, AI-alapú esküvőtervező: a pár egy briefből koncepciót, költségvetést és szolgáltatói jelölteket kap, aztán a szervezés minden lépését egy helyen viszi végig a partnerével. A vizuális világ modern és élénk: telt színek, pirula formák, nagy és határozott címsorok. Ünnepi, de nem giccses, és egy szervezőeszköz nyugalmát adja.

## Hang és szöveg

- Tegezünk, és mindig a párhoz beszélünk („Nézzük meg a fotósokat”), soha nem egy emberhez („Nézd meg a fotósodat”). Ketten szervezik.
- Rövid, magyar mondatokat írunk, szakzsargon nélkül. „Ajánlatot adott”, nem „Quote received”. Az egyetlen angol szó a „No go” státusz.
- A gombfelirat igével kezdődik, mondatkezdő nagybetűvel: „Megkeresés küldése”, „Hozzáadás a jelöltekhez”.
- Nincs felkiáltójel-halmozás és nincs emoji. Egy „Igen!” megengedett, a sikeres foglalás visszajelzésében.
- Hibaüzenet: mi a baj és mi a teendő. „A keret legalább 500 000 Ft legyen.”
- Számok: ezres tagolás szóközzel, „Ft” utána (`2 700 000 Ft`); dátum rövid formában: „nov. 12.”, teljes formában „2027. június 12.”; idő 24 órás: „15:30”.

## Szín

- Oldal: `surface`; kártya és űrlapmező: `surface-raised`; navigáció és üres állapot: `surface-sunk`. Szöveg: `ink`, másodlagos szöveg: `ink-muted`.
- `rose` a márka: elsődleges gomb, aktív állapot, márkanév. A rajta lévő szöveg `on-rose`, soha nem sima fehér (sötét témában sötét).
- `lagoon` a második márkaszín, a `rose` komplementere (türkiz): visszaszámláló, fizetési pont, „Lefoglalva” státusz. Csak kitöltés, mindig `on-lagoon` szöveggel; szövegszínként nem olvasható.
- `sky` az időpontok és az „Egyeztetés” színe, `mint` (levélzöld, a türkiztől jól elváló árnyalat) a sikeré és a kipipált teendőé, `danger` a hibáé. Mindegyiknek van `-soft` háttere a saját színű szöveg mögé.
- Egy képernyőn legfeljebb egy nagy `rose` és egy nagy `lagoon` felület legyen, a többi semleges. Az élénkség a hangsúlyokból jön, nem a mennyiségből.
- Színátmenet nincs.

## Tipográfia

- Címsor: Bricolage Grotesque (`display` család): `display-xl`, `display-l`, `heading`, `title`. Egy képernyőn egy `display-*` stílus legyen.
- Szöveg: Figtree (`sans` család): `body`, `body-strong`, `small`, és a nagybetűs `label` a szekció-szemöldökökhöz.
- Adat: DM Mono (`mono` család): `time` az időpontokhoz és `amount` a forintösszegekhez, táblázatos számjegyekkel.
- Mindhárom Google Fonts betűtípus, latin-ext készlettel (ő, ű). Betöltés: `components/bundle.css` első sora.

## Forma, tér, mélység

- A pirula (`radius-pill`) az Igen alapformája: gombok, státuszcímkék, navigáció. Kártya és panel: `radius-lg`; mező és menetrendsáv: `radius-md`; jelölőnégyzet: `radius-sm`.
- Térköz 4-es rácson: `space-1` … `space-8`. Kártya belső térköze `space-5` asztalon, `space-4` mobilon; szekciók között `space-6`.
- Mélység: alapból csak `line` keret. `shadow-card` csak a kiemelt kártyán.
- Liquid glass (`glass-fill`, `glass-edge`, `shadow-glass`, `blur-glass`) a lebegő rétegeken: `TopNav`, `Menu`, felugró ablak, a színes vagy képes háttér fölött ülő kártyák (`Card tone="glass"`: Áttekintés, koncepció, landing) és naptársorok (`CalendarItem glass`; az időpont üvegen `glass-sky`). Hosszú, görgetett listák, státuszcímkék és a menetrend tömörek maradnak, mert ott a változó háttér rontaná az olvashatóságot, a menetrendet pedig nyomtatják. Ha a rendszer kevesebb átlátszóságot kér, tömör `surface-raised` lép a helyére.
- Fókusz: 2px tömör `focus` gyűrű, 2px réssel. Minden interaktív elemen látszik.

## Státuszok és jelölések

- A szolgáltatói csatorna: `StatusTag` — Jelölt, azaz a pár rövidlistája (keretes) → Egyeztetés (`sky-soft`) → Ajánlat (`rose-soft`) → Lefoglalva (tömör `lagoon`); No go: áthúzott, `surface-sunk`. A státusz mindig szöveg is, nem csak szín.
- A Naptárban a teendő pipálható és fehér alapú, az időpont `sky-soft` alapú, pöttyel és időponttal (`CalendarItem`). A kettő egy listában keveredik, de első ránézésre elkülönül.
- A nap menetrendje (`ScheduleSlot`) nyomtatva is működjön: fekete-fehérben is olvasható, a kiemelés csak háttér, jelentést nem hordoz egyedül.

## Logó és ikonok

- Logó: „Két pötty” — az i pöttye két egymás felé dőlő kör, `rose` és `lagoon`; a metszetük a betű színe (`ink` világos, világos szín sötét háttéren). A szókép a Bricolage Grotesque 800 körvonalazott „gen” betűi. Kidolgozás, védőzóna és változatok: az „Igen logó” eszközcsoport PDF-je és az „Igen logó · Két pötty” vászon. Önálló jelként (app ikon, favicon) csak a két pötty áll.
- A két pötty mint motívum: a logó pöttyei a termékben is a „kettőtök” jelei – külön állnak, közelítenek, összeérnek. Használat: `DotsLoader` (AI-várakozás), `Stepper` (kész lépés = összeért pár), `Progress` (100%-nál összeérnek), `Toast booked` (a foglalás „Igen!”-je), `EmptyState` (nagy, halvány pár), `Pager` (landing körhinta), `DotList` (leíró felsorolás), `Accordion` (nyitott = összeért), `Avatar pair`. Nem használjuk: `StatusTag`, `CalendarItem` (ott a pötty az időpont jele), gombok, ikonok helyett. Egy képernyőn legfeljebb két helyen jelenjen meg, különben elkopik.
- Ikonok: a rendszer saját készlete (`Icon`): 24-es rács, 2px vonal, kerek végek, mindig `currentColor`. A Lucide rácsán készült, ezért egy hiányzó ikon a Lucide-ból átvehető, de a készletbe kerül, nem szabadon az oldalra. Ikon felirat mellett dekoratív; egyedül csak `label`-lel (`IconButton`). Emojit nem használunk; ha nincs jó ikon, a szöveg elég.
- A területek ikonjai: Áttekintés `home`, Terv `sparkles`, Szolgáltatók `briefcase`, Naptár `calendar`, Vendégek `users`, A nap `sun`.

## Webhely és app

Egy rendszer, két elrendezés. A tokenek, a színek, a típusok és a komponensek közösek; ami különbözik, az a navigáció és a képernyő szerkezete. A váltás a `bp-desktop` (1024px) töréspontnál történik, nem az eszköz típusánál: a webes app mobilböngészőben is app-elrendezést kap.

| | App (390–1023px) | Webhely és webes app (1024px-től) |
| --- | --- | --- |
| Fő navigáció | `TabBar` alul, öt fül | `TopNav` felül, hat terület |
| Képernyőfejléc | `AppBar` (kis vagy `large`) | `heading` stílusú oldalcím, `SectionHeader` |
| Rétegek | `Sheet` alulról | `Sheet mode="dialog"` középen, `Menu` |
| Nagy cím | `display-m` (32px) | `display-xl` / `display-l` |
| Konténer | teljes szélesség, `space-4` margó; tableten `container-app` | `container-web` (1200px), `space-6` margó |
| Kártyarács | egy oszlop, `compact` sorok | 2–3 oszlop, `space-5` réssel |
| Lábléc | nincs; jogi sor `small` stílusban | `Footer` |

- **Érintési cél**: minden interaktív elem legalább `tap-min` (44px) magas és széles; a 34px-es vezérlők (`Button sm`, `ChoiceChip`) körül a sor térköze adja ki. A TabBar és az AppBar fölött, illetve alatt a rendszer safe area-ja (`env(safe-area-inset-*)`) hozzáadódik a méretükhöz.
- **Rétegek**: `z-nav` a lebegő navigáció, `z-sheet` a scrim és a panel, `z-toast` mindenek fölött. A scrim `overlay`; a panel mindig tömör `surface-raised`, mert döntés és űrlap ül rajta – az üveg csak a navigációé és a tartalom fölött lebegő kártyáké.
- **Téma**: az app a rendszer világos/sötét beállítását követi, a fiókban átkapcsolható (`Switch`); a webhely világos, a webes app a fiók beállítását viszi. A két témát nem keverjük egy képernyőn; a logó és az avatar-pár magától vált.
- **Mozgás** (nincs tokenje, ez a szabály): 120ms a mikro-visszajelzésre (kapcsoló, pipa), 200ms a rétegek megjelenésére (Sheet, Menu, Toast), 320ms a képernyőváltásra; mind `cubic-bezier(.2,.8,.2,1)`. `prefers-reduced-motion` esetén csak áttűnés. Tartalom nem ugrál betöltéskor: a helyét `surface-sunk` blokk tartja.
- **Űrlap**: címke a mező fölött, mező 44px, segédszöveg vagy hiba a mező alatt – a hiba a teendőt is megmondja. Egy képernyőn egy `primary` gomb, a képernyő alján (mobilon a TabBar fölött, teljes szélességben). Mentés nélkül érvényesülő beállítás `Switch`, minden más `Checkbox`.
- **Visszajelzés**: ami elmúlik, `Toast`; ami megmarad, `Callout`; ami döntést kér, `Sheet`. Egyszerre egy-egy.
- **Üres állapot** minden listának van (`EmptyState`), és a következő lépést kínálja – ez a legtöbb új pár első képernyője.
- **Nyomtatás**: „A nap” és a vendéglista nyomtatható; ott `glass={false}`, csak `line` keretek, fekete-fehérben is olvasható `ScheduleSlot`, és a `Footer` helyett a pár neve és a dátum a lap tetején.

## Képernyő-receptek (1.0)

Melyik terület miből épül – hogy a UX- és UI-tervek ne találjanak ki új elemet ott, ahol van.

- **Landing (webhely)**: `SectionHeader size="l"` hős egy `primary` gombbal (a webhely egyetlen rózsaszín gombja: „Koncepció készítése”), három `Card` a folyamatról `DotList`-tel, vélemény-körhinta `Pager`-rel, `VendorCard` rács mintaként, `PriceCard` pár (Kezdés · Igen) alatta `Callout info` a dátumrögzítésről, `Accordion` GYIK, `Footer`.
- **Brief és koncepció (Terv)**: `Stepper` az AppBar alatt, `ChoiceChip` sorok a stílushoz, `TextField`/`Select` a tényekhez, `Progress` a keretfelosztáshoz; generálás közben `DotsLoader`, a kész koncepció `Card tone="glass"` a színes háttér fölött, `Callout brand` az AI-javaslatokhoz.
- **Áttekintés**: `AppBar large` a visszaszámlálóval, `Avatar pair` a fiókban, kiemelt `Card tone="highlight"` a következő teendővel, `Progress` a kerethez, a nap kártyája (innen nyílik „A nap”), `List` a legutóbbi eseményekkel.
- **Szolgáltatók**: `Segmented` státusz-szűrő (Mind · Jelölt · Egyeztetés · Ajánlat · Lefoglalva), `VendorCard` (rács weben, `compact` mobilon) `StatusTag`-gel, `Sheet` a státuszváltáshoz és a megkereséshez, `Toast booked` „Igen!” a foglaláshoz, `EmptyState` kategóriánként.
- **Naptár**: `Segmented full` Teendők · Időpontok, `CalendarItem` lista, `IconButton primary` „Hozzáadás”, `Sheet` az új elemhez.
- **Vendégek**: `List` + `ListItem` avatarral és RSVP-státusszal (`StatusTag` egyedi felirattal: Jön · Válaszra vár · Nem jön), `Progress tone="lagoon"` a válaszokhoz, `Checkbox` a kísérőhöz és az étkezéshez, `Select` a csoporthoz.
- **A nap**: `ScheduleSlot` lista, nyomtatható nézet (`printer` ikon-gomb az AppBarban), `Callout info` a felelősöknek; élő oldalként a `Toast neutral` jelzi a változást.
- **Fiók és fizetés**: `List inset` + `Switch` beállítások, `Stepper` (Csomag · Fizetés · Dátum rögzítése), `Button lagoon` „Teljes hozzáférés”, `Callout info` a nem átruházható hozzáférésről.
