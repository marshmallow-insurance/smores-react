import { FC, LabelHTMLAttributes, ReactNode } from 'react';
import { Color } from '../theme';
import { MarginProps } from '../utils/space';
/**
 * @deprecated Use only new Typo
 */
export type DeprecatedTypo = 'header-large' | 'header-medium' | 'header-small' | 'desc-heavy' | 'desc-medium' | 'desc-light' | 'desc-small' | 'base' | 'base-small' | 'base-xsmall' | 'label-large';
export type Typo = 'hero-alternate' | 'hero' | 'heading-alternate' | 'heading-large' | 'heading-medium' | 'heading-small' | 'headline-regular' | 'headline-small' | 'body-standfirst' | 'body-regular' | 'body-small' | 'caption' | 'label';
type Props = {
    children: ReactNode;
    tag?: any;
    className?: string;
    typo?: Typo | (string & Record<never, never>);
    align?: string;
    color?: Color;
    cursor?: string;
    title?: string;
} & MarginProps;
export type TextProps = Props & Omit<LabelHTMLAttributes<HTMLElement>, 'color'>;
export declare const Text: FC<TextProps>;
export {};
