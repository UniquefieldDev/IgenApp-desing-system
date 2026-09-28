# Card

Tartalomdoboz fejléccel: szemöldök (`eyebrow`), cím, jobb oldali művelet vagy státusz. Három tónus:

- **default**: `surface-raised` alap, `line` keret. Listákban és sűrű nézetekben (szolgáltatói csatorna, költségvetés) ez a szabály.
- **highlight**: árnyékot kap (`shadow-card`); oldalanként egy-két kártyán (Áttekintés, koncepció).
- **glass**: liquid glass (`glass-fill`, `glass-edge`, `shadow-glass`, `blur-glass`) a lebegő kártyákra, amelyek színes felület, fotó vagy a koncepció képe fölött ülnek: Áttekintés, koncepció, landing. Ha a rendszer kevesebb átlátszóságot kér, tömör háttérre vált.

- A fogyasztó adja: `title`, opcionálisan `eyebrow`, `action` (gomb vagy `StatusTag`), `tone`, `children`.
- Üveg kártyán a másodlagos szöveg is `ink` (csökkentett átlátszósággal), mert a `ink-muted` a változó háttéren nem garantáltan olvasható.
- Egymás mellett legfeljebb három üveg kártya legyen; a sűrű listák kártyái maradjanak tömörek.
- Kártyát ne tegyünk kártyába. Színes bal oldali csíkot ne használjunk.
