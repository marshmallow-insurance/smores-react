import React from 'react'
import { TableHeader } from './components/TableHeader'
import { TableRow } from './components/TableRow'
import { StyledTable } from './components/commonComponents'
import { TableColumn } from './types'

/**
 * Key features & Progess
 *
 * columnWidth - semi done
 * striped - not done
 * rowColor - not done
 * tableColor - not done
 * rowActions - not done
 * hideRowActions - not done
 *
 * subTables (?) - semi done (probably remove from mvp)
 * subTableColor - not done
 * expandRow (?) - (can this be done with subTable work), semi - done
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
