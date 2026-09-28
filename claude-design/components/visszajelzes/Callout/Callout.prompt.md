# Callout

Beágyazott, megmaradó üzenet a tartalomban: tónusos háttér (`-soft`), ikon a saját színében, `ink` szöveg. Négy hangnem: `info` (égkék – magyarázat, határidő), `success` (levélzöld – kész állapot), `danger` (hiba, kerettúllépés), `brand` (rózsa – tipp, AI-javaslat, a teljes hozzáférés ajánlása).

- A fogyasztó adja: `children` (1–2 mondat), opcionálisan `title`, `icon`, `action` (`Button size="sm"` vagy ghost link).
- Egy képernyőn legfeljebb egy Callout legyen látható egyszerre; ha több üzenet gyűlik, az lista, nem Callout-halom.
- A hibaüzenet formája: mi a baj és mi a teendő. „A keret legalább 500 000 Ft legyen.”
- A jogi-üzleti feltételeket (dátum rögzül a fizetés után, nem átruházható) `info` Callout mondja el ott, ahol a döntés születik, nem csak az ÁSZF-ben.
