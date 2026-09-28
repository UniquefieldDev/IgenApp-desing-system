// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

export interface SegmentedOption { value: string; label: string; count?: number }
export interface SegmentedProps { options: SegmentedOption[]; value?: string; onChange?: (value: string) => void; /** teljes szélesség, egyenlő fülek */ full?: boolean; label?: string; className?: string }
export declare function Segmented(props: SegmentedProps): React.ReactElement;
