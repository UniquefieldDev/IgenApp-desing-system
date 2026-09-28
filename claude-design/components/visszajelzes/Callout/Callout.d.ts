// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface CalloutProps { tone?: 'info' | 'success' | 'danger' | 'brand'; title?: string; icon?: IconName; action?: React.ReactNode; className?: string; children?: React.ReactNode }
export declare function Callout(props: CalloutProps): React.ReactElement;
