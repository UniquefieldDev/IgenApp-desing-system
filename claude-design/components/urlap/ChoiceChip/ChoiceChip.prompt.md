# ChoiceChip

Kiválasztható pirula többes választáshoz: a brief stílusjegyei („kerti”, „elegáns”, „rusztikus”), szolgáltató-kategóriák szűrése, étkezési igények. Kijelölve `rose-soft` háttér, `rose` keret és felirat, pipa ikonnal – a szín mellett a pipa is jelzi az állapotot.

- A fogyasztó adja: `selected`, `onChange(next)`, `children` (1–2 szó), opcionálisan `icon` a kijelöletlen állapothoz.
- Sorban, tördelve, `space-2` réssel; mobilon vízszintesen görgethető sor is lehet, de a kijelöltek mindig előre kerüljenek.
- 34px magas (`control-sm`); a 44px-es érintési célt a sor `space-1` függőleges térköze adja.
