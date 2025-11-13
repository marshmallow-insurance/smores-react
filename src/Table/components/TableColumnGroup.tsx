import React, {
  useLayoutEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
} from 'react'

type TableColumnGroupProps = {
  widths: string[] | undefined
  columnCount: number
  setSubTableColumnWidths: Dispatch<SetStateAction<string[]>>
  shouldAlignSubTableColumns?: boolean
}

export function TableColumnGroup({
  widths,
  columnCount,
  setSubTableColumnWidths,
  shouldAlignSubTableColumns = false,
}: TableColumnGroupProps) {
  const cellRefs = useRef<(HTMLDivElement | null)[]>([])

  // Sync header cell widths to sub table column widths
  useLayoutEffect(() => {
    // Only measure and set widths if aligning is enabled
    if (!shouldAlignSubTableColumns) {
      return
    }
    // Measure header cell widths (including the optional actions/expand column)
    const headerWidths = Array.from({ length: columnCount }).map((_, i) => {
      const el = cellRefs.current[i]
      return el ? el.getBoundingClientRect().width + 'px' : '0'
    })

    if (setSubTableColumnWidths) {
      setSubTableColumnWidths(headerWidths)
    }
  }, [setSubTableColumnWidths, columnCount, shouldAlignSubTableColumns])

  return (
    <colgroup>
      {Array.from({ length: columnCount }).map((_, index) => {
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
