import React, { FocusEvent } from 'react';
import { MarginProps } from '../utils/space';
import { BaseValueType } from './types';
export declare const RadioElement: React.ForwardRefExoticComponent<{
    name: string;
    id: string;
    value: BaseValueType;
    checked: boolean;
    onChange: (value: BaseValueType) => void;
    onBlur?: ((e: FocusEvent<HTMLInputElement>) => void) | undefined;
    isError: boolean;
} & MarginProps & React.RefAttributes<HTMLInputElement>>;
