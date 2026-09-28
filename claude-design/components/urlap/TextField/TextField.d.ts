// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; hint?: string; error?: string; suffix?: string;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;
