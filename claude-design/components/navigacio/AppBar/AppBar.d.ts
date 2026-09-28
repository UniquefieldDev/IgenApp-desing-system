// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface AppBarProps { title: string; subtitle?: string; onBack?: () => void; backHref?: string; backLabel?: string; /** jobb oldali művelet(ek): IconButton vagy Button sm */ action?: React.ReactNode; /** nagy cím (display-m) a sáv alatt – képernyők első nézetén */ large?: boolean; glass?: boolean; className?: string }
export declare function AppBar(props: AppBarProps): React.ReactElement;
