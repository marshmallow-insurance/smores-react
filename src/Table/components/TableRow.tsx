import React, { cloneElement, ReactNode, useState } from 'react'
import { isReactElement } from '../../utils/isReactElement'
import { isMappedReactElement } from '../helpers'
import { TableRowProps } from '../types'
import { RowActions } from './RowActions'
import { StyledCell, StyledRow, StyledSubTableCell } from './commonComponents'
import { useTheme } from 'styled-components'
import { resolveToThemeColor } from '../../ThemeProvider/utils/colourMap'

export const TableRow = <T extends object>({
  rowData,
  rowIndex,
  columns,
  subRows,
  subTable,
  stripedColor,
  rowActions,
  rowColor,
  rowBorderColor,
  rowPadding,
  columnPadding,
  showActions,
  expandable,
  clickableRow,
  hideBorder,
}: TableRowProps<T>) => {
  const theme = useTheme()
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const resolvedRowColor = rowColor
    ? resolveToThemeColor(rowColor, theme)
    : undefined
  const resolvedStripedColor = stripedColor
    ? resolveToThemeColor(stripedColor, theme)
    : undefined
  const resolvedRowBorderColor = rowBorderColor
    ? resolveToThemeColor(rowBorderColor, theme)
    : undefined

  const toggleRowExpansion = (rowIndex: number) => {
    setExpandedRows((prevState) =>
      prevState.includes(rowIndex)
        ? prevState.filter((index) => index !== rowIndex)
        : [...prevState, rowIndex],
    )
  }

  const canExpandRow =
    expandable !== undefined
      ? expandable?.(rowData)
      : Boolean(subTable?.table ?? subRows?.rows)

  const subRowsData = subRows?.rows(rowData)
  const subTableData = subTable?.table(rowData)

  const subPadding = subTable?.padding ?? subRows?.padding
  const subBgColor = subTable?.bgColor || subRows?.bgColor
  const resolvedSubBgColor = subBgColor
    ? resolveToThemeColor(subBgColor, theme)
    : undefined

  const showActionsCell = expandable ?? rowActions
  const expandSubProp = showActionsCell ? columns.length + 1 : columns.length

  const isExpandedRow = expandedRows.includes(rowIndex)

  return (
    <>
      <StyledRow
        $stripedColor={resolvedStripedColor}
        $rowColor={resolvedRowColor}
        $rowBorderColor={resolvedRowBorderColor}
        $clickableRow={!!clickableRow}
        $noRowBorderColor={isExpandedRow || hideBorder}
        onClick={() => clickableRow?.(rowData)}
        tabIndex={clickableRow && 0}
      >
        {columns.map((column, columnIndex) => {
          let cellContent: ReactNode
          if (column.cell) {
            cellContent = column.cell(rowData, rowIndex, column, rowIndex)
          }

          return (
            <StyledCell
              key={columnIndex}
              $rowPadding={rowPadding}
              $columnPadding={columnPadding}
              $minWidth={column.minWidth}
              $maxWidth={column.maxWidth}
              $noWrapContent={column.noWrapContent}
              $truncateContent={column.truncateContent}
              $hideOverflow={column.hideOverflow}
            >
              {cellContent}
            </StyledCell>
          )
        })}

        {(showActionsCell ?? showActions) && (
          <RowActions
            canExpandRow={canExpandRow}
            rowActions={rowActions}
            rowData={rowData}
            isExpanded={isExpandedRow}
            toggleExpansion={() => toggleRowExpansion(rowIndex)}
          />
        )}
      </StyledRow>
      {/**
       * Rendering subTable and/or subRows
       *
       * This could be extracted out and cleaned up
       * this section is for expanded rows only
       * Items rendered here wont show unless expanded
       */}

      {isExpandedRow && (
        <>
          {subRowsData &&
            isReactElement(subRowsData) &&
            cloneElement(subRowsData, { rowPadding, columnPadding })}

          {subRowsData &&
            isMappedReactElement(subRowsData) &&
            subRowsData.map((row) =>
              cloneElement(row, { rowPadding, showActions: showActionsCell }),
            )}

          {subTableData && (
            <StyledSubTableCell
              $rowBorderColor={resolvedRowBorderColor}
              colSpan={expandSubProp}
              $bgColor={resolvedSubBgColor}
              $padding={subPadding}
            >
              {cloneElement(subTableData, { rowPadding, columnPadding })}
            </StyledSubTableCell>
          )}
        </>
      )}
    </>
  )
}
