// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
export interface AvatarPerson { name?: string; src?: string }
export interface AvatarProps { name?: string; src?: string; size?: 'sm' | 'md' | 'lg'; tone?: 'neutral' | 'rose' | 'lagoon'; /** a pár: két egymásba érő kör, rose és lagoon – mint a logó */ pair?: [AvatarPerson, AvatarPerson]; className?: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;
