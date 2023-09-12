import React, { useState } from 'react'
import { Table } from '../Table'
import { TableColumn } from '../types'
import { TableCell } from './TableCell'
import { StyledCell, StyledRow } from './commonComponents'

interface TableRowProps<T> {
  rowData: T
  rowIndex: number
  columns: TableColumn<T>[]
  subTable?: boolean
}

export const TableRow = <T,>({
  rowData,
  rowIndex,
  columns,
  subTable,
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
      >
        {columns.map((column, columnIndex) => {
          let cellContent: React.ReactNode
          if (column.cell) {
            cellContent = column.cell(rowData, rowIndex, column, rowIndex)
          } else if (column.selector) {
            const selectorResult = column.selector(rowData)
            if (
              typeof selectorResult === 'string' ||
              typeof selectorResult === 'number' ||
              typeof selectorResult === 'boolean' ||
              React.isValidElement(selectorResult)
            ) {
              cellContent = selectorResult
            } else if (typeof selectorResult === 'bigint') {
              cellContent = selectorResult.toString()
            }
          }

          return <TableCell key={columnIndex} content={cellContent} />
        })}
      </StyledRow>
      {rowData.subRowData && expandedRows.includes(rowIndex) && (
        <StyledRow key={`${rowIndex}-subTable`} subTable={true}>
          <StyledCell colSpan={columns.length} subTable={true}>
            <Table
              data={rowData.subRowData}
              columns={columns}
              subTable={true}
            />
          </StyledCell>
        </StyledRow>
      )}
    </>
  )
}
