import { FC, ReactNode } from 'react';
import { MarginProps } from '../utils/space';
export type AccordionProps = {
    title: string;
    subTitle?: string;
    filledBackground?: boolean;
    borderTop?: boolean;
    borderColor?: 'oatmeal' | 'custard' | 'cream' | 'coconut';
    fullBorder?: boolean;
    backgroundColor?: 'oatmeal' | 'custard' | 'cream' | 'coconut';
    onToggle?: (isOpen: boolean) => void;
    children: ReactNode;
    defaultIsOpen?: boolean;
} & MarginProps;
export declare const Accordion: FC<AccordionProps>;
