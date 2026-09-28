import type * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: a nézet fő művelete (legfeljebb egy) · secondary: alapértelmezett · lagoon: fizetés/feloldás · ghost: harmadlagos */
  variant?: 'primary' | 'secondary' | 'lagoon' | 'ghost';
  size?: 'md' | 'sm';
}
export declare function Button(props: ButtonProps): React.ReactElement;
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; hint?: string; error?: string; suffix?: string;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface CardProps { title?: string; eyebrow?: string; action?: React.ReactNode; /** glass: liquid glass, színes vagy képes háttér fölött lebegő kártyán */ tone?: 'default' | 'highlight' | 'glass'; className?: string; children?: React.ReactNode }
export declare function Card(props: CardProps): React.ReactElement;
/** jelolt = a pár rövidlistája; a régi 'rovidlista' érték jelolt-ként jelenik meg */
export type VendorStatus = 'jelolt' | 'egyeztetes' | 'ajanlat' | 'lefoglalva' | 'nogo';
export interface StatusTagProps { status: VendorStatus; children?: React.ReactNode }
export declare function StatusTag(props: StatusTagProps): React.ReactElement;
export interface CalendarItemProps { /** liquid glass: színes vagy képes háttér fölött */ glass?: boolean; kind?: 'teendo' | 'idopont'; title: string; meta?: string; date: string; time?: string; done?: boolean; onToggle?: () => void }
export declare function CalendarItem(props: CalendarItemProps): React.ReactElement;
export interface ScheduleSlotProps { start: string; end?: string; title: string; owner?: string; place?: string; highlight?: boolean }
export declare function ScheduleSlot(props: ScheduleSlotProps): React.ReactElement;
export interface TopNavProps { /** alapból üveg (liquid glass); false = tömör */ glass?: boolean; items?: string[]; active?: string; /** szöveg a logó helyett */ brand?: string; daysLeft?: number; onSelect?: (item: string) => void; hrefFor?: (item: string) => string }
export declare function TopNav(props: TopNavProps): React.ReactElement;
export interface MenuItem { label: string; hint?: string; onSelect?: () => void }
export interface MenuProps { label?: string; items: Array<MenuItem | '-'> }
export declare function Menu(props: MenuProps): React.ReactElement;
export interface LogoProps { /** px, alapból 28 */ height?: number; /** mark: csak a két pötty */ variant?: 'full' | 'mark'; className?: string }
export declare function Logo(props: LogoProps): React.ReactElement;

