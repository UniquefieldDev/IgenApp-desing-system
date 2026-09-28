// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

export interface ProgressProps { value: number; max?: number; label?: string; /** a bal felső szám, pl. „3 300 000 Ft” */ valueLabel?: string; /** a jobb alsó szám, pl. „6 000 000 Ft keret” */ maxLabel?: string; hint?: string; /** alapból true: a sáv végén a két pötty, 100%-nál összeérnek; túllépésnél nincs */ dots?: boolean; tone?: 'rose' | 'lagoon'; className?: string }
export declare function Progress(props: ProgressProps): React.ReactElement;
