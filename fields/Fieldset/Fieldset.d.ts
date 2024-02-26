/// <reference types="react" />
import { MarginProps } from '../../utils/space';
import { CommonFieldProps } from '../commonFieldTypes';
export type FieldsetProps = CommonFieldProps & MarginProps;
export declare const Fieldset: ({ children, renderAsTitle, id, ...fieldProps }: FieldsetProps) => JSX.Element;
