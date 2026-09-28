// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface FooterLink { label: string; href?: string }
export interface FooterColumn { title: string; links: FooterLink[] }
export interface FooterProps { columns?: FooterColumn[]; note?: string; legal?: string; bottomLinks?: FooterLink[]; className?: string }
export declare function Footer(props: FooterProps): React.ReactElement;
