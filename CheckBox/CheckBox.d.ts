import React, { ReactNode } from 'react';
export type CheckBoxProps = {
    id?: string;
    checked: boolean;
    children: ReactNode;
    toggle: () => void;
    error?: boolean;
    errorMsg?: string;
};
export declare const CheckBox: React.ForwardRefExoticComponent<CheckBoxProps & React.RefAttributes<HTMLInputElement>>;
