import React from 'react'
import { TableHeader } from './components/TableHeader'
import { TableRow } from './components/TableRow'
import { StyledTable } from './components/commonComponents'
import { TableProps } from './types'

/**
 * A table component that displays data with various features such as expandable rows, striped rows, and fixed headers.
 *
 * Caveats:
 * - subRows should always have the same columns as the Parent table.
 *
 * @template T - The type of data the table displays.
 * @property {T[]} data - Array of data to be displayed in the table.
 * @property {TableColumn<T>[]} columns - Array of columns to display in the table.
 * @property {boolean} [fixedHeader=false] - If true, the table header will be fixed/sticky.
 * @property {boolean} [striped=false] - If true, the table rows will have alternating colors.
 * @property {function(T): boolean} [expandable] - A function to determine if a row is expandable.
 * @property {Color} [headerColor] - The color for the table header.
 * @property {Color} [rowColor] - The default color for each table row.
 * @property {ReactElement} [subTable] - A React element to show when a row is expanded.
 * @property {Object} [subRows] - Settings for sub rows.
 * @property {function(T): ReactElement} subRows.rows - Function that returns a React element for the sub row.
 * @property {boolean} [subRows.showOnExpand=false] - If true, the sub rows will only be shown when the row is expanded.
 * @property {RowAction<T>[]} [rowActions] - Array of actions that can be performed on each row.
 * @property {string} [rowActionsMinWidth] - The minimum width for the row actions column.
 * @property {string} [rowPadding] - The padding for each row, essentially the height
 */
export const Table = <T,>({
  columns,
  data,
  fixedHeader = true,
  expandable,
  subTable,
  subRows,
  headerColor,
  rowColor,
  striped,
  rowActions,
  rowActionsMinWidth,
  rowPadding,
}: TableProps<T>) => {
  return (
    <StyledTable>
      <thead>
        <TableHeader
          columns={columns}
          fixedHeader={fixedHeader}
          subTable={subTable}
          headerColor={headerColor}
          rowActions={rowActions}
          expandable={expandable}
          rowActionsMinWidth={rowActionsMinWidth}
        />
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowData={row}
            rowIndex={rowIndex}
            columns={columns}
            rowActions={rowActions}
            striped={striped}
            subTable={subTable}
            subRows={subRows}
            rowColor={rowColor}
            rowPadding={rowPadding}
            expandable={expandable}
          />
        ))}
      </tbody>
    </StyledTable>
  )
}
