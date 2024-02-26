import { FC, ReactNode } from 'react';
import { MarginProps } from '../utils/space';
import { Color } from '../theme';
export type BrandCardProps = {
    /** generic card title */
    title: string;
    /** generic card body */
    body: string;
    /** card image */
    visual: string;
    /** alignment of the image */
    alignVisual?: 'left' | 'right';
    /** height of the image, leave this blank for 100% */
    visualHeight?: string;
    /** render image at bottom of card */
    visualBottom?: boolean;
    bgColour: Color;
    /** card tag */
    tag?: ReactNode;
    /** primary button */
    buttonAction?: ReactNode;
    /** fallback color scheme */
    fallbackStyle?: boolean;
    /** margin */
    maxWidth?: string;
} & MarginProps;
export declare const BrandCard: FC<BrandCardProps>;
