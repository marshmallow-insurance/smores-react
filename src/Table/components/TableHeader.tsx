import React from 'react'
import { TableHeaderProps } from '../types'
import { StyledHeaderCell, StyledRow } from './commonComponents'

export const TableHeader = <T extends object>({
  columns,
  fixedHeader,
  headerColor,
  rowActions,
  headerHeight,
  columnPadding,
  expandable,
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
          columnPadding={columnPadding}
        >
          {column.name}
        </StyledHeaderCell>
      ))}
      {(expandable || rowActions) && (
        <StyledHeaderCell
          fixedHeader={fixedHeader}
          stickyCell={true}
          minWidth={rowActions?.minWidth}
          headerColor={headerColor}
          columnPadding={columnPadding}
        >
          Actions
        </StyledHeaderCell>
      )}
    </StyledRow>
  )
}
