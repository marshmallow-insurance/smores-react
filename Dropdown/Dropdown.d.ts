import React, { FocusEvent, FormEvent } from 'react';
import { CommonFieldProps } from '../fields/commonFieldTypes';
export type DropdownItem = {
    optionGroupLabel?: string;
    label: string;
    value: string;
};
export interface Props extends CommonFieldProps {
    placeholder?: string;
    showDefaultOption?: boolean;
    customDefaultOption?: string;
    name?: string;
    value?: string | null;
    defaultValue?: string;
    disabled?: boolean;
    list: DropdownItem[];
    frontIcon?: string;
    fallbackStyle?: boolean;
    onSelect: (element: string) => void;
    onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
}
type TruncateProps = {
    onSelect: (e: string) => void;
    onInputChange?: (e: FormEvent<HTMLSelectElement>) => void;
} | {
    onSelect?: (e: string) => void;
    onInputChange: (e: FormEvent<HTMLSelectElement>) => void;
};
export type DropdownProps = Props & TruncateProps;
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLSelectElement>>;
export {};
