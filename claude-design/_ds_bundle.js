/* @ds-bundle: {"format":4,"namespace":"Igen","components":[{"name":"Button"},{"name":"TextField"},{"name":"Card"},{"name":"StatusTag"},{"name":"CalendarItem"},{"name":"ScheduleSlot"},{"name":"TopNav"},{"name":"Menu"},{"name":"Logo"},{"name":"Icon"},{"name":"IconButton"},{"name":"TabBar"},{"name":"AppBar"},{"name":"ListItem"},{"name":"Sheet"},{"name":"Toast"},{"name":"Callout"},{"name":"Progress"},{"name":"Segmented"},{"name":"Stepper"},{"name":"Checkbox"},{"name":"Switch"},{"name":"ChoiceChip"},{"name":"Select"},{"name":"EmptyState"},{"name":"Avatar"},{"name":"VendorCard"},{"name":"SectionHeader"},{"name":"PriceCard"},{"name":"Accordion"},{"name":"Footer"},{"name":"DotsLoader"},{"name":"DotList"},{"name":"Pager"}]} */
(function () {
  var React = window.React, h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) if (keys.indexOf(k) < 0) r[k] = o[k]; return r; }

  function Button(p) {
    var variant = p.variant || 'secondary', size = p.size || 'md';
    return h('button', Object.assign({ type: 'button' }, omit(p, ['variant', 'size', 'className', 'children']), {
      className: cx('ig-btn', 'ig-btn-' + variant, size === 'sm' && 'ig-btn-sm', p.className)
    }), p.children);
  }

  function TextField(p) {
    var id = p.id || ('ig-f-' + String(p.label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    var hintId = id + '-hint';
    var rest = omit(p, ['label', 'hint', 'error', 'id', 'className', 'suffix']);
    return h('div', { className: cx('ig-field', p.error && 'ig-field-error', p.className) },
      h('label', { className: 'ig-field-label', htmlFor: id }, p.label),
      h('div', { className: 'ig-field-box' },
        h('input', Object.assign({ id: id, className: 'ig-field-input', 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': (p.error || p.hint) ? hintId : undefined }, rest)),
        p.suffix ? h('span', { className: 'ig-field-suffix' }, p.suffix) : null),
      (p.error || p.hint) ? h('p', { id: hintId, className: 'ig-field-hint' }, p.error || p.hint) : null);
  }

  function Card(p) {
    return h('section', { className: cx('ig-card', p.tone === 'highlight' && 'ig-card-highlight', p.tone === 'glass' && 'ig-card-glass ig-glass', p.className) },
      (p.eyebrow || p.title || p.action) ? h('header', { className: 'ig-card-head' },
        h('div', null,
          p.eyebrow ? h('p', { className: 'ig-card-eyebrow' }, p.eyebrow) : null,
          p.title ? h('h3', { className: 'ig-card-title' }, p.title) : null),
        p.action || null) : null,
      h('div', { className: 'ig-card-body' }, p.children));
  }

  var STATUS = {
    jelolt: 'Jelölt', egyeztetes: 'Egyeztetés',
    ajanlat: 'Ajánlat', lefoglalva: 'Lefoglalva', nogo: 'No go'
  };
  function StatusTag(p) {
    var s = p.status === 'rovidlista' ? 'jelolt' : (STATUS[p.status] ? p.status : 'jelolt');
    return h('span', { className: 'ig-tag ig-tag-' + s }, p.children || STATUS[s]);
  }

  function CalendarItem(p) {
    var isTask = (p.kind || 'teendo') === 'teendo';
    var mark = isTask
      ? h('input', { type: 'checkbox', className: 'ig-check', checked: !!p.done, onChange: p.onToggle || function () {}, 'aria-label': 'Kész: ' + p.title })
      : h('span', { className: 'ig-cal-dot', 'aria-hidden': 'true' });
    return h('div', { className: cx('ig-cal', isTask ? 'ig-cal-task' : 'ig-cal-event', p.done && 'ig-cal-done', p.glass && 'ig-cal-glass ig-glass') },
      mark,
      h('div', { className: 'ig-cal-main' },
        h('p', { className: 'ig-cal-title' }, p.title),
        p.meta ? h('p', { className: 'ig-cal-meta' }, p.meta) : null),
      h('div', { className: 'ig-cal-when' },
        h('span', { className: 'ig-cal-kind' }, isTask ? 'Teendő' : 'Időpont'),
        h('span', { className: 'ig-cal-date' }, p.date + (p.time ? ' · ' + p.time : ''))));
  }

  function ScheduleSlot(p) {
    return h('div', { className: cx('ig-slot', p.highlight && 'ig-slot-highlight') },
      h('div', { className: 'ig-slot-time' }, h('span', null, p.start), p.end ? h('span', { className: 'ig-slot-end' }, p.end) : null),
      h('div', { className: 'ig-slot-body' },
        h('p', { className: 'ig-slot-title' }, p.title),
        (p.owner || p.place) ? h('p', { className: 'ig-slot-meta' }, [p.owner, p.place].filter(Boolean).join(' · ')) : null));
  }

  var GEN = 'M245 158Q156 158 104 144Q52 130 30 106Q8 81 8 49Q8 5 43 -22Q78 -48 145 -58V-63Q94 -63 65 -80Q36 -98 36 -129Q36 -158 62 -181Q89 -204 149 -204V-211Q95 -224 63 -261Q31 -298 31 -357Q31 -409 58 -447Q84 -485 135 -506Q186 -528 259 -528H522V-404L341 -427V-419Q424 -408 454 -382Q483 -355 483 -318Q483 -281 460 -252Q438 -223 391 -206Q344 -190 272 -190Q250 -190 228 -192Q205 -194 189 -198Q172 -191 162 -184Q153 -176 153 -168Q153 -163 157 -160Q161 -158 168 -157Q176 -156 186 -156H346Q367 -156 398 -154Q430 -151 462 -138Q493 -126 514 -97Q535 -68 535 -15Q535 45 504 83Q472 121 408 140Q344 158 245 158ZM245 16Q312 16 344 12Q376 7 386 -1Q396 -9 396 -19Q396 -33 388 -41Q380 -49 368 -52Q356 -56 344 -56Q333 -57 326 -57H191Q159 -46 148 -36Q136 -27 136 -15Q136 -1 150 6Q163 12 188 14Q212 16 245 16ZM262 -278Q294 -278 312 -298Q329 -318 329 -353Q329 -388 311 -410Q293 -431 261 -431Q230 -431 212 -410Q193 -388 193 -353Q193 -330 201 -313Q209 -296 224 -287Q240 -278 262 -278ZM802 14Q727 14 676 -8Q626 -29 595 -66Q564 -104 550 -152Q537 -200 537 -253Q537 -310 552 -362Q566 -414 596 -454Q627 -495 676 -518Q724 -542 792 -542Q860 -542 908 -518Q957 -495 986 -453Q1015 -411 1024 -356Q1032 -301 1021 -237L638 -231V-319L897 -324L876 -273Q882 -319 874 -350Q867 -382 847 -398Q827 -415 792 -415Q755 -415 733 -396Q711 -377 702 -342Q693 -308 693 -261Q693 -180 720 -143Q747 -106 803 -106Q827 -106 843 -112Q859 -118 869 -130Q879 -141 883 -158Q887 -174 886 -195L1034 -187Q1037 -154 1028 -119Q1018 -84 992 -54Q966 -24 920 -5Q873 14 802 14ZM1080 0V-299V-528H1217V-313H1225Q1231 -391 1251 -442Q1271 -492 1308 -517Q1345 -542 1402 -542Q1488 -542 1532 -485Q1575 -428 1575 -315V0H1413V-294Q1413 -348 1396 -375Q1380 -402 1344 -402Q1314 -402 1291 -381Q1268 -360 1255 -313Q1242 -266 1242 -187V0Z';
  function Logo(p) {
    var mark = p.variant === 'mark';
    var vb = mark ? '0 -824 296 252' : '0 -824 1901 982';
    var parts = [
      h('circle', { key: 'r', className: 'ig-logo-rose', cx: 96, cy: -668, r: 96 }),
      h('circle', { key: 'l', className: 'ig-logo-lagoon', cx: 200, cy: -728, r: 96 }),
      h('path', { key: 'x', className: 'ig-logo-ink', d: 'M185.4 -633.1A96 96 0 0 1 110.5 -762.9A96 96 0 0 1 185.4 -633.1Z' })
    ];
    if (!mark) {
      parts.unshift(h('rect', { key: 's', className: 'ig-logo-ink', x: 67, y: -528, width: 162, height: 528 }));
      parts.push(h('path', { key: 'g', className: 'ig-logo-ink', transform: 'translate(316 0)', d: GEN }));
    }
    return h('svg', { className: cx('ig-logo', p.className), viewBox: vb, height: p.height || 28, role: 'img', 'aria-label': 'Igen' }, parts);
  }

  var AREAS = ['Áttekintés', 'Terv', 'Szolgáltatók', 'Naptár', 'Vendégek', 'A nap'];
  function TopNav(p) {
    var items = p.items || AREAS, active = p.active || items[0];
    return h('nav', { className: cx('ig-nav', p.glass !== false && 'ig-glass'), 'aria-label': 'Fő navigáció' },
      p.brand ? h('span', { className: 'ig-nav-brand' }, p.brand) : h('a', { className: 'ig-nav-logo', href: p.hrefFor ? p.hrefFor(items[0]) : '#', 'aria-label': 'Igen – ' + items[0] }, h(Logo, { height: 28 })),
      h('ul', { className: 'ig-nav-list' }, items.map(function (it) {
        return h('li', { key: it }, h('a', { href: p.hrefFor ? p.hrefFor(it) : '#', className: cx('ig-nav-link', it === active && 'is-active'), 'aria-current': it === active ? 'page' : undefined, onClick: p.onSelect ? function (e) { e.preventDefault(); p.onSelect(it); } : undefined }, it));
      })),
      p.daysLeft != null ? h('span', { className: 'ig-nav-count' }, h('strong', null, p.daysLeft), ' nap') : null);
  }

  function Menu(p) {
    return h('div', { className: 'ig-menu ig-glass', role: 'menu', 'aria-label': p.label || 'Menü' }, (p.items || []).map(function (it, i) {
      if (it === '-') return h('div', { key: 'sep' + i, className: 'ig-menu-sep', role: 'separator' });
      return h('button', { key: it.label, type: 'button', role: 'menuitem', className: 'ig-menu-item', onClick: it.onSelect }, h('span', null, it.label), it.hint ? h('span', { className: 'ig-menu-hint' }, it.hint) : null);
    }));
  }

  window.Igen = Object.assign(window.Igen || {}, { Logo: Logo, Menu: Menu, Button: Button, TextField: TextField, Card: Card, StatusTag: StatusTag, CalendarItem: CalendarItem, ScheduleSlot: ScheduleSlot, TopNav: TopNav });
})();

/* ---- Webhely és app: ikonok, mobil primitívek, webhely-blokkok ---- */
(function () {
  var React = window.React, h = React.createElement, I = window.Igen;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function slug(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'); }

  /* Ikonok: 24-es rács, 2px vonal, kerek végek és sarkok (Lucide-kompatibilis). "c:cx cy r" = kör. */
  var ICONS = {
    'home': ['M3 11l9-8 9 8', 'M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10'],
    'sparkles': ['M12 3l1.9 5.6 5.6 1.9-5.6 1.9L12 18l-1.9-5.6-5.6-1.9 5.6-1.9z', 'M19 2v4', 'M17 4h4', 'M5 16v4', 'M3 18h4'],
    'briefcase': ['M3 8h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z', 'M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', 'M2 13h20'],
    'calendar': ['M4 6h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z', 'M16 3v5', 'M8 3v5', 'M3 11h18'],
    'users': ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'c:9 7 4', 'M22 21v-2a4 4 0 0 0-3-3.9', 'M16 3.1a4 4 0 0 1 0 7.8'],
    'user': ['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'c:12 7 4'],
    'sun': ['c:12 12 4', 'M12 2v2', 'M12 20v2', 'M4.9 4.9l1.4 1.4', 'M17.7 17.7l1.4 1.4', 'M2 12h2', 'M20 12h2', 'M4.9 19.1l1.4-1.4', 'M17.7 6.3l1.4-1.4'],
    'clock': ['c:12 12 9', 'M12 7v5l3 2'],
    'plus': ['M12 5v14', 'M5 12h14'],
    'minus': ['M5 12h14'],
    'check': ['M5 12l5 5L20 7'],
    'x': ['M18 6L6 18', 'M6 6l12 12'],
    'chevron-left': ['M15 18l-6-6 6-6'],
    'chevron-right': ['M9 18l6-6-6-6'],
    'chevron-down': ['M6 9l6 6 6-6'],
    'chevron-up': ['M18 15l-6-6-6 6'],
    'arrow-left': ['M19 12H5', 'M11 18l-6-6 6-6'],
    'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
    'search': ['c:11 11 7', 'M21 21l-4.3-4.3'],
    'bell': ['M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9', 'M10.3 21a1.9 1.9 0 0 0 3.4 0'],
    'menu': ['M4 6h16', 'M4 12h16', 'M4 18h16'],
    'more': ['M5 12h.01', 'M12 12h.01', 'M19 12h.01'],
    'heart': ['M19.5 12.6L12 20l-7.5-7.4a4.6 4.6 0 0 1 6.5-6.5l1 1 1-1a4.6 4.6 0 0 1 6.5 6.5z'],
    'star': ['M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 21l1.2-6.5L2.5 9.9 9.1 9z'],
    'map-pin': ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z', 'c:12 10 3'],
    'wallet': ['M21 12V7H5a2 2 0 0 1 0-4h14v4', 'M3 5v14a2 2 0 0 0 2 2h16v-5', 'M18 12a2 2 0 0 0 0 4h4v-4z'],
    'mail': ['M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z', 'M3 7l9 6 9-6'],
    'phone': ['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2.1z'],
    'printer': ['M6 9V3h12v6', 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2', 'M6 14h12v7H6z'],
    'share': ['M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8', 'M16 6l-4-4-4 4', 'M12 2v13'],
    'download': ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
    'edit': ['M12 20h9', 'M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z'],
    'trash': ['M3 6h18', 'M8 6V4h8v2', 'M19 6l-1 14H6L5 6', 'M10 11v6', 'M14 11v6'],
    'sliders': ['M4 21v-7', 'M4 10V3', 'M12 21v-9', 'M12 8V3', 'M20 21v-5', 'M20 12V3', 'M2 14h4', 'M10 8h4', 'M18 16h4'],
    'info': ['c:12 12 9', 'M12 16v-4', 'M12 8h.01'],
    'alert': ['c:12 12 9', 'M12 8v4', 'M12 16h.01'],
    'log-out': ['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9'],
    'camera': ['M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z', 'c:12 13 4'],
    'filter': ['M22 3H2l8 9.5V19l4 2v-8.5z'],
    'lock': ['M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z', 'M7 11V7a5 5 0 0 1 10 0v4'],
    'external': ['M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', 'M15 3h6v6', 'M10 14L21 3'],
    'image': ['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'c:8.5 8.5 1.5', 'M21 15l-5-5L5 21'],
    'message': ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
    'music': ['M9 18V5l12-2v13', 'c:6 18 3', 'c:18 16 3'],
    'utensils': ['M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2', 'M7 2v20', 'M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3z', 'M21 15v7'],
    'leaf': ['M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z', 'M2 21c0-3 1.9-5.5 5-6.5'],
    'gift': ['M20 12v10H4V12', 'M2 7h20v5H2z', 'M12 22V7', 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z', 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'],
    'list': ['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'],
    'link': ['M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7', 'M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7'],
    'send': ['M22 2L11 13', 'M22 2l-7 20-4-9-9-4z'],
    'copy': ['M9 9h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'],
    'eye': ['M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z', 'c:12 12 3'],
    'refresh': ['M21 12a9 9 0 0 1-15.5 6.2L3 16', 'M3 12a9 9 0 0 1 15.5-6.2L21 8', 'M21 3v5h-5', 'M3 21v-5h5']
  };
  function Icon(p) {
    var size = p.size || 20, d = ICONS[p.name] || ICONS.alert;
    return h('svg', {
      className: cx('ig-icon', p.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
      strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', focusable: 'false',
      role: p.label ? 'img' : undefined, 'aria-label': p.label, 'aria-hidden': p.label ? undefined : 'true'
    }, d.map(function (s, i) {
      if (s.charAt(0) === 'c' && s.charAt(1) === ':') { var a = s.slice(2).split(' '); return h('circle', { key: i, cx: a[0], cy: a[1], r: a[2] }); }
      return h('path', { key: i, d: s });
    }));
  }
  Icon.names = Object.keys(ICONS);

  function IconButton(p) {
    var Tag = p.href ? 'a' : 'button';
    var props = { className: cx('ig-iconbtn', p.variant && 'ig-iconbtn-' + p.variant, p.className), 'aria-label': p.label, title: p.label };
    if (p.href) props.href = p.href; else { props.type = 'button'; props.onClick = p.onClick; props.disabled = p.disabled; }
    return h(Tag, props, h(Icon, { name: p.icon, size: 24 }), p.badge ? h('span', { className: 'ig-badge' }, p.badge) : null);
  }

  /* ---- Navigáció: app ---- */
  var TABS = [
    { key: 'attekintes', label: 'Áttekintés', icon: 'home' },
    { key: 'terv', label: 'Terv', icon: 'sparkles' },
    { key: 'szolgaltatok', label: 'Szolgáltatók', icon: 'briefcase' },
    { key: 'naptar', label: 'Naptár', icon: 'calendar' },
    { key: 'vendegek', label: 'Vendégek', icon: 'users' }
  ];
  function TabBar(p) {
    var items = (p.items || TABS).slice(0, 5), active = p.active || items[0].key;
    return h('nav', { className: cx('ig-tabbar', p.glass !== false && 'ig-glass', p.className), 'aria-label': p.label || 'Fő navigáció' },
      items.map(function (it) {
        var on = it.key === active;
        return h('a', {
          key: it.key, href: p.hrefFor ? p.hrefFor(it.key) : '#', className: cx('ig-tab', on && 'is-active'), 'aria-current': on ? 'page' : undefined,
          onClick: p.onSelect ? function (e) { e.preventDefault(); p.onSelect(it.key); } : undefined
        }, h('span', { className: 'ig-tab-icon' }, h(Icon, { name: it.icon, size: 24 }), it.badge ? h('span', { className: 'ig-badge' }, it.badge) : null),
          h('span', { className: 'ig-tab-label' }, it.label));
      }));
  }

  function AppBar(p) {
    var back = (p.onBack || p.backHref) ? h(IconButton, { icon: 'chevron-left', label: p.backLabel || 'Vissza', onClick: p.onBack, href: p.backHref }) : null;
    return h('header', { className: cx('ig-appbar', p.glass !== false && 'ig-glass', p.large && 'ig-appbar-large', p.className) },
      h('div', { className: 'ig-appbar-row' },
        back || h('span', { className: 'ig-appbar-spacer', 'aria-hidden': 'true' }),
        p.large ? h('span', { className: 'ig-appbar-spacer-mid' }) : h('h1', { className: 'ig-appbar-title' }, p.title),
        h('div', { className: 'ig-appbar-actions' }, p.action || h('span', { className: 'ig-appbar-spacer', 'aria-hidden': 'true' }))),
      p.large ? h('div', { className: 'ig-appbar-large-block' }, h('h1', { className: 'ig-appbar-title-large' }, p.title), p.subtitle ? h('p', { className: 'ig-appbar-sub' }, p.subtitle) : null) : null);
  }

  /* ---- Lista ---- */
  function List(p) { return h('div', { className: cx('ig-list', p.inset && 'ig-list-inset', p.className), role: p.role, 'aria-label': p.label }, p.children); }
  function ListItem(p) {
    var Tag = p.href ? 'a' : (p.onClick ? 'button' : 'div');
    var props = { className: cx('ig-li', (p.href || p.onClick) && 'ig-li-action', p.className) };
    if (p.href) props.href = p.href; else if (p.onClick) { props.type = 'button'; props.onClick = p.onClick; }
    var chev = p.chevron != null ? p.chevron : !!(p.href || p.onClick);
    return h(Tag, props,
      p.leading ? h('span', { className: 'ig-li-lead' }, p.leading) : null,
      h('span', { className: 'ig-li-main' }, h('span', { className: 'ig-li-title' }, p.title), p.meta ? h('span', { className: 'ig-li-meta' }, p.meta) : null),
      p.trailing ? h('span', { className: 'ig-li-trail' }, p.trailing) : null,
      chev ? h(Icon, { name: 'chevron-right', size: 20, className: 'ig-li-chev' }) : null);
  }

  /* ---- Rétegek ---- */
  function Sheet(p) {
    var dialog = p.mode === 'dialog';
    var panel = h('div', { className: cx('ig-sheet', dialog && 'ig-sheet-dialog', p.className), role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': p.title ? 'ig-sheet-title' : undefined },
      dialog ? null : h('span', { className: 'ig-sheet-handle', 'aria-hidden': 'true' }),
      (p.title || p.onClose) ? h('header', { className: 'ig-sheet-head' },
        h('h2', { className: 'ig-sheet-title', id: 'ig-sheet-title' }, p.title),
        p.onClose ? h(IconButton, { icon: 'x', label: 'Bezárás', onClick: p.onClose }) : null) : null,
      h('div', { className: 'ig-sheet-body' }, p.children),
      p.footer ? h('footer', { className: 'ig-sheet-foot' }, p.footer) : null);
    if (p.scrim === false) return panel;
    return h('div', { className: cx('ig-scrim', dialog && 'ig-scrim-center', p.inline && 'ig-scrim-inline'), onClick: function (e) { if (e.target === e.currentTarget && p.onClose) p.onClose(); } }, panel);
  }

  /* ---- Visszajelzés ---- */
  function Toast(p) {
    var tone = p.booked ? 'success' : (p.tone || 'neutral'), icon = tone === 'success' ? 'check' : tone === 'danger' ? 'alert' : null;
    return h('div', { className: cx('ig-toast', 'ig-toast-' + tone, p.booked && 'ig-toast-booked', p.className), role: tone === 'danger' ? 'alert' : 'status' },
      p.booked ? h('span', { className: 'ig-toast-mark' }, pair('meet', 16)) : icon ? h(Icon, { name: icon, size: 20 }) : null,
      h('span', { className: 'ig-toast-text' }, p.children),
      p.action ? h('button', { type: 'button', className: 'ig-toast-action', onClick: p.action.onClick }, p.action.label) : null,
      p.onClose ? h(IconButton, { icon: 'x', label: 'Bezárás', onClick: p.onClose, className: 'ig-toast-close' }) : null);
  }
  var CALL_ICON = { info: 'info', success: 'check', danger: 'alert', brand: 'sparkles' };
  function Callout(p) {
    var tone = p.tone || 'info';
    return h('div', { className: cx('ig-callout', 'ig-callout-' + tone, p.className), role: tone === 'danger' ? 'alert' : undefined },
      h(Icon, { name: p.icon || CALL_ICON[tone] || 'info', size: 20, className: 'ig-callout-icon' }),
      h('div', { className: 'ig-callout-main' }, p.title ? h('p', { className: 'ig-callout-title' }, p.title) : null, h('div', { className: 'ig-callout-body' }, p.children)),
      p.action ? h('div', { className: 'ig-callout-action' }, p.action) : null);
  }

  /* ---- Adat ---- */
  function Progress(p) {
    var max = p.max || 100, v = Math.max(0, p.value || 0), pct = Math.min(100, v / max * 100), over = v > max, dots = p.dots !== false && !over;
    var track = h('div', { className: 'ig-progress-track', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': v, 'aria-label': p.label }, h('div', { className: 'ig-progress-fill', style: { width: pct + '%' } }));
    return h('div', { className: cx('ig-progress', over && 'ig-progress-over', p.tone === 'lagoon' && 'ig-progress-lagoon', p.className) },
      (p.label || p.valueLabel) ? h('div', { className: 'ig-progress-head' }, h('span', { className: 'ig-progress-label' }, p.label), h('span', { className: 'ig-progress-value' }, p.valueLabel)) : null,
      dots ? h('div', { className: cx('ig-progress-rail', pct >= 100 && 'is-met') }, track,
        pct >= 100 ? h('span', { className: 'ig-progress-join' }, pair('meet', 18))
          : [h('span', { key: 'm', className: 'ig-progress-dot ig-progress-dot-move', style: { '--p': pct / 100 } }), h('span', { key: 'e', className: 'ig-progress-dot ig-progress-dot-end' })]) : track,
      (p.hint || p.maxLabel) ? h('div', { className: 'ig-progress-foot' }, h('span', null, p.hint), h('span', null, p.maxLabel)) : null);
  }

  /* ---- Navigáció: váltók ---- */
  function Segmented(p) {
    var opts = p.options || [], val = p.value != null ? p.value : (opts[0] && opts[0].value);
    return h('div', { className: cx('ig-seg', p.full && 'ig-seg-full', p.className), role: 'group', 'aria-label': p.label },
      opts.map(function (o) {
        var on = o.value === val;
        return h('button', { key: o.value, type: 'button', className: cx('ig-seg-btn', on && 'is-active'), 'aria-pressed': on, onClick: p.onChange ? function () { p.onChange(o.value); } : undefined },
          o.label, o.count != null ? h('span', { className: 'ig-seg-count' }, o.count) : null);
      }));
  }
  /* A logó két pöttye mint motívum. state: joined (a jel) · apart (külön, színes) · muted (külön, halvány) · orbit (töltés) · meet (egyszer összeér) */
  var LENS = 'M185.4 -633.1A96 96 0 0 1 110.5 -762.9A96 96 0 0 1 185.4 -633.1Z';
  function pair(state, height, cls) {
    return h('svg', { className: cx('ig-pair', 'ig-pair-' + state, cls), viewBox: '0 -824 296 252', width: Math.round(height * 296 / 252 * 10) / 10, height: height, 'aria-hidden': 'true', focusable: 'false' },
      h('circle', { className: 'ig-pair-rose', cx: 96, cy: -668, r: 96 }),
      h('circle', { className: 'ig-pair-lagoon', cx: 200, cy: -728, r: 96 }),
      h('path', { className: 'ig-pair-lens', d: LENS }));
  }
  function DotsLoader(p) {
    var size = p.size || 48, done = !!p.done;
    return h('div', { className: cx('ig-loader', done && 'is-done', p.className), role: 'status', 'aria-live': 'polite', 'aria-busy': done ? 'false' : 'true' },
      h('span', { className: 'ig-loader-mark', style: { width: size, height: size } }, pair(done ? 'meet' : 'orbit', Math.round(size * 0.72))),
      p.label ? h('span', { className: 'ig-loader-label' }, p.label) : h('span', { className: 'ig-sr' }, done ? 'Kész' : 'Készül'));
  }
  function DotList(p) {
    var items = p.items || React.Children.toArray(p.children);
    return h('ul', { className: cx('ig-dotlist', p.className) }, items.map(function (it, i) {
      return h('li', { key: i }, pair('joined', 12, 'ig-dotlist-mark'), h('span', null, it));
    }));
  }
  function Pager(p) {
    var n = p.count || 0, cur = p.current || 0, arr = [];
    for (var i = 0; i < n; i++) arr.push(i);
    return h('div', { className: cx('ig-pager', p.className), role: 'group', 'aria-label': p.label || 'Oldalak' }, arr.map(function (i) {
      var on = i === cur;
      return h('button', { key: i, type: 'button', className: cx('ig-pager-btn', on && 'is-active'), 'aria-label': (i + 1) + '. oldal', 'aria-current': on ? 'true' : undefined, onClick: p.onSelect ? function () { p.onSelect(i); } : undefined },
        on ? pair('meet', 14) : h('span', { className: 'ig-pager-dot' }));
    }));
  }
  function Stepper(p) {
    var steps = p.steps || [], cur = Math.min(p.current || 0, steps.length - 1);
    return h('div', { className: cx('ig-stepper', p.className) },
      h('div', { className: 'ig-stepper-text' }, h('span', { className: 'ig-stepper-num' }, (cur + 1) + ' / ' + steps.length), h('span', { className: 'ig-stepper-name' }, steps[cur])),
      h('ol', { className: 'ig-stepper-bar', 'aria-label': 'Lépések' }, steps.map(function (s, i) {
        return h('li', { key: s, className: cx('ig-stepper-step', i < cur && 'is-done', i === cur && 'is-current'), 'aria-current': i === cur ? 'step' : undefined }, pair(i < cur ? 'joined' : i === cur ? 'apart' : 'muted', 16), h('span', { className: 'ig-sr' }, s + (i < cur ? ' – kész' : '')));
      })));
  }

  /* ---- Űrlap ---- */
  function Checkbox(p) {
    var id = p.id || ('ig-cb-' + slug(p.label));
    return h('label', { className: cx('ig-choice', p.disabled && 'is-disabled', p.className), htmlFor: id },
      h('input', { id: id, type: 'checkbox', className: 'ig-check', checked: !!p.checked, onChange: p.onChange || function () {}, disabled: p.disabled }),
      h('span', { className: 'ig-choice-main' }, h('span', { className: 'ig-choice-label' }, p.label), p.hint ? h('span', { className: 'ig-choice-hint' }, p.hint) : null));
  }
  function Switch(p) {
    var id = p.id || ('ig-sw-' + slug(p.label));
    return h('div', { className: cx('ig-choice ig-switch-row', p.disabled && 'is-disabled', p.className) },
      h('label', { className: 'ig-choice-main', htmlFor: id }, h('span', { className: 'ig-choice-label' }, p.label), p.hint ? h('span', { className: 'ig-choice-hint' }, p.hint) : null),
      h('button', { id: id, type: 'button', role: 'switch', 'aria-checked': !!p.checked, className: cx('ig-switch', p.checked && 'is-on'), disabled: p.disabled, onClick: p.onChange ? function () { p.onChange(!p.checked); } : undefined },
        h('span', { className: 'ig-switch-knob' })));
  }
  function ChoiceChip(p) {
    return h('button', { type: 'button', className: cx('ig-chip', p.selected && 'is-selected', p.className), 'aria-pressed': !!p.selected, disabled: p.disabled, onClick: p.onChange ? function () { p.onChange(!p.selected); } : undefined },
      p.selected ? h(Icon, { name: 'check', size: 16 }) : (p.icon ? h(Icon, { name: p.icon, size: 16 }) : null), h('span', null, p.children));
  }
  function Select(p) {
    var id = p.id || ('ig-sel-' + slug(p.label)), hintId = id + '-hint', opts = p.options || [];
    var sel = { id: id, className: 'ig-field-input ig-select', 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': (p.error || p.hint) ? hintId : undefined, disabled: p.disabled };
    if (p.onChange) { sel.value = p.value == null ? '' : p.value; sel.onChange = p.onChange; } else { sel.defaultValue = p.value == null ? '' : p.value; }
    return h('div', { className: cx('ig-field', p.error && 'ig-field-error', p.className) },
      h('label', { className: 'ig-field-label', htmlFor: id }, p.label),
      h('div', { className: 'ig-field-box ig-select-box' },
        h('select', sel, p.placeholder ? h('option', { value: '', disabled: !!p.onChange }, p.placeholder) : null, opts.map(function (o) { return h('option', { key: o.value, value: o.value }, o.label); })),
        h(Icon, { name: 'chevron-down', size: 20, className: 'ig-select-chev' })),
      (p.error || p.hint) ? h('p', { id: hintId, className: 'ig-field-hint' }, p.error || p.hint) : null);
  }

  /* ---- Elrendezés ---- */
  function EmptyState(p) {
    return h('div', { className: cx('ig-empty', p.className) },
      h('span', { className: 'ig-empty-art' }, pair('joined', 72), p.icon ? h(Icon, { name: p.icon, size: 24 }) : null),
      h('p', { className: 'ig-empty-title' }, p.title),
      p.children ? h('p', { className: 'ig-empty-text' }, p.children) : null,
      p.action ? h('div', { className: 'ig-empty-action' }, p.action) : null);
  }
  function initials(n) { return String(n || '').trim().split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0).toUpperCase(); }).join(''); }
  function Avatar(p) {
    var size = p.size || 'md';
    if (p.pair) {
      var a = p.pair[0] || {}, b = p.pair[1] || {};
      return h('span', { className: cx('ig-avatar-pair', 'ig-avatar-pair-' + size, p.className), role: 'img', 'aria-label': [a.name, b.name].filter(Boolean).join(' és ') },
        h('span', { className: cx('ig-avatar', 'ig-avatar-' + size, 'ig-avatar-rose'), 'aria-hidden': 'true' }, a.src ? h('img', { src: a.src, alt: '' }) : initials(a.name)),
        h('span', { className: cx('ig-avatar', 'ig-avatar-' + size, 'ig-avatar-lagoon'), 'aria-hidden': 'true' }, b.src ? h('img', { src: b.src, alt: '' }) : initials(b.name)));
    }
    return h('span', { className: cx('ig-avatar', 'ig-avatar-' + size, 'ig-avatar-' + (p.tone || 'neutral'), p.className), role: 'img', 'aria-label': p.name },
      p.src ? h('img', { src: p.src, alt: '' }) : h('span', { 'aria-hidden': 'true' }, initials(p.name)));
  }

  /* ---- Szolgáltatók ---- */
  function VendorCard(p) {
    var Tag = p.href ? 'a' : 'article';
    return h(Tag, { className: cx('ig-vendor', p.compact && 'ig-vendor-compact', p.className), href: p.href },
      h('div', { className: 'ig-vendor-media' }, p.image ? h('img', { src: p.image, alt: '' }) : h(Icon, { name: p.icon || 'image', size: 24 })),
      h('div', { className: 'ig-vendor-body' },
        h('div', { className: 'ig-vendor-top' },
          h('p', { className: 'ig-vendor-cat' }, [p.category, p.place].filter(Boolean).join(' · ')),
          p.status ? h(I.StatusTag, { status: p.status }) : null),
        h('h3', { className: 'ig-vendor-name' }, p.name),
        p.price ? h('p', { className: 'ig-vendor-price' }, p.price) : null,
        p.note ? h('p', { className: 'ig-vendor-note' }, p.note) : null,
        p.action ? h('div', { className: 'ig-vendor-action' }, p.action) : null));
  }

  /* ---- Webhely ---- */
  function SectionHeader(p) {
    return h('div', { className: cx('ig-section', p.align === 'center' && 'ig-section-center', p.className) },
      h('div', { className: 'ig-section-main' },
        p.eyebrow ? h('p', { className: 'ig-section-eyebrow' }, p.eyebrow) : null,
        h(p.as || 'h2', { className: cx('ig-section-title', p.size === 'l' && 'ig-section-title-l') }, p.title),
        p.lead ? h('p', { className: 'ig-section-lead' }, p.lead) : null),
      p.action ? h('div', { className: 'ig-section-action' }, p.action) : null);
  }
  function PriceCard(p) {
    return h('article', { className: cx('ig-price', p.featured && 'ig-price-featured', p.className) },
      h('header', { className: 'ig-price-head' }, h('p', { className: 'ig-price-name' }, p.name), p.badge ? h('span', { className: 'ig-price-badge' }, p.badge) : null),
      h('p', { className: 'ig-price-amount' }, h('span', { className: 'ig-price-num' }, p.price), p.period ? h('span', { className: 'ig-price-period' }, p.period) : null),
      p.lead ? h('p', { className: 'ig-price-lead' }, p.lead) : null,
      h('ul', { className: 'ig-price-list' }, (p.features || []).map(function (f) { return h('li', { key: f }, h(Icon, { name: 'check', size: 16 }), h('span', null, f)); })),
      p.action ? h('div', { className: 'ig-price-action' }, p.action) : null);
  }
  var accSeq = 0;
  function accDots(id) {
    return h('svg', { className: 'ig-acc-dots', viewBox: '0 0 24 16', width: 24, height: 16, 'aria-hidden': 'true', focusable: 'false' },
      h('defs', null, h('clipPath', { id: id }, h('circle', { className: 'ig-acc-d1', cx: 5, cy: 8, r: 5 }))),
      h('circle', { className: 'ig-acc-d1 ig-acc-rose', cx: 5, cy: 8, r: 5 }),
      h('circle', { className: 'ig-acc-d2 ig-acc-lagoon', cx: 19, cy: 8, r: 5 }),
      h('circle', { className: 'ig-acc-d2 ig-acc-ink', cx: 19, cy: 8, r: 5, clipPath: 'url(#' + id + ')' }));
  }
  function Accordion(p) {
    var uid = React.useMemo ? React.useMemo(function () { return 'igacc' + (++accSeq); }, []) : 'igacc' + (++accSeq);
    return h('div', { className: cx('ig-acc', p.className) }, (p.items || []).map(function (it, i) {
      return h('details', { key: i, className: 'ig-acc-item', open: it.open || undefined },
        h('summary', { className: 'ig-acc-q' }, h('span', null, it.q), accDots(uid + '-' + i)),
        h('div', { className: 'ig-acc-a' }, it.a));
    }));
  }
  function Footer(p) {
    return h('footer', { className: cx('ig-footer', p.className) },
      h('div', { className: 'ig-footer-top' },
        h('div', { className: 'ig-footer-brand' }, h(I.Logo, { height: 28 }), p.note ? h('p', { className: 'ig-footer-note' }, p.note) : null),
        h('div', { className: 'ig-footer-cols' }, (p.columns || []).map(function (c) {
          return h('div', { key: c.title, className: 'ig-footer-col' }, h('p', { className: 'ig-footer-coltitle' }, c.title),
            h('ul', null, (c.links || []).map(function (l) { return h('li', { key: l.label }, h('a', { href: l.href || '#' }, l.label)); })));
        }))),
      h('div', { className: 'ig-footer-bottom' },
        h('span', null, p.legal || ('© ' + new Date().getFullYear() + ' Igen')),
        p.bottomLinks ? h('span', { className: 'ig-footer-legal' }, p.bottomLinks.map(function (l) { return h('a', { key: l.label, href: l.href || '#' }, l.label); })) : null));
  }

  window.Igen = Object.assign(window.Igen || {}, {
    Icon: Icon, IconButton: IconButton, TabBar: TabBar, AppBar: AppBar, List: List, ListItem: ListItem, Sheet: Sheet, Toast: Toast, Callout: Callout,
    Progress: Progress, Segmented: Segmented, Stepper: Stepper, Checkbox: Checkbox, Switch: Switch, ChoiceChip: ChoiceChip, Select: Select,
    EmptyState: EmptyState, Avatar: Avatar, VendorCard: VendorCard, SectionHeader: SectionHeader, PriceCard: PriceCard, Accordion: Accordion, Footer: Footer,
    DotsLoader: DotsLoader, DotList: DotList, Pager: Pager
  });
})();
