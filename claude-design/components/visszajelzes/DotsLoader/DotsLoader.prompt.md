# DotsLoader

Várakozás a hosszabb AI-műveletekre (koncepció, költségvetés-javaslat, szolgáltatói ajánlás): a logó két pöttye kering, közelít és összeér, majd újra elválik. Ha kész (`done`), a pöttyök egyszer összeérnek és megállnak – ez a logó jele.

- A fogyasztó adja: `label` (mi készül, a párhoz szólva: „Készül a koncepciótok…”), `done`, `size` (alap 48px; kártyában 32, teljes képernyőn 64).
- Csak az 1 másodpercnél hosszabb várakozásra; rövid betöltéskor a tartalom helyét `surface-sunk` blokk tartja, nem forgó jel.
- `role="status"`, a felirat változását a képernyőolvasó felolvassa. `prefers-reduced-motion` esetén álló, összeért jel.
- Egy képernyőn egy DotsLoader.
