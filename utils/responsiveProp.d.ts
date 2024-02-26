declare const breakpointToMinPxMapping: {
    small: number;
    medium: number;
    large: number;
};
type Breakpoint = keyof typeof breakpointToMinPxMapping;
type PropByBreakpoint<PropValue> = {
    [key in Breakpoint]?: PropValue;
};
export type ResponsiveProp<PropValue> = PropValue | PropByBreakpoint<PropValue>;
export declare const resolveResponsiveProp: <PropValue>(value: ResponsiveProp<PropValue>, styleTemplate: (value: PropValue) => string) => string;
export {};
