// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface ListItemProps { title: string; meta?: string; /** Icon, Avatar vagy kép */ leading?: React.ReactNode; /** StatusTag, összeg, dátum */ trailing?: React.ReactNode; /** alapból akkor látszik, ha van href vagy onClick */ chevron?: boolean; href?: string; onClick?: () => void; className?: string }
export declare function ListItem(props: ListItemProps): React.ReactElement;
