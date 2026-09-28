# StatusTag

A szolgáltatói csatorna státusza: **Jelölt → Egyeztetés → Ajánlat → Lefoglalva**, és bármelyikből **No go**. A státusz a termék gerince, ezért mindig szöveggel együtt jelenik meg, soha nem csak színnel.

- A fogyasztó adja: `status` (`jelolt`, `egyeztetes`, `ajanlat`, `lefoglalva`, `nogo`). A Jelölt maga a pár rövidlistája: akit az AI-javaslatokból kiválasztottak; a felirat alapból a státusz magyar neve.
- A színek a haladást jelölik: a Jelölt csak keretes, a Lefoglalva az egyetlen tömör türkiz (`lagoon`); a No go áthúzott, szürke.
- Ne találjunk ki új státuszt ezen a komponensen kívül.
