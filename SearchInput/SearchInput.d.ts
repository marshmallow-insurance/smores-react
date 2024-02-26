import React, { FocusEvent } from 'react';
import { CommonFieldProps } from '../fields/commonFieldTypes';
export type SearchInputItem = {
    label: string;
    value: string;
};
export interface SearchInputProps extends CommonFieldProps {
    name?: string;
    placeholder?: string;
    searchList: SearchInputItem[];
    onFound: (element: string) => void;
    showIcon?: boolean;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    value?: string;
    resultsRelativePosition?: boolean;
    resultsBorder?: boolean;
}
export declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
