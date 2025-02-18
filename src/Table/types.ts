import React, { ReactElement, ReactNode } from 'react'
import { ButtonProps } from '../Button/Button'
import { IconStrictProps } from '../IconStrict'
import { Color } from '../theme'

export type TableStylesProps = {
  hasKeyline?: boolean
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
  noRowBorderColor?: boolean
}

export type Primitive = string | number | boolean | bigint

export type BaseRowAction<T> = {
  onClick: (rowData: T) => void
  showCondition?: (rowData: T) => boolean
}

export type RowAction<T> =
  | RowActionButtonDefault<T>
  | RowActionElementOverride<T>

export type RowActionButtonDefault<T> = {
  iconButton?: Pick<
    IconStrictProps,
    'size' | 'render' | 'iconColor' | 'backgroundColor' | 'id' | 'title'
  > & { tooltipText?: string }
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
    | 'id'
  >
} & BaseRowAction<T>

export type RowActionElementOverride<T> = {
  element: ReactElement<any>
} & BaseRowAction<T>

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

/**
 * A type that represents a pixel value with the "px" suffix.
 *
 * @example '0' | '12px' | '24px'
 */
type PixelSuffix = `${number}px`

type Spacing = '0' | PixelSuffix
/**
 * A type that represents a padding value with the "px" suffix.
 *
 * The value can be a single value, or a string with 2, 3, or 4 values.
 * The values are applied in the following order: top, right, bottom, left.
 *
 * @example '0' | '12px' | '24px' | '12px 24px' | '12px 0 36px' | '12px 24px 36px 48px'
 */
type BoxSpacing =
  | Spacing
  | `${Spacing} ${Spacing}`
  | `${Spacing} ${Spacing} ${Spacing}`
  | `${Spacing} ${Spacing} ${Spacing} ${Spacing}`

type SubElementProps = {
  bgColor?: Color
  padding?: BoxSpacing
  margin?: BoxSpacing
}

// TODO: make `subTable` and `subRows` mutually exclusive
/** @template T - The type of data the table displays. */
interface CommonTableProps<T> {
  /** Array of columns to display in the table. */
  columns: TableColumn<T>[]
  /** Sets the height of the header. */
  headerHeight?: string
  /** If true, the table header will be fixed/sticky. */
  fixedHeader?: boolean
  /** If true, the table header will have a key line. */
  hasKeyline?: boolean
  /** If present, the table rows will have alternating colors. */
  stripedColor?: Color
  /** A function to determine if a row is expandable. */
  expandable?: (rowData: T) => boolean
  /** The color for the table header. */
  headerColor?: Color
  /** The default color for each table row. */
  rowColor?: Color
  /** The default color for each table row border. */
  rowBorderColor?: Color
  /** If true, the table will have rounded corners */
  roundedTable?: true
  /** A React element to show when a row is expanded. */
  subTable?: SubElementProps & {
    table: (rowData: T) => ReactElement<any>
  }
  /** Settings for sub rows. */
  subRows?: SubElementProps & {
    /** Function that returns a React element for the sub row. */
    rows: (rowData: T) => ReactElement<any> | ReactElement<any>[]
  }
  /** Function to apply to a row, to make the entire row clickable, useful for navigation. */
  clickableRow?: (rowData: T) => void
  /** Array of actions that can be performed on each row. */
  rowActions?: RowActions<T>
  /** The Y padding for each row. */
  rowPadding?: string
  /** The X padding for each row. */
  columnPadding?: string
  /** Hides the table header. Table defaults to always showing the header. */
  hideTableHeader?: boolean
}

export interface TableProps<T> extends CommonTableProps<T> {
  /** Array of data to be displayed in the table. */
  data: T[]
  /** The text to show when there is no available data to map through. */
  noDataContent?: ReactNode
}

export interface TableRowProps<T> extends CommonTableProps<T> {
  rowData: T
  rowIndex: number
  showActions?: boolean
  hideBorder?: boolean
}

export interface RowActionsProps<T>
  extends Pick<CommonTableProps<T>, 'expandable' | 'rowActions'> {
  rowData: T
  toggleExpansion: () => void
  isExpanded?: boolean
}

export type TableHeaderProps<T> = CommonTableProps<T>
