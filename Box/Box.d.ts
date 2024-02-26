import { FlexProps } from '../utils/flex';
import { MeasureProps } from '../utils/measure';
import { MarginProps, PaddingProps } from '../utils/space';
export type BoxProps = MarginProps & PaddingProps & FlexProps & MeasureProps;
export declare const Box: import("styled-components").StyledComponent<"div", any, MarginProps & PaddingProps & FlexProps & MeasureProps, never>;