/* ---- Webhely és app ---- */
/** Ikonnév a rendszer készletéből (24-es rács, 2px vonal, Lucide-kompatibilis). */
export type IconName = 'home' | 'sparkles' | 'briefcase' | 'calendar' | 'users' | 'user' | 'sun' | 'clock' | 'plus' | 'minus' | 'check' | 'x' | 'chevron-left' | 'chevron-right' | 'chevron-down' | 'chevron-up' | 'arrow-left' | 'arrow-right' | 'search' | 'bell' | 'menu' | 'more' | 'heart' | 'star' | 'map-pin' | 'wallet' | 'mail' | 'phone' | 'printer' | 'share' | 'download' | 'edit' | 'trash' | 'sliders' | 'info' | 'alert' | 'log-out' | 'camera' | 'filter' | 'lock' | 'external' | 'image' | 'message' | 'music' | 'utensils' | 'leaf' | 'gift' | 'list' | 'link' | 'send' | 'copy' | 'eye' | 'refresh';
export interface IconProps { name: IconName; /** px: 16 (icon-sm), 20 (icon-md, alap), 24 (icon-lg) */ size?: 16 | 20 | 24 | number; /** ha van, az ikon önálló jelentést hordoz (role=img); nélküle dekoratív (aria-hidden) */ label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export interface IconButtonProps { icon: IconName; /** kötelező: az ikon-gomb egyetlen felirata a kisegítő technológiának */ label: string; onClick?: () => void; href?: string; variant?: 'plain' | 'outline' | 'primary'; badge?: number | string; disabled?: boolean; className?: string }
export declare function IconButton(props: IconButtonProps): React.ReactElement;

export interface TabItem { key: string; label: string; icon: IconName; badge?: number | string }
export interface TabBarProps { /** legfeljebb 5; alapból Áttekintés, Terv, Szolgáltatók, Naptár, Vendégek */ items?: TabItem[]; active?: string; onSelect?: (key: string) => void; hrefFor?: (key: string) => string; /** alapból üveg; false = tömör surface-sunk */ glass?: boolean; label?: string; className?: string }
export declare function TabBar(props: TabBarProps): React.ReactElement;
export interface AppBarProps { title: string; subtitle?: string; onBack?: () => void; backHref?: string; backLabel?: string; /** jobb oldali művelet(ek): IconButton vagy Button sm */ action?: React.ReactNode; /** nagy cím (display-m) a sáv alatt – képernyők első nézetén */ large?: boolean; glass?: boolean; className?: string }
export declare function AppBar(props: AppBarProps): React.ReactElement;

export interface ListProps { /** false: keretes kártya; true: keret nélkül, csak elválasztók */ inset?: boolean; role?: string; label?: string; className?: string; children?: React.ReactNode }
export declare function List(props: ListProps): React.ReactElement;
export interface ListItemProps { title: string; meta?: string; /** Icon, Avatar vagy kép */ leading?: React.ReactNode; /** StatusTag, összeg, dátum */ trailing?: React.ReactNode; /** alapból akkor látszik, ha van href vagy onClick */ chevron?: boolean; href?: string; onClick?: () => void; className?: string }
export declare function ListItem(props: ListItemProps): React.ReactElement;

export interface SheetProps { title?: string; onClose?: () => void; /** sheet: alulról, fogantyúval (mobil); dialog: középen (web) */ mode?: 'sheet' | 'dialog'; /** gombsor; a fő művelet primary, mellette ghost „Mégse” */ footer?: React.ReactNode; /** false: csak a panel, scrim nélkül */ scrim?: boolean; /** a scrim a szülőhöz igazodik (position:absolute) – bemutatóhoz, beágyazáshoz */ inline?: boolean; className?: string; children?: React.ReactNode }
export declare function Sheet(props: SheetProps): React.ReactElement;

export interface ToastProps { /** a sikeres foglalás („Igen!”): a pipa helyett a logó két pöttye ér össze; tone = success */ booked?: boolean; tone?: 'neutral' | 'success' | 'danger'; action?: { label: string; onClick?: () => void }; onClose?: () => void; className?: string; children?: React.ReactNode }
export declare function Toast(props: ToastProps): React.ReactElement;
export interface CalloutProps { tone?: 'info' | 'success' | 'danger' | 'brand'; title?: string; icon?: IconName; action?: React.ReactNode; className?: string; children?: React.ReactNode }
export declare function Callout(props: CalloutProps): React.ReactElement;

export interface ProgressProps { value: number; max?: number; label?: string; /** a bal felső szám, pl. „3 300 000 Ft” */ valueLabel?: string; /** a jobb alsó szám, pl. „6 000 000 Ft keret” */ maxLabel?: string; hint?: string; /** alapból true: a sáv végén a két pötty, 100%-nál összeérnek; túllépésnél nincs */ dots?: boolean; tone?: 'rose' | 'lagoon'; className?: string }
export declare function Progress(props: ProgressProps): React.ReactElement;

export interface SegmentedOption { value: string; label: string; count?: number }
export interface SegmentedProps { options: SegmentedOption[]; value?: string; onChange?: (value: string) => void; /** teljes szélesség, egyenlő fülek */ full?: boolean; label?: string; className?: string }
export declare function Segmented(props: SegmentedProps): React.ReactElement;
export interface StepperProps { steps: string[]; /** 0-tól */ current: number; className?: string }
export declare function Stepper(props: StepperProps): React.ReactElement;

export interface CheckboxProps { label: string; hint?: string; checked?: boolean; onChange?: React.ChangeEventHandler<HTMLInputElement>; disabled?: boolean; id?: string; className?: string }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface SwitchProps { label: string; hint?: string; checked?: boolean; onChange?: (next: boolean) => void; disabled?: boolean; id?: string; className?: string }
export declare function Switch(props: SwitchProps): React.ReactElement;
export interface ChoiceChipProps { selected?: boolean; onChange?: (next: boolean) => void; icon?: IconName; disabled?: boolean; className?: string; children?: React.ReactNode }
export declare function ChoiceChip(props: ChoiceChipProps): React.ReactElement;
export interface SelectOption { value: string; label: string }
export interface SelectProps { label: string; options: SelectOption[]; value?: string; onChange?: React.ChangeEventHandler<HTMLSelectElement>; placeholder?: string; hint?: string; error?: string; disabled?: boolean; id?: string; className?: string }
export declare function Select(props: SelectProps): React.ReactElement;

export interface EmptyStateProps { icon?: IconName; title: string; action?: React.ReactNode; className?: string; children?: React.ReactNode }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
export interface AvatarPerson { name?: string; src?: string }
export interface AvatarProps { name?: string; src?: string; size?: 'sm' | 'md' | 'lg'; tone?: 'neutral' | 'rose' | 'lagoon'; /** a pár: két egymásba érő kör, rose és lagoon – mint a logó */ pair?: [AvatarPerson, AvatarPerson]; className?: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;

export interface VendorCardProps { name: string; category: string; place?: string; /** „450 000 Ft-tól” – ezres tagolás szóközzel */ price?: string; note?: string; status?: VendorStatus; image?: string; /** kép helyett kategória-ikon */ icon?: IconName; action?: React.ReactNode; href?: string; /** vízszintes sor listákhoz */ compact?: boolean; className?: string }
export declare function VendorCard(props: VendorCardProps): React.ReactElement;

export interface SectionHeaderProps { eyebrow?: string; title: string; lead?: string; align?: 'left' | 'center'; /** l: display-l méretű cím (landing) */ size?: 'm' | 'l'; as?: 'h1' | 'h2' | 'h3'; action?: React.ReactNode; className?: string }
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement;
export interface PriceCardProps { name: string; price: string; period?: string; lead?: string; features?: string[]; badge?: string; /** a fizetési pont: shadow-card és lagoon jelvény */ featured?: boolean; action?: React.ReactNode; className?: string }
export declare function PriceCard(props: PriceCardProps): React.ReactElement;
export interface AccordionItem { q: string; a: React.ReactNode; open?: boolean }
export interface AccordionProps { items: AccordionItem[]; className?: string }
export declare function Accordion(props: AccordionProps): React.ReactElement;
export interface FooterLink { label: string; href?: string }
export interface FooterColumn { title: string; links: FooterLink[] }
export interface FooterProps { columns?: FooterColumn[]; note?: string; legal?: string; bottomLinks?: FooterLink[]; className?: string }
export declare function Footer(props: FooterProps): React.ReactElement;

/* ---- A két pötty motívum ---- */
export interface DotsLoaderProps { /** pl. „Készül a koncepciótok…” */ label?: string; /** true: a pöttyök egyszer összeérnek és megállnak */ done?: boolean; /** px, alapból 48 */ size?: number; className?: string }
export declare function DotsLoader(props: DotsLoaderProps): React.ReactElement;
export interface DotListProps { items?: React.ReactNode[]; className?: string; children?: React.ReactNode }
export declare function DotList(props: DotListProps): React.ReactElement;
export interface PagerProps { count: number; /** 0-tól */ current: number; onSelect?: (index: number) => void; label?: string; className?: string }
export declare function Pager(props: PagerProps): React.ReactElement;

declare global { interface Window { Igen: {
  Logo: typeof Logo; Menu: typeof Menu; Button: typeof Button; TextField: typeof TextField; Card: typeof Card; StatusTag: typeof StatusTag; CalendarItem: typeof CalendarItem; ScheduleSlot: typeof ScheduleSlot; TopNav: typeof TopNav;
  Icon: typeof Icon; IconButton: typeof IconButton; TabBar: typeof TabBar; AppBar: typeof AppBar; List: typeof List; ListItem: typeof ListItem; Sheet: typeof Sheet; Toast: typeof Toast; Callout: typeof Callout; Progress: typeof Progress; Segmented: typeof Segmented; Stepper: typeof Stepper; Checkbox: typeof Checkbox; Switch: typeof Switch; ChoiceChip: typeof ChoiceChip; Select: typeof Select; EmptyState: typeof EmptyState; Avatar: typeof Avatar; VendorCard: typeof VendorCard; SectionHeader: typeof SectionHeader; PriceCard: typeof PriceCard; Accordion: typeof Accordion; Footer: typeof Footer; DotsLoader: typeof DotsLoader; DotList: typeof DotList; Pager: typeof Pager
} } }
