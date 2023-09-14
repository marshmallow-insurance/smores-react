import React, { ReactElement, ReactNode, useState } from 'react'
import { isMappedReactElement, isReactElement } from '../helpers'
import { TableRowProps } from '../types'
import { RowActions } from './RowActions'
import { StyledCell, StyledRow } from './commonComponents'

export const TableRow = <T,>({
  rowData,
  rowIndex,
  columns,
  subRows,
  subTable,
  striped,
  rowActions,
  rowColor,
  rowPadding,
  expandable,
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

  return (
    <>
      <StyledRow striped={striped} rowColor={rowColor}>
        {columns.map((column, columnIndex) => {
          let cellContent: ReactNode
          if (column.cell) {
            cellContent = column.cell(rowData, rowIndex, column, rowIndex)
          }

          return (
            <StyledCell key={columnIndex} rowPadding={rowPadding}>
              {cellContent}
            </StyledCell>
          )
        })}

        {rowActions && (
          <RowActions
            expandable={expandable}
            rowActions={rowActions}
            rowData={rowData}
            isExpanded={expandedRows.includes(rowIndex)}
            toggleExpansion={() => toggleRowExpansion(rowIndex)}
          />
        )}
      </StyledRow>

      {expandedRows.includes(rowIndex) && (
        <>
          {subRows &&
            subRowsData &&
            showSubRowsOnExpand &&
            isReactElement(subRowsData) &&
            React.cloneElement(subRowsData as ReactElement, {
              rowPadding: rowPadding,
            })}

          {subRows &&
            subRowsData &&
            showSubRowsOnExpand &&
            isMappedReactElement(subRowsData) &&
            (subRowsData as ReactElement[]).map((row) =>
              React.cloneElement(row, {
                rowPadding: rowPadding,
              }),
            )}

          {subTable && showSubTableOnExpand && subTableData && (
            <StyledCell
              colSpan={rowActions ? columns.length + 1 : columns.length}
            >
              {React.cloneElement(subTableData, {
                rowPadding: rowPadding,
              })}
            </StyledCell>
          )}
        </>
      )}

      {subRows &&
        subRowsData &&
        !showSubRowsOnExpand &&
        isReactElement(subRowsData) &&
        React.cloneElement(subRowsData as ReactElement, {
          rowPadding: rowPadding,
        })}

      {subRows &&
        subRowsData &&
        !showSubRowsOnExpand &&
        isMappedReactElement(subRowsData) &&
        (subRowsData as ReactElement[]).map((row) =>
          React.cloneElement(row, {
            rowPadding: rowPadding,
          }),
        )}

      {subTable && subTableData && !showSubTableOnExpand && (
        <StyledCell colSpan={rowActions ? columns.length + 1 : columns.length}>
          {React.cloneElement(subTableData, {
            rowPadding: rowPadding,
          })}
        </StyledCell>
      )}
    </>
  )
}
