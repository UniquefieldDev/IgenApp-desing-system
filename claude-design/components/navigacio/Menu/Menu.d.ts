// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface MenuItem { label: string; hint?: string; onSelect?: () => void }
export interface MenuProps { label?: string; items: Array<MenuItem | '-'> }
export declare function Menu(props: MenuProps): React.ReactElement;
