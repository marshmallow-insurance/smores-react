import React from 'react'
import { TableHeaderProps } from '../types'
import { StyledHeaderCell, StyledRow } from './commonComponents'

export const TableHeader = <T,>({
  columns,
  fixedHeader,
  headerColor,
  rowActions,
  expandable,
  rowActionsMinWidth,
}: TableHeaderProps<T>) => {
  return (
    <StyledRow>
      {columns.map((column, columnIndex) => (
        <StyledHeaderCell
          key={columnIndex}
          fixedHeader={fixedHeader}
          minWidth={column.minWidth}
          headerColor={headerColor}
        >
          {column.name}
        </StyledHeaderCell>
      ))}
      {(expandable || rowActions) && (
        <StyledHeaderCell
          fixedHeader={fixedHeader}
          stickyCell={true}
          minWidth={rowActionsMinWidth}
          headerColor={headerColor}
        >
          Actions
        </StyledHeaderCell>
      )}
    </StyledRow>
  )
}
