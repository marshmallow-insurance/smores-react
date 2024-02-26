import { FC } from 'react';
import { MarginProps } from '../utils/space';
type Item = {
    id: number;
    label: string;
    checked: boolean;
};
type CheckBoxGroupProps = {
    list: Item[];
    onToggle: (id: number) => void;
} & MarginProps;
export declare const CheckBoxGroup: FC<CheckBoxGroupProps>;
export {};
