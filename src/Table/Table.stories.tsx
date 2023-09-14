import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { theme } from '../theme'
import { Table } from './Table'
import { TableRow } from './components/TableRow'
import { DataRow, columns, columnsV2, data, rowActions } from './storyUtils'
import { TableProps } from './types'

export default {
  title: 'Table',
  component: Table,
}

const Template = (props: TableProps<DataRow>) => (
  <Wrapper height="400px" width="600px" mb="64px">
    <Table {...props} />
  </Wrapper>
)

const Wrapper = styled(Box)`
  background: ${theme.colors.blueberry};
  overflow: scroll;
`

export const Default = Template.bind({})

Default.args = {
  columns: columns,
  data,
  expandable: () => true,
  subTable: (
    <Table
      columns={columnsV2}
      data={data}
      headerColor="mascarpone"
      rowColor="matcha"
      fixedHeader={false}
      rowActions={rowActions}
    />
  ),
  subRows: {
    rows: (row: DataRow) => {
      if (!row.subRowData) return
      return row.subRowData.map((row, rowIndex) => {
        return (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            columns={columns}
            rowColor="chia"
            rowActions={rowActions}
          />
        )
      })
    },
  },
  rowColor: 'custard',
  headerColor: 'mascarpone',
  rowActions: rowActions,
  rowPadding: '4px',
}
