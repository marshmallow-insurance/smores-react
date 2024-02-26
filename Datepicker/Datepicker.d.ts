import { FC } from 'react';
import { MarginProps } from '../utils/space';
export type DatepickerProps = {
    showDayLabels?: boolean;
    disableWeekend?: boolean;
    fromDate?: Date;
    endingDate?: Date;
    showYear?: boolean;
    showSelectedDate?: boolean;
    range?: number;
    onDateSelect: (date: string) => void;
    onChange?: (value: Date) => void;
    value?: Date;
    fallbackStyle?: boolean;
} & MarginProps;
export declare const Datepicker: FC<DatepickerProps>;
