# TopNav

A fő navigáció: az Igen logó (`Logo`, 28px magas, a kezdőlapra visz), a hat terület (**Áttekintés, Terv, Szolgáltatók, Naptár, Vendégek, A nap**) pirulákként, és a visszaszámláló türkiz pirulában. Alapból liquid glass réteg (`glass-fill`, `glass-edge`, `blur-glass`), a tartalom fölött lebeg, és görgetéskor átsejlik alatta az oldal. A fiók, a partner és az előfizetés nem fül, hanem menü (`Menu`).

- A fogyasztó adja: `active`, `daysLeft`, `onSelect` vagy `hrefFor`; az `items` csak akkor, ha a területek listája változik; `glass={false}` tömör sávot ad (nyomtatás, beágyazás); `brand` csak akkor, ha a logó helyett szöveg kell (pl. partneroldal).
- Ha a rendszer kevesebb átlátszóságot kér, vagy a böngésző nem tud elmosni, tömör `surface-raised` hátteret kap.
- Mobilon a lista tördelődik; ne rövidítsük a területek nevét.
