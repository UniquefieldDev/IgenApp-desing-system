// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface IconButtonProps { icon: IconName; /** kötelező: az ikon-gomb egyetlen felirata a kisegítő technológiának */ label: string; onClick?: () => void; href?: string; variant?: 'plain' | 'outline' | 'primary'; badge?: number | string; disabled?: boolean; className?: string }
export declare function IconButton(props: IconButtonProps): React.ReactElement;
