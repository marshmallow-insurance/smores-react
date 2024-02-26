import { FC, MouseEventHandler, ReactNode } from 'react';
import { MarginProps } from '../utils/space';
export type CardProps = {
    children?: ReactNode;
    /** leading card icon */
    leadingIcon?: string;
    /** generic card title */
    title?: string;
    /** generic card body */
    body?: string;
    /** card image */
    visual?: string;
    /** height of the image */
    visualHeight?: string;
    /** card tag */
    tag?: ReactNode;
    /** action for a fully clickable card */
    cardOnClickAction?: MouseEventHandler<HTMLDivElement>;
    /** action to the right of the card, chevron, chip or link text */
    rightAction?: ReactNode;
    /** primary button */
    buttonAction?: ReactNode;
    /** fallback color scheme */
    fallbackStyle?: boolean;
    className?: string;
    /** margin */
    maxWidth?: string;
    /** left-right margin */
    marginX?: string;
    /** top-bottom margin */
    marginY?: string;
    /** Narrow padding */
    narrow?: boolean;
    /** Wide padding */
    wide?: boolean;
} & MarginProps;
export declare const Card: FC<CardProps>;
