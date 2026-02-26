import {
  useLayoutEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
} from 'react'
import { useWindowSize } from '../../utils/useWindowSize'

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

  const colGroupRef = useRef<HTMLTableColElement | null>(null)
  const { width } = useWindowSize(colGroupRef)

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
  }, [setSubTableColumnWidths, columnCount, shouldAlignSubTableColumns, width])

  return (
    <colgroup ref={colGroupRef}>
      {Array.from({ length: columnCount }).map((_, index) => {
        const width =
          widths && index < widths.length ? widths[index] : undefined

        const style = width ? { width } : undefined

        return (
          <col
            ref={(el) => {
              cellRefs.current[index] = el
            }}
            key={index}
            style={style}
          />
        )
      })}
    </colgroup>
  )
}
