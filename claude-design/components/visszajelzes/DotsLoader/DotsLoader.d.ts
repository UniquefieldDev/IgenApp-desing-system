// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

/* ---- A két pötty motívum ---- */
export interface DotsLoaderProps { /** pl. „Készül a koncepciótok…” */ label?: string; /** true: a pöttyök egyszer összeérnek és megállnak */ done?: boolean; /** px, alapból 48 */ size?: number; className?: string }
export declare function DotsLoader(props: DotsLoaderProps): React.ReactElement;
