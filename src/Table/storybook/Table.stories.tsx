import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { theme } from '../../theme'
import { Table } from '../Table'
import { TableRow } from '../components/TableRow'
import { TableProps } from '../types'
import { DataRow, columns, columnsV2, data, rowActions } from './storyUtils'

const Wrapper = styled(Box)`
  background: ${theme.colors.blueberry};
  overflow: scroll;
`

const BorderBox = styled(Box)`
  border: 1px dashed ${theme.colors.oatmeal};
`

const meta: Meta<TableProps<DataRow>> = {
  title: 'Table',
  component: Table,
}

export default meta
type Story = StoryObj<TableProps<DataRow>>

const TemplateWithWrapper: Story = {
  render: (args) => (
    <Wrapper height="400px" mb="64px">
      <Table {...args} />
    </Wrapper>
  ),
}

export const Default: Story = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 6),
    data,
    fixedHeader: true,
  },
}

export const BasicTable: Story = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 3),
    data,
  },
}

export const TrucateContent: Story = {
  args: {
    rowPadding: '12px',
    columns: columns,
    data,
  },
}

export const OverflowTable: Story = {
  ...TemplateWithWrapper,
  args: {
    rowPadding: '12px',
    columns: columns,
    data,
  },
}

export const NoDataTable: Story = {
  ...TemplateWithWrapper,
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 4),
    data: [],
  },
}

export const CustomNoDataTable: Story = {
  ...TemplateWithWrapper,
  args: {
    rowPadding: '0px',
    columns: columns.slice(0, 5),
    data: [],
    noDataContent: (
      <BorderBox flex justifyContent="center" my="24px" p="48px">
        No data
      </BorderBox>
    ),
  },
}

export const StaticHeader: Story = {
  ...TemplateWithWrapper,
  args: {
    rowPadding: '12px',
    columns: columns,
    data,
    fixedHeader: false,
  },
}

export const ReallyLargeHeader: Story = {
  ...TemplateWithWrapper,
  args: {
    rowPadding: '12px',
    headerHeight: '120px',
    columns: columns,
    data,
    fixedHeader: false,
  },
}

export const RowPadding: Story = {
  args: {
    rowPadding: '0px',
    columns: columns.slice(0, 4),
    data,
  },
}

export const SubRows: Story = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 4),
    data,
    subRows: {
      rows: (row: DataRow) => {
        if (!row.subRowData) return []
        return row.subRowData.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            columns={columns.slice(0, 4)}
            rowColor="chia"
          />
        ))
      },
      showOnExpand: () => false,
    },
  },
}

export const SubRowsShowOnExpand: Story = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 4),
    data,
    expandable: (row: DataRow) => !!row.subRowData,
    subRows: {
      rows: (row: DataRow) => {
        if (!row.subRowData) return []
        return row.subRowData.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            columns={columns.slice(0, 4)}
            rowColor="chia"
          />
        ))
      },
      showOnExpand: () => true,
    },
  },
}

export const SubTable: Story = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 4),
    data,
    stripedColor: 'cream',
    expandable: () => true,
    subTable: {
      table: () => (
        <Table
          columns={columnsV2}
          data={data}
          rowColor="matcha"
          rowActions={{ actions: rowActions }}
          hideTableHeader
        />
      ),
      showOnExpand: () => true,
    },
  },
}

export const RowActions: Story = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 4),
    data,
    stripedColor: 'cream',
    expandable: () => true,
    clickableRow: (row: DataRow) =>
      alert(`onClick from ${row.ability} is working`),
    subTable: {
      table: () => (
        <Table
          columns={columnsV2}
          data={data}
          headerColor="mascarpone"
          rowColor="matcha"
          fixedHeader={false}
          rowActions={{ actions: rowActions }}
        />
      ),
      showOnExpand: () => true,
    },
    rowActions: { actions: rowActions, bgColor: 'matcha' },
  },
}

export const EverythingTable: Story = {
  ...TemplateWithWrapper,
  args: {
    columns: columns,
    data,
    expandable: () => true,
    subTable: {
      table: () => (
        <Table
          clickableRow={(row: DataRow) =>
            alert(`onClick from ${row.ability} is working`)
          }
          columns={columnsV2}
          data={data}
          headerColor="mascarpone"
          rowColor="matcha"
          fixedHeader={false}
          rowActions={{ actions: rowActions }}
        />
      ),
      showOnExpand: () => true,
    },
    subRows: {
      rows: (row: DataRow) => {
        if (!row.subRowData) return []
        return row.subRowData.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            columns={columns}
            rowColor="cream"
            rowBorderColor="chia"
            rowActions={{ actions: rowActions }}
          />
        ))
      },
      showOnExpand: () => false,
    },
    rowColor: 'custard',
    headerColor: 'mascarpone',
    rowActions: {
      actions: rowActions,
      bgColor: 'custard',
    },
    rowPadding: '4px',
  },
}
