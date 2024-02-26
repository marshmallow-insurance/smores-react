import { FC } from 'react';
import { Color } from '../theme';
export type LoaderProps = {
    height: string;
    color?: Color;
};
export declare const Loader: FC<LoaderProps>;
