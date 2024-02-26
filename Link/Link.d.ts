import { FC, MouseEventHandler, ReactNode } from 'react';
type LinkTypo = 'regular' | 'small';
export type LinkProps = {
    className?: string;
    href: string;
    onClick?: MouseEventHandler;
    openInNewTab?: boolean;
    children?: ReactNode;
    download?: boolean;
    typo?: LinkTypo;
    highlight?: boolean;
    iconToRender?: string;
    isTrailingIcon?: boolean;
};
export declare const Link: FC<LinkProps>;
/**
 * Internal utility to override styling in other components (see Text)
 * @internal
 */
export declare const linkStyleOverride: ({ color }: {
    color: string;
}) => import("styled-components").FlattenSimpleInterpolation;
export {};
