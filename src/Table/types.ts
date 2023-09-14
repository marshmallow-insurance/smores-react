import { ReactElement } from 'react'
import { ButtonProps } from '../Button/Button'
import { IconStrictProps } from '../IconStrict'
import { Color } from '../theme'

export type TableStylesProps = {
  fixedHeader?: boolean
  striped?: boolean
  rowActions?: boolean
  headerColor?: Color
  rowColor?: Color
  minWidth?: string
}

export type Primitive = string | number | boolean | bigint

export type RowAction<T> = {
  //NOTE: what can i rename this too?
  onClick: (rowData: T) => void
  label?: ReactElement
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
  striped?: boolean
  expandable?: (rowData: T) => boolean
  headerColor?: Color
  rowColor?: Color
  subTable?: ReactElement
  subRows?: { rows: (rowData: T) => ReactElement; showOnExpand?: boolean }
  rowActions?: RowAction<T>[]
  rowActionsMinWidth?: string
}

export interface TableProps<T> extends CommonTableProps<T> {
  data: T[]
}

export interface TableRowProps<T> extends CommonTableProps<T> {
  rowData: T
  rowIndex: number
}

export interface RowActionsProps<T> {
  rowData: T
  toggleExpansion: () => void
  isExpanded?: boolean
  expandable?: (rowData: T) => boolean
  rowActions?: RowAction<T>[]
}

export interface TableHeaderProps<T> extends CommonTableProps<T> {}
