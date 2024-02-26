import React, { FC, ReactNode } from 'react';
import { BannerContextType } from './types';
export declare const BannerContext: React.Context<BannerContextType>;
export declare const useBannerContext: () => BannerContextType;
export declare const BannerContainer: FC<{
    children?: ReactNode;
}>;
