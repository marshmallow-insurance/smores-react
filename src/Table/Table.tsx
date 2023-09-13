import React from 'react'
import { TableHeader } from './components/TableHeader'
import { TableRow } from './components/TableRow'
import { StyledTable } from './components/commonComponents'
import { TableProps } from './types'

/**
 * Key features & Progess
 *
 * tableColor - not done
 * rowActions - not done
 * hideRowActions - not done
 *
 * subTables (?) - semi done (probably remove from mvp)
 * subTableColor - not done
 * expandRow (?) - (can this be done with subTable work), semi - done
 */

export const Table = <T,>({
  columns,
  data,
  noHeader = false,
  fixedHeader = true,
  striped,
  expandableRows,
  expandableRowsComponent,
  expandableRowsComponentProps,
}: TableProps<T>) => {
  return (
    <StyledTable expandableRows={expandableRows}>
      {!noHeader && (
        <thead>
          <TableHeader
            columns={columns}
            fixedHeader={fixedHeader}
            expandableRows={expandableRows}
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
            expandableRows={expandableRows}
            expandableRowsComponent={expandableRowsComponent}
            expandableRowsComponentProps={expandableRowsComponentProps}
            striped={striped}
          />
        ))}
      </tbody>
    </StyledTable>
  )
}
