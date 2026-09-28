# Pager

Oldaljelző a landing körhintáihoz (vélemények, példa-koncepciók): az aktív oldal az összeért pöttypár, a többi egy-egy halvány pötty. Lapozáskor az új aktív pár összeér.

- A fogyasztó adja: `count`, `current` (0-tól), `onSelect`, `label` (a körhinta neve, pl. „Vélemények”).
- Minden pötty gomb („2. oldal”), 36×44px érintési céllal; az aktív `aria-current`.
- Legfeljebb 7 oldal. Az appban nincs körhinta, így Pager sem.
