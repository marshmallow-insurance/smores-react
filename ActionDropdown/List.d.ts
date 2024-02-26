import { FC } from 'react';
import { Color } from '../theme';
export type ActionListItem = {
    label: string;
    value: string;
    bgColor?: Color;
    textColor?: Color;
};
type Props = {
    options: ActionListItem[];
    selectOption: (option: ActionListItem) => void;
};
export declare const List: FC<Props>;
export {};
