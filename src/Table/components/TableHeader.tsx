import React from 'react'
import { TableHeaderProps } from '../types'
import { StyledHeaderCell, StyledRow } from './commonComponents'

export const TableHeader = <T,>({
  columns,
  fixedHeader,
  subTable,
}: TableHeaderProps<T>) => {
  return (
    <StyledRow subTable={subTable}>
      {columns.map((column, columnIndex) => (
        <StyledHeaderCell
          key={columnIndex}
          fixedHeader={fixedHeader}
          subTable={subTable}
          minWidth={column.minWidth}
        >
          {column.name}
        </StyledHeaderCell>
      ))}
    </StyledRow>
  )
}
