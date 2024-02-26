import { FC } from 'react';
import { Day } from './types';
type Props = {
    items: Day[];
    showDayLabels: boolean;
    handleDateSelect: (date: Date) => void;
};
export declare const DatesList: FC<Props>;
export {};
