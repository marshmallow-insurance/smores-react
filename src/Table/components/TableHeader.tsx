import React from 'react'
import { TableColumn } from '../types'
import { StyledHeaderCell, StyledRow } from './commonComponents'

export interface Props<T> {
  columns: TableColumn<T>[]
  fixedHeader?: boolean
  subTable?: boolean
}
export const TableHeader = <T,>({
  columns,
  fixedHeader,
  subTable,
}: Props<T>) => {
  return (
    <StyledRow subTable={subTable}>
      {columns.map((column, columnIndex) => (
        <StyledHeaderCell
          key={columnIndex}
          fixedHeader={fixedHeader}
          subTable={subTable}
        >
          {column.name}
        </StyledHeaderCell>
      ))}
    </StyledRow>
  )
}
