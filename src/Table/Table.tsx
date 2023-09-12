import React from 'react'
import { TableHeader } from './components/TableHeader'
import { TableRow } from './components/TableRow'
import { StyledTable } from './components/commonComponents'
import { TableColumn } from './types'

/**
 * Key features
 * header (done via config, pass in matching columnId)
 * fixedHeader
 * filterByHeaderId
 * headerIdWidth (otherwise responsive)(?)
 * subTables (?) - issues, header width, needs its own subHeader?
 * subTableColor
 * allowOverflow
 * rows (done via passing in data, match the columnId)
 * rowActions
 * hideRowActions
 * expandRow
 * pagination - issues, routing, want to have lots of control (?)
 * overrideSection sections with ReactNode
 *
 *
 */
export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  noHeader?: boolean
  fixedHeader?: boolean
  subTable?: boolean
}
export const Table = <T,>({
  columns,
  data,
  noHeader = false,
  fixedHeader = true,
  subTable,
}: TableProps<T>) => {
  return (
    <StyledTable subTable={subTable}>
      {!noHeader && (
        <thead>
          <TableHeader
            columns={columns}
            fixedHeader={fixedHeader}
            subTable={subTable}
          />
        </thead>
      )}
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowData={row}
            rowIndex={rowIndex}
            columns={columns}
            subTable={subTable}
          />
        ))}
      </tbody>
    </StyledTable>
  )
}
