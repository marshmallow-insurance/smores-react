import { FC } from 'react';
import { Color } from '../theme';
import { MarginProps } from '../utils/space';
export type RowProps = {
    iconLeft?: string;
    iconLeftColor?: Color;
    iconRight?: string;
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
