import React, { useRef } from 'react'
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
  const cellRefs = useRef<(HTMLDivElement | null)[]>([])
  const actionsRef = useRef<HTMLTableHeaderCellElement | null>(null)
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const showActionsCell = expandable || rowActions

  return (
    <StyledRow>
      {columns.map((column, columnIndex) => {
        return (
          <StyledHeaderCell
            key={columnIndex}
            ref={(el: HTMLDivElement | null) => {
              cellRefs.current[columnIndex] = el
            }}
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
          ref={actionsRef}
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
