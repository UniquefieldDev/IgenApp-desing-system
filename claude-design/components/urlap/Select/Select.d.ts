// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface SelectOption { value: string; label: string }
export interface SelectProps { label: string; options: SelectOption[]; value?: string; onChange?: React.ChangeEventHandler<HTMLSelectElement>; placeholder?: string; hint?: string; error?: string; disabled?: boolean; id?: string; className?: string }
export declare function Select(props: SelectProps): React.ReactElement;
