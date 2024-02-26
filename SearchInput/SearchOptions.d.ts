import { FC } from 'react';
type Option = {
    label: string;
    value: string;
};
type SearchOptionsProps = {
    displayedList: Array<Option>;
    onSelect: (option: Option) => void;
    positionRelative: boolean;
    resultsBorder: boolean;
};
export declare const SearchOptions: FC<SearchOptionsProps>;
export {};
