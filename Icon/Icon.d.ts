import { FC } from 'react';
import { MarginProps } from '../utils/space';
import { Color } from '../theme';
/**
 * When adding a new Icon please remember to also add it
 * to the Container.jsx to keep our Icons Collection up to date.
 *
 * Icons in the collection are alphabetically ordered.
 */
export type IconProps = {
    /** className attribute to apply classes from props */
    className?: string;
    /** specify what Icon to render  */
    render: string;
    /** set size of the Icon  */
    size?: number;
    /** set color of the Icon */
    color?: Color;
    /** rotation degrees */
    rotate?: number;
} & MarginProps;
export declare const Icon: FC<IconProps>;
