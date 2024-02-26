import { FC, ReactNode } from 'react';
type Position = 'top' | 'bottom' | 'left' | 'right';
type ArrowPosition = Position | 'center';
export interface TooltipProps {
    children: ReactNode;
    content: string | ReactNode;
    position: Position;
    maxWidth?: number;
    title?: string;
    underline?: boolean;
    fallbackStyle?: boolean;
    zIndex?: number;
    portalContainer?: Element | DocumentFragment;
}
export declare const Tooltip: FC<TooltipProps>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Tip: import("styled-components").StyledComponent<"div", any, {
    showTip: boolean;
    position: Position;
    arrowPosition: ArrowPosition;
    maxWidth?: number | undefined;
    fallbackStyle?: boolean | undefined;
    zIndex: number;
}, never>;
export {};
