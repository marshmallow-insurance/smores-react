import { Text } from '../Text'
import { TableHeader } from './components/TableHeader'
import { TableRow } from './components/TableRow'
import { StyledCell, StyledTable } from './components/commonComponents'
import { TableProps, type TableRowData } from './types'
import { TableFooter } from './components/TableFooter'
import { useTheme } from 'styled-components'
import { resolveToThemeColor } from '../ThemeProvider/utils/colourMap'
import { TableColumnGroup } from './components/TableColumnGroup'
import { useAlignedSubTableColumns } from './hooks/useAlignedSubTableColumns'

/**
 * A table component that displays data with various features such as expandable rows, striped rows, and fixed headers.
 *
 * ## Caveats:
 * - `subRows` should always have the same columns as the Parent table
 * - `stripedColor` wont be applied to `subRows` or `subTables`
 * - `rowActions` will always need an `onClick`, this will be automatically passed onto the `ReactNode` you place & will be selectable
 * - Rows will scale depending on the cell content size
 * - Using `clickableRow` with clickable cells, ensure you use `e.stopPropagation` in your cells `onClick`
 *
 * ## Improvements:
 * - It would be nice if we expandable logic inside this component, e.g the presence of certain props would automatically add this
 */
export const Table = <T extends TableRowData, K extends object>({
  columns,
  data,
  fixedHeader = true,
  hasKeyline = false,
  expandable,
  subTable,
  subRows,
  headerHeight,
  headerColor = 'color.surface.base.200',
  rowColor = 'color.surface.base.300',
  footer,
  stripedColor,
  rowBorderColor = 'color.illustration.neutral.300',
  rowActions,
  clickableRow,
  rowPadding,
  columnPadding,
  noDataContent,
  roundedTable,
  alignSubTableColumns = false,
  columnWidths,
  hideTableHeader = false,
}: TableProps<T, K>) => {
  const theme = useTheme()
  const { renderSubTable, setSubTableColumnWidths } = useAlignedSubTableColumns(
    subTable,
    alignSubTableColumns,
  )

  const resolvedHeaderColor = resolveToThemeColor(headerColor, theme)

  const showActionsCell = expandable ?? rowActions
  const totalColumns = showActionsCell ? columns.length + 1 : columns.length

  return (
    <StyledTable $roundedTable={roundedTable}>
      <TableColumnGroup
        widths={columnWidths}
        columnCount={totalColumns}
        setSubTableColumnWidths={setSubTableColumnWidths}
        shouldAlignSubTableColumns={alignSubTableColumns}
      />
      {!hideTableHeader && (
        <thead>
          <TableHeader
            columns={columns}
            fixedHeader={fixedHeader}
            headerHeight={headerHeight}
            headerColor={resolvedHeaderColor}
            rowActions={rowActions}
            columnPadding={columnPadding}
            expandable={expandable}
            hasKeyline={hasKeyline}
          />
        </thead>
      )}
      <tbody>
        {data.length === 0 && (
          <tr>
            <StyledCell
              colSpan={totalColumns}
              $rowPadding={rowPadding}
              $columnPadding={columnPadding}
            >
              {noDataContent ?? <Text align="center">No available data</Text>}
            </StyledCell>
          </tr>
        )}
        {data.length !== 0 && (
          <>
            {data.map((row, rowIndex) => (
              <TableRow
                key={row.rowKey ?? rowIndex}
                rowData={row}
                rowIndex={rowIndex}
                columns={columns}
                rowActions={rowActions}
                stripedColor={stripedColor}
                subTable={subTable}
                renderSubTable={renderSubTable}
                subRows={subRows}
                rowColor={rowColor}
                rowBorderColor={rowBorderColor}
                rowPadding={rowPadding}
                columnPadding={columnPadding}
                expandable={expandable}
                clickableRow={clickableRow}
                hideBorder={
                  Boolean(roundedTable) && rowIndex === data.length - 1
                }
              />
            ))}

            {footer && (
              <TableFooter columnCount={columns.length} footer={footer} />
            )}
          </>
        )}
      </tbody>
    </StyledTable>
  )
}
