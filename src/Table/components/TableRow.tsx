import React, { useState } from 'react'
import { TableRowProps } from '../types'
import { RowActions } from './RowActions'
import { StyledCell, StyledRow } from './commonComponents'

export const TableRow = <T,>({
  rowData,
  rowIndex,
  columns,
  subRows,
  subTable,
  striped,
  rowActions,
  rowColor,
  expandable,
}: TableRowProps<T>) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const toggleRowExpansion = (rowIndex: number) => {
    setExpandedRows((prevState) =>
      prevState.includes(rowIndex)
        ? prevState.filter((index) => index !== rowIndex)
        : [...prevState, rowIndex],
    )
  }

  return (
    <>
      <StyledRow striped={striped} rowColor={rowColor}>
        {columns.map((column, columnIndex) => {
          let cellContent: React.ReactNode
          if (column.cell) {
            cellContent = column.cell(rowData, rowIndex, column, rowIndex)
          }

          return <StyledCell key={columnIndex}>{cellContent}</StyledCell>
        })}

        {rowActions && (
          <RowActions
            expandable={expandable}
            rowActions={rowActions}
            rowData={rowData}
            isExpanded={expandedRows.includes(rowIndex)}
            toggleExpansion={() => toggleRowExpansion(rowIndex)}
          />
        )}
      </StyledRow>

      {subRows && subRows.rows(rowData)}

      {subTable && expandedRows.includes(rowIndex) && (
        <StyledCell colSpan={rowActions ? columns.length + 1 : columns.length}>
          {subTable}
        </StyledCell>
      )}
    </>
  )
}
