import React, { FocusEvent } from 'react';
import { BaseValueType, DisplayType, IconPosition } from './types';
type RadioItemProps = {
    name: string;
    visual?: string;
    icon?: string;
    iconPosition?: IconPosition;
    value: BaseValueType;
    label: string;
    checked: boolean;
    onChange: (value: BaseValueType) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    displayType: DisplayType;
    isError: boolean;
    fallbackStyle?: boolean;
    bodyCopy?: string;
};
export declare const RadioItem: React.ForwardRefExoticComponent<RadioItemProps & React.RefAttributes<HTMLInputElement>>;
export {};
