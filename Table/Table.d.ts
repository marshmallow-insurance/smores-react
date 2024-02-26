/// <reference types="react" />
import { TableProps } from './types';
/**
 * A table component that displays data with various features such as expandable rows, striped rows, and fixed headers.
 *
 * Caveats:
 * - subRows should always have the same columns as the Parent table.
 * - stripedColor wont be applied to subRows or subTables.
 * - rowActions will always need an onClick, this will be automatically passed onto the ReactNode you place & will be selectable
 * - rows will scale depending on the cell content size
 * - using clickableRow with clickable cells, ensure you use e.stopPropagation in your cells onClick
 *
 * Improvements:
 * - It would be nice if we expandable logic inside this component, e.g the presence of certain props would automatically add this
 * -
 *
 * @template T - The type of data the table displays.
 * @property {T[]} data - Array of data to be displayed in the table.
 * @property {TableColumn<T>[]} columns - Array of columns to display in the table.
 * @property {boolean} [fixedHeader=false] - If true, the table header will be fixed/sticky.
 * @property {string} [headerHeight] - Sets the height of the header.
 * @property {function(T): boolean} [expandable] - A function to determine if a row is expandable.
 * @property {Color} [stripedColor] - If present, the table rows will have alternating colors.
 * @property {Color} [headerColor='mascarpone'] - The color for the table header.
 * @property {Color} [rowColor='custard'] - The default color for each table row.
 * @property {Color} [rowBorderColor='oatmeal'] - The default color for each table row border.
 * @property {ReactElement} [subTable] - A React element to show when a row is expanded.
 * @property {Object} [subRows] - Settings for sub rows.
 * @property {function(T): ReactElement} subRows.rows - Function that returns a React element for the sub row.
 * @property {boolean} [subRows.showOnExpand=false] - If true, the sub rows will only be shown when the row is expanded.
 * @property {RowAction<T>[]} [rowActions] - Array of actions that can be performed on each row.
 * @property {function<T>: void} [clickableRow] - Function to apply to a row, to make the entire row clickable, useful for navigation.
 * @property {string} [rowPadding] - The Y padding for each row.
 * @property {string} [columnPadding] - The X padding for each row.
 * @property {string} [noDataContent] - The text to show when there is no available data to map through.
 */
export declare const Table: <T extends object>({ columns, data, fixedHeader, expandable, subTable, subRows, headerHeight, headerColor, rowColor, stripedColor, rowBorderColor, rowActions, clickableRow, rowPadding, columnPadding, noDataContent, }: TableProps<T>) => JSX.Element;
