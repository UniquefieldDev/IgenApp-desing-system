// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface ChoiceChipProps { selected?: boolean; onChange?: (next: boolean) => void; icon?: IconName; disabled?: boolean; className?: string; children?: React.ReactNode }
export declare function ChoiceChip(props: ChoiceChipProps): React.ReactElement;
