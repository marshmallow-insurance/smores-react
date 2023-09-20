import React from 'react'
import { TableHeaderProps } from '../types'
import { StyledHeaderCell, StyledRow } from './commonComponents'

export const TableHeader = <T extends object>({
  columns,
  fixedHeader,
  headerColor,
  rowActions,
  headerHeight,
  expandable,
  rowActionsMinWidth,
}: TableHeaderProps<T>) => {
  return (
    <StyledRow>
      {columns.map((column, columnIndex) => (
        <StyledHeaderCell
          key={columnIndex}
          fixedHeader={fixedHeader}
          headerHeight={headerHeight}
          minWidth={column.minWidth}
          maxWidth={column.maxWidth}
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
