// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

export interface TabItem { key: string; label: string; icon: IconName; badge?: number | string }
export interface TabBarProps { /** legfeljebb 5; alapból Áttekintés, Terv, Szolgáltatók, Naptár, Vendégek */ items?: TabItem[]; active?: string; onSelect?: (key: string) => void; hrefFor?: (key: string) => string; /** alapból üveg; false = tömör surface-sunk */ glass?: boolean; label?: string; className?: string }
export declare function TabBar(props: TabBarProps): React.ReactElement;
