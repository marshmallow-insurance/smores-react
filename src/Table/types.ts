import { ReactElement, ReactNode } from 'react'
import { ButtonProps } from '../Button/Button'
import { IconStrictProps } from '../IconStrict'
import { Color } from '../theme'

export type TableStylesProps = {
  fixedHeader?: boolean
  headerHeight?: string
  stripedColor?: Color
  stickyCell?: boolean
  headerColor?: Color
  rowColor?: Color
  rowBorderColor?: Color
  rowActionsBgColor?: Color
  minWidth?: string
  maxWidth?: string
  noWrapContent?: boolean
  truncateContent?: boolean
  rowPadding?: string
  columnPadding?: string
  hideOverflow?: boolean
  clickableRow?: boolean
}

export type Primitive = string | number | boolean | bigint

export type RowAction<T> = {
  element?: ReactElement
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

export type RowActions<T> = {
  actions: RowAction<T>[]
  minWidth?: string
  bgColor?: Color
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
  maxWidth?: string
  noWrapContent?: boolean
  truncateContent?: boolean
  hideOverflow?: boolean
  cell?: RowCellRenderer<T>
}

interface CommonTableProps<T> {
  columns: TableColumn<T>[]
  headerHeight?: string
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
  clickableRow?: (rowData: T) => void
  rowActions?: RowActions<T>
  rowPadding?: string
  columnPadding?: string
}

export interface TableProps<T> extends CommonTableProps<T> {
  data: T[]
  noDataContent?: ReactNode
}

export interface TableRowProps<T> extends CommonTableProps<T> {
  rowData: T
  rowIndex: number
  showActions?: boolean
}

export interface RowActionsProps<T>
  extends Pick<CommonTableProps<T>, 'expandable' | 'rowActions'> {
  rowData: T
  toggleExpansion: () => void
  isExpanded?: boolean
}

export interface TableHeaderProps<T> extends CommonTableProps<T> {}
