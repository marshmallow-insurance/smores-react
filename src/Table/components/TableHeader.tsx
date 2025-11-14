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
  hasKeyline,
}: TableHeaderProps<T>) => {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const showActionsCell = expandable || rowActions

  return (
    <StyledRow>
      {columns.map((column, columnIndex) => {
        return (
          <StyledHeaderCell
            key={columnIndex}
            $fixedHeader={fixedHeader}
            $headerHeight={headerHeight}
            $minWidth={column.minWidth}
            $maxWidth={column.maxWidth}
            $headerColor={headerColor}
            $columnPadding={columnPadding}
            $hasKeyline={hasKeyline}
          >
            {column.name}
          </StyledHeaderCell>
        )
      })}
      {showActionsCell && (
        <StyledHeaderCell
          $fixedHeader={fixedHeader}
          $stickyCell={true}
          $minWidth={rowActions?.minWidth}
          $headerColor={headerColor}
          $columnPadding={columnPadding}
          $hasKeyline={hasKeyline}
        >
          Actions
        </StyledHeaderCell>
      )}
    </StyledRow>
  )
}
