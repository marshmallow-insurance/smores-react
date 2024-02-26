import { FC, FormEvent } from 'react';
import { Color } from '../theme';
import { MarginProps } from '../utils/space';
export type IconStrictProps = {
    /** className attribute to apply classes from props */
    className?: string;
    /** set size of the Icon (including background) */
    size?: 16 | 24 | 36 | 48;
    /** specify what Icon to render  */
    render: string;
    /** set icon colour */
    iconColor?: Color;
    /** set background colour */
    backgroundColor?: Color;
    /** function to handle click */
    handleClick?: (e: FormEvent<HTMLButtonElement>) => void;
    /** rotation degrees */
    rotate?: number;
} & MarginProps;
export declare const IconStrict: FC<IconStrictProps>;
