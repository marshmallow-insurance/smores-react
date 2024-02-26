import React, { FocusEvent, FormEvent } from 'react';
import { CommonFieldProps } from '../fields/commonFieldTypes';
export interface Props extends CommonFieldProps {
    type?: 'number';
    placeholder: string;
    name?: string;
    value: string;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    step?: number;
}
/** on change or on input required */
type InputProps = {
    /** on change is required and on input optional */
    onChange: (e: string | number) => void;
    onInputChange?: (e: FormEvent<HTMLInputElement>) => void;
} | {
    /** on input is required and on change optional */
    onChange?: (e: string | number) => void;
    onInputChange: (e: FormEvent<HTMLInputElement>) => void;
};
export type NumberInputProps = Props & InputProps;
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
