import React from 'react'
import type { TableFooter } from '../types'
import { TableRow } from './TableRow'

type Props<K> = {
  footer: TableFooter<K>
  columnCount: number
}

export function TableFooter<K extends object>({
  footer,
  columnCount,
}: Props<K>) {
  if ('element' in footer) {
    return <td colSpan={columnCount}>{footer.element}</td>
  }

  const {
    columns,
    data,
    rowColor = 'custard',
    rowPadding,
    columnPadding,
  } = footer

  return (
    <TableRow
      key="footer"
      rowData={data}
      rowIndex={columns.length - 1}
      columns={columns}
      rowColor={rowColor}
      rowPadding={rowPadding}
      columnPadding={columnPadding}
    />
  )
}
