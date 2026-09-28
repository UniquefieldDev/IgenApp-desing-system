// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

/* ---- Webhely és app ---- */
/** Ikonnév a rendszer készletéből (24-es rács, 2px vonal, Lucide-kompatibilis). */
export type IconName = 'home' | 'sparkles' | 'briefcase' | 'calendar' | 'users' | 'user' | 'sun' | 'clock' | 'plus' | 'minus' | 'check' | 'x' | 'chevron-left' | 'chevron-right' | 'chevron-down' | 'chevron-up' | 'arrow-left' | 'arrow-right' | 'search' | 'bell' | 'menu' | 'more' | 'heart' | 'star' | 'map-pin' | 'wallet' | 'mail' | 'phone' | 'printer' | 'share' | 'download' | 'edit' | 'trash' | 'sliders' | 'info' | 'alert' | 'log-out' | 'camera' | 'filter' | 'lock' | 'external' | 'image' | 'message' | 'music' | 'utensils' | 'leaf' | 'gift' | 'list' | 'link' | 'send' | 'copy' | 'eye' | 'refresh';
export interface IconProps { name: IconName; /** px: 16 (icon-sm), 20 (icon-md, alap), 24 (icon-lg) */ size?: 16 | 20 | 24 | number; /** ha van, az ikon önálló jelentést hordoz (role=img); nélküle dekoratív (aria-hidden) */ label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
