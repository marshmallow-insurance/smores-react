import { FC, ReactNode } from 'react';
import { MarginProps } from '../utils/space';
export type LabelledTextProps = {
    children: ReactNode;
    label: string;
    labelMargin?: 2 | 4 | 8;
} & MarginProps;
export declare const LabelledText: FC<LabelledTextProps>;
