import {
  cloneElement,
  ReactElement,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'
import type { TableProps } from '../types'

type AlignedSubTableColumns<T> = {
  setSubTableColumnWidths: Dispatch<SetStateAction<string[]>>
  renderSubTable: ((rowData: T) => ReactElement<any>) | undefined
}

export function useAlignedSubTableColumns<T>(
  subTable: TableProps<T>['subTable'],
  alignedEnabled: boolean,
): AlignedSubTableColumns<T> {
  const [columnWidths, setSubTableColumnWidths] = useState<string[]>([])

  if (!subTable || !alignedEnabled) {
    return {
      setSubTableColumnWidths,
      renderSubTable: subTable?.table,
    }
  }

  return {
    setSubTableColumnWidths,
    renderSubTable: (rowData: T) => {
      return cloneElement(subTable.table(rowData), {
        columnWidths,
      })
    },
  }
}
