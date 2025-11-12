import React, { useLayoutEffect, useRef } from 'react'
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
  columnWidths: subTableColumnWidths,
  setSubTableColumnWidths,
}: TableHeaderProps<T>) => {
  const cellRefs = useRef<(HTMLDivElement | null)[]>([])
  const actionsRef = useRef<HTMLTableHeaderCellElement | null>(null)
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const showActionsCell = expandable || rowActions

  // Sync header cell widths to sub table column widths
  useLayoutEffect(() => {
    // Measure header cell widths (including the optional actions/expand column)
    const headerWidths = columns.map((_, i) => {
      const el = cellRefs.current[i]
      return el ? el.getBoundingClientRect().width + 'px' : '0'
    })

    if (showActionsCell) {
      const el = actionsRef.current
      headerWidths.push(el ? el.getBoundingClientRect().width + 'px' : '0')
    }

    if (setSubTableColumnWidths) {
      setSubTableColumnWidths(headerWidths)
    }
  }, [
    columns,
    headerHeight,
    columnPadding,
    fixedHeader,
    hasKeyline,
    headerColor,
    showActionsCell,
    setSubTableColumnWidths,
  ])

  const actionsWidth =
    showActionsCell && subTableColumnWidths?.length == columns.length
      ? subTableColumnWidths[subTableColumnWidths.length - 1]
      : undefined

  return (
    <StyledRow>
      {columns.map((column, columnIndex) => {
        const width =
          subTableColumnWidths && subTableColumnWidths.length > columnIndex
            ? subTableColumnWidths[columnIndex]
            : undefined

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
            $width={width}
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
          $width={actionsWidth}
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
