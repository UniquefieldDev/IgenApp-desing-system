// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

export interface SectionHeaderProps { eyebrow?: string; title: string; lead?: string; align?: 'left' | 'center'; /** l: display-l méretű cím (landing) */ size?: 'm' | 'l'; as?: 'h1' | 'h2' | 'h3'; action?: React.ReactNode; className?: string }
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement;
