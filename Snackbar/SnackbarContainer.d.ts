import React, { FC, ReactNode } from 'react';
import { SnackbarContextType } from './types';
export declare const SnackbarContext: React.Context<SnackbarContextType>;
export declare const useSnackbarContext: () => SnackbarContextType;
export declare const SnackbarContainer: FC<{
    children?: ReactNode;
}>;
