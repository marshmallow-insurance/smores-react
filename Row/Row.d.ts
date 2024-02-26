import { FC } from 'react';
import { Icons } from 'Icon/iconsList';
import { Color } from '../theme';
import { MarginProps } from '../utils/space';
export type RowProps = {
    iconLeft?: Icons;
    iconLeftColor?: Color;
    iconRight?: Icons;
    iconRightColor?: Color;
    handleClick?: () => void;
    heading: string;
    subHeading?: string;
    type?: 'first' | 'last' | 'curved';
    borderTop?: boolean;
    borderBottom?: boolean;
    boldHeading?: boolean;
} & MarginProps;
export declare const Row: FC<RowProps>;
