// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

export interface ToastProps { /** a sikeres foglalás („Igen!”): a pipa helyett a logó két pöttye ér össze; tone = success */ booked?: boolean; tone?: 'neutral' | 'success' | 'danger'; action?: { label: string; onClick?: () => void }; onClose?: () => void; className?: string; children?: React.ReactNode }
export declare function Toast(props: ToastProps): React.ReactElement;
