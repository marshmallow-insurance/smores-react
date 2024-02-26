import React, { FocusEvent, FormEvent } from 'react';
import { CommonFieldProps } from '../fields/commonFieldTypes';
import { MarginProps } from '../utils/space';
type BaseProps = {
    id?: string;
    placeholder?: string;
    name?: string;
    value: string;
    error?: boolean;
    errorMsg?: string;
    resize?: 'none' | 'both';
    disabled?: boolean;
    maxLength?: number;
    onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    fallbackStyle?: boolean;
} & CommonFieldProps & MarginProps;
type TruncateProps = {
    onChange: (e: string) => void;
    onInputChange?: (e: FormEvent<HTMLTextAreaElement>) => void;
} | {
    onChange?: (e: string) => void;
    onInputChange: (e: FormEvent<HTMLTextAreaElement>) => void;
};
export type TextareaProps = BaseProps & TruncateProps;
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
