// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface ScheduleSlotProps { start: string; end?: string; title: string; owner?: string; place?: string; highlight?: boolean }
export declare function ScheduleSlot(props: ScheduleSlotProps): React.ReactElement;
