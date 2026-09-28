// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

export interface CheckboxProps { label: string; hint?: string; checked?: boolean; onChange?: React.ChangeEventHandler<HTMLInputElement>; disabled?: boolean; id?: string; className?: string }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
