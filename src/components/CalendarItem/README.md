# CalendarItem

Egy sor a Naptár közös idővonalán. Két fajta, eltérő jelöléssel: a **teendő** (`kind="teendo"`) pipálható, fehér alapon, jelölőnégyzettel; az **időpont** (`kind="idopont"`) esemény, ahová el kell menni, égkék alapon, pöttyel és időponttal. A kettő egy listában keveredik, dátum szerint.

- A fogyasztó adja: `kind`, `title`, `date` (rövid magyar forma: „nov. 12.”), opcionálisan `time` („17:00”), `meta` (terület), `done`, `onToggle`, `glass`.
- `glass`: liquid glass változat, ha a lista színes vagy képes háttér fölött lebeg (Áttekintés, a következő teendők). A teendő átlátszó fehér üveg, az időpont égkék üveg (`glass-sky`); a pötty, a jelölőnégyzet és az „Időpont/Teendő” felirat üvegen is megmarad, így a kettő nem keveredik össze.
- Hosszú, görgetett naptárlistában maradjon a tömör változat: sok üveg sor egymás alatt nehezen olvasható.
- Időpontot nem lehet kipipálni; ha elmúlt, a lista elhalványítja.
