import React, { FocusEvent, FormEvent } from 'react';
import { CommonFieldProps } from '../fields/commonFieldTypes';
export interface Props extends CommonFieldProps {
    placeholder: string;
    name?: string;
    value: string;
    decimalNumber?: boolean;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
}
/** on change or on input required */
type InputProps = {
    /** on change is required and on input optional */
    onChange: (e: string) => void;
    onInputChange?: (e: FormEvent<HTMLInputElement>) => void;
} | {
    /** on input is required and on change optional */
    onChange?: (e: string) => void;
    onInputChange: (e: FormEvent<HTMLInputElement>) => void;
};
export type CurrencyInputProps = Props & InputProps;
export declare const CurrencyInput: React.ForwardRefExoticComponent<CurrencyInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
