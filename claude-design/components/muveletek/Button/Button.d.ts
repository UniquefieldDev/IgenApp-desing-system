// Közös típusok (VendorStatus, IconName, …): ../../../components.d.ts
import type * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: a nézet fő művelete (legfeljebb egy) · secondary: alapértelmezett · lagoon: fizetés/feloldás · ghost: harmadlagos */
  variant?: 'primary' | 'secondary' | 'lagoon' | 'ghost';
  size?: 'md' | 'sm';
}
export declare function Button(props: ButtonProps): React.ReactElement;
