import { FC } from 'react';
import { ActionListItem } from './List';
import { MarginProps } from '../utils/space';
export type ActionDropdownProps = {
    id?: string;
    className?: string;
    /** label displayed above the dropdown  */
    label?: string;
    /** value */
    value: ActionListItem;
    /** list of items for the dropdown list */
    list: ActionListItem[];
    /** onSelect handler */
    onSelect: (action: ActionListItem) => void;
} & MarginProps;
export declare const ActionDropdown: FC<ActionDropdownProps>;
