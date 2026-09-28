// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface CardProps { title?: string; eyebrow?: string; action?: React.ReactNode; /** glass: liquid glass, színes vagy képes háttér fölött lebegő kártyán */ tone?: 'default' | 'highlight' | 'glass'; className?: string; children?: React.ReactNode }
export declare function Card(props: CardProps): React.ReactElement;
