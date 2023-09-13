import React, { useState } from 'react'
import { TableRowProps } from '../types'
import { ExpanderRow } from './ExpanderRow'
import { StyledCell, StyledRow } from './commonComponents'

export const TableRow = <T,>({
  rowData,
  rowIndex,
  columns,
  subTable,
  striped,
  expandableRows,
  expandableRowsComponent,
  expandableRowsComponentProps,
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
      <StyledRow
        onClick={() => toggleRowExpansion(rowIndex)}
        subTable={subTable}
        striped={striped}
      >
        {columns.map((column, columnIndex) => {
          let cellContent: React.ReactNode
          if (column.cell) {
            cellContent = column.cell(rowData, rowIndex, column, rowIndex)
          }

          return <StyledCell key={columnIndex}>{cellContent}</StyledCell>
        })}
      </StyledRow>

      {expandableRows &&
        expandableRowsComponent &&
        expandedRows.includes(rowIndex) &&
        rowData && (
          <StyledRow key={`${rowIndex}-subTable`} subTable={true}>
            <StyledCell colSpan={columns.length} subTable={true}>
              <ExpanderRow
                data={rowData}
                ExpanderComponent={expandableRowsComponent}
                expanderComponentProps={expandableRowsComponentProps}
              />
            </StyledCell>
          </StyledRow>
        )}
    </>
  )
}
