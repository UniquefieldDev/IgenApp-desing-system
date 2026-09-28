// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

export interface SheetProps { title?: string; onClose?: () => void; /** sheet: alulról, fogantyúval (mobil); dialog: középen (web) */ mode?: 'sheet' | 'dialog'; /** gombsor; a fő művelet primary, mellette ghost „Mégse” */ footer?: React.ReactNode; /** false: csak a panel, scrim nélkül */ scrim?: boolean; /** a scrim a szülőhöz igazodik (position:absolute) – bemutatóhoz, beágyazáshoz */ inline?: boolean; className?: string; children?: React.ReactNode }
export declare function Sheet(props: SheetProps): React.ReactElement;
