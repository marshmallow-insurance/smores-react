import { FC } from 'react';
import { Banner } from './types';
interface Props extends Banner {
    deleteBanner: (id: string) => void;
}
export declare const BannerItem: FC<Props>;
export {};
