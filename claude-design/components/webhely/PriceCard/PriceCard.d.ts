// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface PriceCardProps { name: string; price: string; period?: string; lead?: string; features?: string[]; badge?: string; /** a fizetési pont: shadow-card és lagoon jelvény */ featured?: boolean; action?: React.ReactNode; className?: string }
export declare function PriceCard(props: PriceCardProps): React.ReactElement;
