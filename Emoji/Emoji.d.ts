import { FC } from 'react';
import { MarginProps } from '../utils/space';
export type EmojiProps = {
    /** className attribute to apply classes from props */
    className?: string;
    /** Emoji symbol */
    symbol: string;
    /** set size of the Emoji  */
    size?: number;
    /** aria-label to identify Emoji */
    label: string;
} & MarginProps;
export declare const Emoji: FC<EmojiProps>;
