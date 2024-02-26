import { ResponsiveProp } from './responsiveProp';
type Spacing = '8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px';
export type SpacingProp = '0' | Spacing | {
    custom: number | string;
};
export declare const resolveSpacing: (value: SpacingProp | 'auto') => string;
export interface MarginProps {
    m?: ResponsiveProp<SpacingProp>;
    mx?: ResponsiveProp<SpacingProp | 'auto'>;
    my?: ResponsiveProp<SpacingProp>;
    ml?: ResponsiveProp<SpacingProp>;
    mr?: ResponsiveProp<SpacingProp>;
    mt?: ResponsiveProp<SpacingProp>;
    mb?: ResponsiveProp<SpacingProp>;
}
export interface PaddingProps {
    p?: ResponsiveProp<SpacingProp>;
    px?: ResponsiveProp<SpacingProp>;
    py?: ResponsiveProp<SpacingProp>;
    pl?: ResponsiveProp<SpacingProp>;
    pr?: ResponsiveProp<SpacingProp>;
    pt?: ResponsiveProp<SpacingProp>;
    pb?: ResponsiveProp<SpacingProp>;
}
export declare const margin: (props: MarginProps) => string;
export declare const padding: (props: PaddingProps) => string;
export {};
