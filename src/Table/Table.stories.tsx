import React from 'react'
import { Box } from '../Box'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { Text } from '../Text'
import { Tooltip } from '../Tooltip'
import { Table } from './Table'
import { TableRow } from './components/TableRow'
import { DataRow, data } from './storyUtils'
import { ExpanderComponentProps, TableProps } from './types'

export default {
  title: 'Table',
  component: Table,
}

const Template = (props: TableProps<DataRow>) => (
  <Box height="400px">
    <Table {...props} />
  </Box>
)

export const Default = Template.bind({})

const columns = [
  {
    name: 'id',
    cell: (row: DataRow) => row.id,
    minWidth: '100px',
  },
  {
    name: 'name',
    cell: (row: DataRow) => row.name,
    minWidth: '100px',
  },
  {
    name: (
      <Tag
        bgColor="marshmallowPink"
        borderColor="marshmallowPink"
        color="liquorice"
        label="ReactNode Header"
      />
    ),
    cell: (row: DataRow) => (
      <Tag
        bgColor="coconut"
        borderColor="coconut"
        color="liquorice"
        label={row.type}
      />
    ),
    minWidth: '200px',
  },
  {
    name: 'ability',
    cell: (row: DataRow) => <Text typo="headline-small">{row.ability}</Text>,
  },
  {
    name: 'evolves',
    cell: (row: DataRow) => (
      <Tooltip content="This pokemon evolves" position="top">
        <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
      </Tooltip>
    ),
  },
  {
    name: 'exta column',
    cell: (row: DataRow) => (
      <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
    ),
  },
  {
    name: 'another extra column',
    cell: (row: DataRow) => (
      <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
    ),
    minWidth: '200px',
  },
  {
    name: 'another extra column',
    cell: (row: DataRow) => (
      <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
    ),
    minWidth: '200px',
  },
  {
    name: 'another extra column',
    cell: (row: DataRow) => (
      <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
    ),
    minWidth: '200px',
  },
  {
    name: 'another extra column',
    cell: (row: DataRow) => (
      <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
    ),
    minWidth: '200px',
  },
  {
    name: 'another extra column',
    cell: (row: DataRow) => (
      <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
    ),
    minWidth: '200px',
  },
]

export const ExpandableRowComponent: React.FC<
  ExpanderComponentProps<DataRow>
> = ({ data }) => {
  if (!data.subRowData) return null
  return (
    <>
      <TableRow rowData={data} rowIndex={1} columns={columns} />
      <Table
        columns={[
          {
            name: 'another extra column',
            cell: (row: DataRow) => (
              <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
            ),
            minWidth: '200px',
          },
          {
            name: 'another extra column',
            cell: (row: DataRow) => (
              <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
            ),
            minWidth: '200px',
          },
        ]}
        data={data.subRowData}
        fixedHeader={false}
      />
    </>
  )
}

Default.args = {
  columns,
  data,
  noHeader: false,
  expandableRows: true,
  expandableRowsComponent: ExpandableRowComponent,
}
