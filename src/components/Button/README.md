# Button

Pirula alakú gomb; a nézet egy fő műveletét emeli ki. **primary** (`rose`) nézetenként legfeljebb egyszer, arra, amiért a képernyő van. **secondary** az alapértelmezett. **lagoon** (türkiz) csak a fizetési ponton („Teljes hozzáférés”). **ghost** a harmadlagos műveletekre („Mégse”).

- Felirat: igével kezdődik, mondatkezdő nagybetűvel: „Megkeresés küldése”, nem „Küldés”.
- A fogyasztó adja: `children` (felirat), `onClick`, opcionálisan `variant`, `size`, `disabled`.
- Kisebb méret (`size="sm"`) csak listasorokban és kártyafejlécben.
