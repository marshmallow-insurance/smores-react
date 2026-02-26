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
    rowColor = 'color.surface.base.300',
    data,
    columns,
    ...restFooter
  } = footer

  return (
    <TableRow
      key="footer"
      rowIndex={columns.length - 1}
      rowColor={rowColor}
      rowData={data}
      columns={columns}
      {...restFooter}
    />
  )
}
