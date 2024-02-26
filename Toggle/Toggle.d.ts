import { FC } from 'react';
import { MarginProps } from '../utils/space';
type Props = {
    /** unique ID */
    id?: string;
    /** checked flag  */
    checked: boolean;
    /** onToggle listener  */
    onToggle: () => void;
} & MarginProps;
export declare const Toggle: FC<Props>;
export {};
