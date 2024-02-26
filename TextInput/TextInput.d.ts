import React, { FocusEvent, FormEvent } from 'react';
import { CommonFieldProps } from '../fields/commonFieldTypes';
interface Props extends CommonFieldProps {
    type?: 'text' | 'email' | 'password' | 'time' | 'date' | 'tel';
    placeholder: string;
    name?: string;
    value: string;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
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
export type TextInputProps = Props & InputProps;
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
