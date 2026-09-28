// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
/** jelolt = a pár rövidlistája; a régi 'rovidlista' érték jelolt-ként jelenik meg */
export type VendorStatus = 'jelolt' | 'egyeztetes' | 'ajanlat' | 'lefoglalva' | 'nogo';
export interface StatusTagProps { status: VendorStatus; children?: React.ReactNode }
export declare function StatusTag(props: StatusTagProps): React.ReactElement;
