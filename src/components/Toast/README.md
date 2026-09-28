# Toast

Rövid, magától eltűnő visszajelzés egy művelet után: tömör pirula a képernyő alján (mobilon a TabBar fölött), `z-toast` rétegen. Semleges változat `ink` alapon, siker `mint`, hiba `danger` – mindegyiken a szöveg és az ikon együtt hordozza a jelentést.

- A fogyasztó adja: `children` (egy mondat, legfeljebb két sor), `tone`, opcionálisan `action` (egyetlen rövid ige: „Visszavonás”) és `onClose`.
- `booked`: a sikeres foglalás Toastja. A pipa helyén a logó két pöttye ér össze (600ms, egyszer), a szöveg „Igen!”-nel kezdődik. Ez az egyetlen „Igen!” a rendszerben, és az egyetlen Toast a pöttyökkel; más siker `tone="success"` pipával.
- Egy időben egy Toast; 4–6 másodperc után eltűnik, `action`-nel 8. A hiba nem tűnik el magától.
- Amit el kell olvasni és megtartani (feltétel, figyelmeztetés a képernyőn), az nem Toast, hanem `Callout`.
