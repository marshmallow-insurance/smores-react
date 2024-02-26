import { ReactNode } from 'react';
import { CommonFieldProps } from '../commonFieldTypes';
export interface FieldProps extends CommonFieldProps {
    htmlFor?: string;
    children: ReactNode;
}
export declare const Field: ({ children, ...fieldProps }: FieldProps) => JSX.Element;
