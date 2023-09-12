export type Selector<T> = (row: T, rowIndex?: number) => Primitive
export type Primitive = string | number | boolean | bigint

export interface TableColumn<T> {
  name?: string | number | React.ReactNode
  cell?: (
    row: T,
    rowIndex: number,
    column: TableColumn<T>,
    id: string | number,
  ) => React.ReactNode
  selector?: Selector<T>
}
