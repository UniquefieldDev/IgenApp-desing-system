// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface StepperProps { steps: string[]; /** 0-tól */ current: number; className?: string }
export declare function Stepper(props: StepperProps): React.ReactElement;
