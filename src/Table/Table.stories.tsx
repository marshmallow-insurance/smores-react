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

const Template = (props: TableProps<DataRow>) => <Table {...props} />

const TemplateWithWrapper = (props: TableProps<DataRow>) => (
  <Wrapper height="400px" mb="64px">
    <Table {...props} />
  </Wrapper>
)

const Wrapper = styled(Box)`
  background: ${theme.colors.blueberry};
  overflow: scroll;
`

export const Default = Template.bind({})

Default.args = {
  rowPadding: '12px',
  columns: columns,
  data,
  fixedHeader: true,
}

export const BasicTable = Template.bind({})

BasicTable.args = {
  rowPadding: '12px',
  columns: columns.slice(0, 3),
  data,
}

export const OverflowTable = TemplateWithWrapper.bind({})

OverflowTable.args = {
  rowPadding: '12px',
  columns: columns,
  data,
}

export const StaticHeader = TemplateWithWrapper.bind({})

StaticHeader.args = {
  rowPadding: '12px',
  columns: columns,
  data,
  fixedHeader: false,
}

export const RowPadding = Template.bind({})

RowPadding.args = {
  rowPadding: '0px',
  columns: columns.slice(0, 4),
  data,
}

export const SubRows = Template.bind({})

SubRows.args = {
  rowPadding: '12px',
  columns: columns.slice(0, 4),
  data,
  subRows: {
    rows: (row: DataRow) => {
      if (!row.subRowData) return
      return row.subRowData.map((row, rowIndex) => {
        return (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            columns={columns.slice(0, 4)}
            rowColor="chia"
          />
        )
      })
    },
    showOnExpand: () => false,
  },
}

export const SubRowsShowOnExpand = Template.bind({})

SubRowsShowOnExpand.args = {
  rowPadding: '12px',
  columns: columns.slice(0, 4),
  data,
  expandable: () => true,
  subRows: {
    rows: (row: DataRow) => {
      if (!row.subRowData) return
      return row.subRowData.map((row, rowIndex) => {
        return (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            columns={columns.slice(0, 4)}
            rowColor="chia"
          />
        )
      })
    },
    showOnExpand: () => true,
  },
}

export const SubTable = Template.bind({})

SubTable.args = {
  rowPadding: '12px',
  columns: columns.slice(0, 4),
  data,
  stripedColor: 'cream',
  expandable: () => true,
  subTable: {
    table: () => {
      return (
        <Table
          columns={columnsV2}
          data={data}
          headerColor="mascarpone"
          rowColor="matcha"
          fixedHeader={false}
          rowActions={rowActions}
        />
      )
    },
    showOnExpand: () => true,
  },
}

export const RowActions = Template.bind({})

RowActions.args = {
  rowPadding: '12px',
  columns: columns.slice(0, 4),
  data,
  stripedColor: 'cream',
  expandable: () => true,
  subTable: {
    table: () => {
      return (
        <Table
          columns={columnsV2}
          data={data}
          headerColor="mascarpone"
          rowColor="matcha"
          fixedHeader={false}
          rowActions={rowActions}
        />
      )
    },
    showOnExpand: () => true,
  },
  rowActions: rowActions,
}

export const EverythingTable = TemplateWithWrapper.bind({})

EverythingTable.args = {
  columns: columns,
  data,
  expandable: () => true,
  subTable: {
    table: () => {
      return (
        <Table
          columns={columnsV2}
          data={data}
          headerColor="mascarpone"
          rowColor="matcha"
          fixedHeader={false}
          rowActions={rowActions}
        />
      )
    },
    showOnExpand: () => true,
  },
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
            rowColor="cream"
            rowBorderColor="chia"
            rowActions={rowActions}
          />
        )
      })
    },
    showOnExpand: () => false,
  },
  rowColor: 'custard',
  headerColor: 'mascarpone',
  rowActions: rowActions,
  rowPadding: '4px',
}
