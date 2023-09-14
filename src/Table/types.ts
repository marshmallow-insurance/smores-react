import { ReactElement } from 'react'
import { ButtonProps } from '../Button/Button'
import { IconStrictProps } from '../IconStrict'
import { Color } from '../theme'

export type TableStylesProps = {
  fixedHeader?: boolean
  stripedColor?: Color
  stickyCell?: boolean
  headerColor?: Color
  rowColor?: Color
  rowBorderColor?: Color
  minWidth?: string
  rowPadding?: string
}

export type Primitive = string | number | boolean | bigint

export type RowAction<T> = {
  //NOTE: what can i rename this too?
  label?: ReactElement
  onClick: (rowData: T) => void
  iconButton?: Pick<
    IconStrictProps,
    'size' | 'render' | 'iconColor' | 'backgroundColor'
  >
  genericButton?: Pick<
    ButtonProps,
    | 'children'
    | 'loading'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'fallbackStyle'
    | 'textBtn'
    | 'smallButton'
  >
  showCondition?: (rowData: T) => boolean
}

type RowCellRenderer<T> = (
  row: T,
  rowIndex: number,
  column: TableColumn<T>,
  id: string | number,
) => React.ReactNode

export interface TableColumn<T> {
  name?: string | number | React.ReactNode
  minWidth?: string
  cell?: RowCellRenderer<T>
}

interface CommonTableProps<T> {
  columns: TableColumn<T>[]
  fixedHeader?: boolean
  stripedColor?: Color
  expandable?: (rowData: T) => boolean
  headerColor?: Color
  rowColor?: Color
  rowBorderColor?: Color
  subTable?: {
    table: (rowData: T) => ReactElement
    showOnExpand?: (rowData: T) => boolean
  }
  subRows?: {
    rows: (rowData: T) => ReactElement | ReactElement[]
    showOnExpand?: (rowData: T) => boolean
  }
  rowActions?: RowAction<T>[]
  rowActionsMinWidth?: string
  rowPadding?: string
}

export interface TableProps<T> extends CommonTableProps<T> {
  data: T[]
}

export interface TableRowProps<T> extends CommonTableProps<T> {
  rowData: T
  rowIndex: number
  showActions?: boolean
}

export interface RowActionsProps<T> {
  rowData: T
  toggleExpansion: () => void
  isExpanded?: boolean
  expandable?: (rowData: T) => boolean
  rowActions?: RowAction<T>[]
}

export interface TableHeaderProps<T> extends CommonTableProps<T> {}
