// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface SwitchProps { label: string; hint?: string; checked?: boolean; onChange?: (next: boolean) => void; disabled?: boolean; id?: string; className?: string }
export declare function Switch(props: SwitchProps): React.ReactElement;
