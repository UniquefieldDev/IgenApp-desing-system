# SectionHeader

Egy webhely-szekció vagy webes oldalrész fejléce: `rose` szemöldök, cím (`heading`, vagy `size="l"`-lel `display-l` a landingen), egy mondat bevezető `ink-muted`-ban, jobbra opcionális művelet. Középre zárva (`align="center"`) a landing szekcióira, balra a webes app oldalaira.

- A fogyasztó adja: `title`, opcionálisan `eyebrow`, `lead` (egy mondat, legfeljebb 680px széles), `action`, `as` (a helyes címsorszint: a hős `h1`, minden más `h2`).
- Egy oldalon egy `size="l"`; a szekciók között `space-8` a landingen, `space-6` az appban.
- Mobilon (390px) a `size="l"` cím `display-m` méretre esik vissza – ezt a fogyasztó stílusa oldja meg a `bp-tablet` alatt.
