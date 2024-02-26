/// <reference types="react" />
interface IInput {
    error?: boolean;
    disabled?: boolean;
    selected?: boolean;
    step?: number;
    value?: string;
    frontIcon?: string;
    trailingIcon?: string;
    fallbackStyle?: boolean;
}
interface SIcon {
    disabled?: boolean;
}
export declare const Input: import("styled-components").StyledComponent<"input", any, IInput, never>;
export declare const StyledFrontIcon: import("styled-components").StyledComponent<import("react").FC<import("../../Icon/Icon").IconProps>, any, SIcon, never>;
export declare const StyledTrailingIcon: import("styled-components").StyledComponent<import("react").FC<import("../../Icon/Icon").IconProps>, any, SIcon, never>;
export {};
