// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface AccordionItem { q: string; a: React.ReactNode; open?: boolean }
export interface AccordionProps { items: AccordionItem[]; className?: string }
export declare function Accordion(props: AccordionProps): React.ReactElement;
