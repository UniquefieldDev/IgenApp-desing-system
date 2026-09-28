// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface PagerProps { count: number; /** 0-tól */ current: number; onSelect?: (index: number) => void; label?: string; className?: string }
export declare function Pager(props: PagerProps): React.ReactElement;
