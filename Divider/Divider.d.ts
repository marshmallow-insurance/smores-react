import { FC } from 'react';
import { MarginProps } from '../utils/space';
import { Color } from '../theme';
export type DividerProps = {
    maxWidth?: string;
    height?: string;
    color?: Color;
} & MarginProps;
export declare const Divider: FC<DividerProps>;
