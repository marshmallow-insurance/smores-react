import { ResponsiveProp } from './responsiveProp';
import { SpacingProp } from './space';
type FlexFN = (arg: FlexProps) => string;
export interface FlexProps {
    direction?: ResponsiveProp<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    flex?: boolean;
    flow?: string;
    justifyContent?: ResponsiveProp<'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly'>;
    alignItems?: ResponsiveProp<'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'>;
    alignContent?: ResponsiveProp<'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch'>;
    gap?: ResponsiveProp<SpacingProp>;
    rowGap?: ResponsiveProp<SpacingProp>;
    columnGap?: ResponsiveProp<SpacingProp>;
}
export declare const flex: FlexFN;
export {};
