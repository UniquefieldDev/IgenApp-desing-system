// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface TopNavProps { /** alapból üveg (liquid glass); false = tömör */ glass?: boolean; items?: string[]; active?: string; /** szöveg a logó helyett */ brand?: string; daysLeft?: number; onSelect?: (item: string) => void; hrefFor?: (item: string) => string }
export declare function TopNav(props: TopNavProps): React.ReactElement;
