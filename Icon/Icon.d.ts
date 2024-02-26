import { FC } from 'react';
import { MarginProps } from '../utils/space';
import { Color } from '../theme';
import { Icons } from './iconsList';
export type IconProps = {
    /** className attribute to apply classes from props */
    className?: string;
    /** specify what Icon to render  */
    render: Icons;
    /** set size of the Icon  */
    size?: number;
    /** set color of the Icon */
    color?: Color;
    /** rotation degrees */
    rotate?: number;
} & MarginProps;
export declare const Icon: FC<IconProps>;
