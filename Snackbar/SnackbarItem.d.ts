import { FC } from 'react';
import { Snackbar } from './types';
interface Props extends Snackbar {
    deleteSnack: (id: string) => void;
}
export declare const SnackbarItem: FC<Props>;
export {};
