import { FC, MouseEventHandler, ReactElement } from 'react';
import { MarginProps } from '../utils/space';
type SupportMessageType = 'info' | 'fallbackStyle' | 'alert' | 'warning' | 'success';
export type SupportMessageProps = {
    className?: string;
    description: string | ReactElement;
    onClick?: MouseEventHandler;
    type: SupportMessageType;
    title?: string;
} & MarginProps;
export declare const SupportMessage: FC<SupportMessageProps>;
export {};
