type MeasureFN = (arg: MeasureProps) => string;
export interface MeasureProps {
    width?: string;
    maxWidth?: string;
    minWidth?: string;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
}
export declare const measure: MeasureFN;
export {};
