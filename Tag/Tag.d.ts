import { FC } from 'react';
import { MarginProps } from '../utils/space';
import { Color } from '../theme';
export type TagProps = {
    label: string;
    color: Color;
    bgColor: Color;
    borderColor?: Color;
    className?: string;
} & MarginProps;
export declare const Tag: FC<TagProps>;
