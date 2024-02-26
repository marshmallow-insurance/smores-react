import React, { FocusEvent, ReactElement } from 'react';
import { CommonFieldProps } from '../fields/commonFieldTypes';
import { BaseValueType, DisplayType, IconPosition } from './types';
export type RadioGroupProps<Value extends BaseValueType = BaseValueType> = {
    options: Array<{
        visual?: string;
        icon?: string;
        iconPosition?: IconPosition;
        label: string;
        value: Value;
        bodyCopy?: string;
    }>;
    onChange: (value: Value) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    value: Value;
    displayType?: DisplayType;
    fallbackStyle?: boolean;
} & CommonFieldProps;
export type RadioGroupElement = {
    focus: VoidFunction;
};
export declare const RadioGroup: <Value extends BaseValueType = BaseValueType>(p: {
    options: {
        visual?: string | undefined;
        icon?: string | undefined;
        iconPosition?: IconPosition | undefined;
        label: string;
        value: Value;
        bodyCopy?: string | undefined;
    }[];
    onChange: (value: Value) => void;
    onBlur?: ((e: FocusEvent<HTMLInputElement>) => void) | undefined;
    value: Value;
    displayType?: DisplayType | undefined;
    fallbackStyle?: boolean | undefined;
} & CommonFieldProps & React.RefAttributes<HTMLInputElement>) => ReactElement | null;
