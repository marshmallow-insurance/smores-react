import React, { ReactElement, ReactNode, useState } from 'react'
import { isMappedReactElement, isReactElement } from '../helpers'
import { TableRowProps } from '../types'
import { RowActions } from './RowActions'
import { StyledCell, StyledRow } from './commonComponents'

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
}: TableRowProps<T>) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const toggleRowExpansion = (rowIndex: number) => {
    setExpandedRows((prevState) =>
      prevState.includes(rowIndex)
        ? prevState.filter((index) => index !== rowIndex)
        : [...prevState, rowIndex],
    )
  }

  const subRowsData = subRows?.rows(rowData)
  const subTableData = subTable?.table(rowData)
  const showSubRowsOnExpand =
    subRows?.showOnExpand && subRows?.showOnExpand(rowData)
  const showSubTableOnExpand =
    subTable?.showOnExpand && subTable?.showOnExpand(rowData)

  const showActionsCell = expandable || rowActions
  const expandSubProp = showActionsCell ? columns.length + 1 : columns.length

  return (
    <>
      <StyledRow
        stripedColor={stripedColor}
        rowColor={rowColor}
        rowBorderColor={rowBorderColor}
        clickableRow={!!clickableRow}
        onClick={() => clickableRow && clickableRow(rowData)}
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
              rowPadding={rowPadding}
              columnPadding={columnPadding}
              minWidth={column.minWidth}
              maxWidth={column.maxWidth}
              noWrapContent={column.noWrapContent}
              truncateContent={column.truncateContent}
              hideOverflow={column.hideOverflow}
            >
              {cellContent}
            </StyledCell>
          )
        })}

        {(showActionsCell || showActions) && (
          <RowActions
            expandable={expandable}
            rowActions={rowActions}
            rowData={rowData}
            isExpanded={expandedRows.includes(rowIndex)}
            toggleExpansion={() => toggleRowExpansion(rowIndex)}
          />
        )}
      </StyledRow>

      {/**
       * This could be extracted out and cleaned up
       * this section is for expanded rows only
       * Items rendered here wont show unless expanded
       */}
      {expandedRows.includes(rowIndex) && (
        <>
          {subRows &&
            subRowsData &&
            showSubRowsOnExpand &&
            isReactElement(subRowsData) &&
            React.cloneElement(subRowsData as ReactElement, {
              rowPadding: rowPadding,
              columnPadding: columnPadding,
            })}

          {subRows &&
            subRowsData &&
            showSubRowsOnExpand &&
            isMappedReactElement(subRowsData) &&
            (subRowsData as ReactElement[]).map((row) =>
              React.cloneElement(row, {
                rowPadding: rowPadding,
                showActions: showActionsCell,
              }),
            )}

          {subTable && showSubTableOnExpand && subTableData && (
            <StyledCell colSpan={expandSubProp}>
              {React.cloneElement(subTableData, {
                rowPadding: rowPadding,
                columnPadding: columnPadding,
              })}
            </StyledCell>
          )}
        </>
      )}

      {/**
       * This could be extracted out and cleaned up
       * this section is for rendering things under a row,
       * without the need to expand.
       * Items rendered here wont show when expanded
       */}
      {subRows &&
        subRowsData &&
        !showSubRowsOnExpand &&
        isReactElement(subRowsData) &&
        React.cloneElement(subRowsData as ReactElement, {
          rowPadding: rowPadding,
          columnPadding: columnPadding,
        })}

      {subRows &&
        subRowsData &&
        !showSubRowsOnExpand &&
        isMappedReactElement(subRowsData) &&
        (subRowsData as ReactElement[]).map((row) =>
          React.cloneElement(row, {
            rowPadding: rowPadding,
            columnPadding: columnPadding,
          }),
        )}

      {subTable && subTableData && !showSubTableOnExpand && (
        <StyledCell colSpan={expandSubProp}>
          {React.cloneElement(subTableData, {
            rowPadding: rowPadding,
            columnPadding: columnPadding,
          })}
        </StyledCell>
      )}
    </>
  )
}
