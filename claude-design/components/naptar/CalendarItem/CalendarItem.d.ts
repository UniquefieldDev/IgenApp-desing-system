// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface CalendarItemProps { /** liquid glass: színes vagy képes háttér fölött */ glass?: boolean; kind?: 'teendo' | 'idopont'; title: string; meta?: string; date: string; time?: string; done?: boolean; onToggle?: () => void }
export declare function CalendarItem(props: CalendarItemProps): React.ReactElement;
