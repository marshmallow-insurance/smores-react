import React from 'react'

type TableColumnGroupProps = {
  widths: string[] | undefined
  count: number
}

export function TableColumnGroup({ widths, count }: TableColumnGroupProps) {
  return (
    <colgroup>
      {Array.from({ length: count }).map((_, index) => {
        const width =
          widths && index < widths.length ? widths[index] : undefined

        if (width) {
          console.log('colgroup width for column', index, 'is', width)
        }

        const style = width ? { width } : undefined

        return <col key={index} style={style} />
      })}
    </colgroup>
  )
}
