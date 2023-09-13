export type TableStylesProps = {
  subTable?: boolean
  fixedHeader?: boolean
  striped?: boolean
  minWidth?: string
  expandableRows?: boolean
}

export type Primitive = string | number | boolean | bigint

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
  subTable?: boolean
  fixedHeader?: boolean
  striped?: boolean
  expandableRows?: boolean
  expandableRowsComponent?: ExpandableRowsComponent<T>
  expandableRowsComponentProps?: ComponentProps
}

export interface TableProps<T> extends CommonTableProps<T> {
  data: T[]
  noHeader?: boolean
}

export interface TableRowProps<T> extends CommonTableProps<T> {
  rowData: T
  rowIndex: number
}

export interface TableHeaderProps<T> extends CommonTableProps<T> {}

export type ComponentProps = Record<string, unknown>
export type ExpanderComponentProps<T> = { data: T }
export type ExpandableRowsComponent<T> = React.ComponentType<
  ExpanderComponentProps<T>
>
