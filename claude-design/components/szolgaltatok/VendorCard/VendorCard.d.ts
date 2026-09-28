// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts

export interface VendorCardProps { name: string; category: string; place?: string; /** „450 000 Ft-tól” – ezres tagolás szóközzel */ price?: string; note?: string; status?: VendorStatus; image?: string; /** kép helyett kategória-ikon */ icon?: IconName; action?: React.ReactNode; href?: string; /** vízszintes sor listákhoz */ compact?: boolean; className?: string }
export declare function VendorCard(props: VendorCardProps): React.ReactElement;
