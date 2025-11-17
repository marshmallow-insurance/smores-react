import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Box } from '../../Box'
import { Table } from '../Table'
import { TableRow } from '../components/TableRow'
import { TableProps, type TableColumn } from '../types'
import { DataRow, columns, columnsV2, data, rowActions } from './storyUtils'

const Wrapper = styled(Box)`
  background: ${({ theme }) => theme.color.illustration.accent2[200]};
  overflow: scroll;
`

const BorderBox = styled(Box)`
  border: 1px dashed ${({ theme }) => theme.color.illustration.neutral[300]};
`

const meta: Meta<TableProps<DataRow, object>> = {
  title: 'Table',
  component: Table,
  decorators: [
    (Story) => (
      <Box px="12px" m="24px" style={{ backgroundColor: '#F1E9DC' }}>
        <Story />
      </Box>
    ),
  ],
}

export default meta
type Story<K extends object | undefined = undefined> = StoryObj<
  TableProps<DataRow, K extends object ? K : object>
>

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

const tableFooterData = {
  total: 100,
  page: 1,
  pageSize: 10,
} as const

const footerColumns = [
  {
    name: 'ID',
    cell: () => 'Footer row',
  },
  {
    name: 'Total',
    cell: (row) => row.total,
  },
  {
    name: 'Page',
    cell: (row) => row.page,
  },
] satisfies TableColumn<typeof tableFooterData>[]

export const TableFooter: Story<typeof tableFooterData> = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 3),
    data,
    footer: {
      data: tableFooterData,
      columns: footerColumns,
      rowColor: 'color.feedback.inactive.100',
    },
  },
}

export const TableFooterElement: Story<typeof tableFooterData> = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 3),
    data,
    footer: {
      element: (
        <BorderBox
          flex
          justifyContent="center"
          p="48px"
          width="100%"
          style={{ backgroundColor: '#F1E9DC' }}
        >
          Footer element
        </BorderBox>
      ),
    },
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
            rowColor="color.feedback.inactive.100"
          />
        ))
      },
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
            rowColor="color.feedback.inactive.100"
          />
        ))
      },
    },
  },
}

export const SubTable: Story = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 4),
    headerColor: 'color.surface.base.300',
    rowColor: 'color.surface.base.300',
    data,
    expandable: () => true,
    subTable: {
      bgColor: 'color.surface.base.300',
      table: () => (
        <Table
          columns={columnsV2}
          rowColor="color.surface.base.200"
          rowBorderColor="color.illustration.neutral.300"
          data={data}
          rowActions={{ actions: rowActions }}
          roundedTable
          hideTableHeader
        />
      ),
    },
  } satisfies TableProps<DataRow>,
}

export const RowActions: Story = {
  args: {
    rowPadding: '12px',
    columns: columns.slice(0, 4),
    data,
    stripedColor: 'color.surface.base.000',
    expandable: () => true,
    clickableRow: (row: DataRow) =>
      alert(`onClick from ${row.ability} is working`),
    subTable: {
      table: () => (
        <Table
          columns={columnsV2}
          data={data}
          headerColor="color.surface.base.200"
          rowColor="color.illustration.accent3.100"
          fixedHeader={false}
          rowActions={{ actions: rowActions }}
        />
      ),
    },
    rowActions: {
      actions: rowActions,
      bgColor: 'color.illustration.accent3.100',
    },
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
          headerColor="color.surface.base.200"
          rowColor="color.illustration.accent3.100"
          fixedHeader={false}
          rowActions={{ actions: rowActions }}
        />
      ),
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
            rowColor="color.surface.base.000"
            rowBorderColor="color.feedback.inactive.100"
            rowActions={{ actions: rowActions }}
          />
        ))
      },
    },
    rowColor: 'color.surface.base.300',
    headerColor: 'color.surface.base.200',
    rowActions: {
      actions: rowActions,
      bgColor: 'color.surface.base.300',
    },
    rowPadding: '4px',
  },
}
