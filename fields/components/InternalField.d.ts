import { ReactNode } from 'react';
import { CommonFieldProps } from '../commonFieldTypes';
interface InternalFieldProps extends CommonFieldProps {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
    fieldType: 'field' | 'fieldset';
}
export declare const InternalField: ({ children, fieldType, renderAsTitle, htmlFor, className, label, assistiveText, error, errorMsg, required, completed, ...marginProps }: InternalFieldProps) => JSX.Element;
export {};
