import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { Text } from '../Text'
import { Tooltip } from '../Tooltip'
import { theme } from '../theme'
import { Table } from './Table'
import { TableRow } from './components/TableRow'
import { DataRow, data } from './storyUtils'
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

const columns = [
  {
    name: 'id',
    cell: (row: DataRow) => row.id,
    minWidth: '100px',
  },
  {
    name: <Button textBtn>name btn</Button>,
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

Default.args = {
  columns,
  data,
  expandable: () => true,
  subTable: (
    <Table
      columns={[
        {
          name: 'ability',
          cell: (row: DataRow) => (
            <Text typo="headline-small">{row.ability}</Text>
          ),
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
          name: 'ability',
          cell: (row: DataRow) => (
            <Text typo="headline-small">{row.ability}</Text>
          ),
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
          name: 'ability',
          cell: (row: DataRow) => (
            <Text typo="headline-small">{row.ability}</Text>
          ),
        },
        {
          name: 'evolves',
          cell: (row: DataRow) => (
            <Tooltip content="This pokemon evolves" position="top">
              <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
            </Tooltip>
          ),
        },
      ]}
      data={data}
      headerColor="mascarpone"
      rowColor="matcha"
      fixedHeader={false}
      rowActions={[
        {
          genericButton: {
            children: 'generic button',
            primary: true,
            smallButton: true,
          },
          onClick: () => alert('this onClick is working'),
          showCondition: (row: DataRow) => row.id === 7,
        },
        {
          iconButton: {
            render: 'car',
            backgroundColor: 'coconut',
            size: 36,
          },
          onClick: () => alert('this onClick is working'),
          showCondition: (row: DataRow) => row.id === 1,
        },
        {
          label: <Text typo="hero-alternate">text</Text>,
          onClick: () => alert('this onClick is working'),
          showCondition: (row: DataRow) => row.id === 4,
        },
      ]}
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
            rowActions={[
              {
                genericButton: {
                  children: 'generic button',
                  primary: true,
                  smallButton: true,
                },
                onClick: () => alert('this onClick is working'),
                showCondition: (row: DataRow) => row.id === 7,
              },
              {
                iconButton: {
                  render: 'car',
                  backgroundColor: 'coconut',
                  size: 36,
                },
                onClick: () => alert('this onClick is working'),
                showCondition: (row: DataRow) => row.id === 1,
              },
              {
                label: <Text typo="hero-alternate">text</Text>,
                onClick: () => alert('this onClick is working'),
                showCondition: (row: DataRow) => row.id === 4,
              },
            ]}
          />
        )
      })
    },
  },
  rowColor: 'custard',
  headerColor: 'mascarpone',
  rowActions: [
    {
      genericButton: {
        children: 'generic button',
        primary: true,
        smallButton: true,
      },
      onClick: () => alert('this onClick is working'),
      showCondition: (row: DataRow) => row.id === 7,
    },
    {
      iconButton: {
        render: 'car',
        backgroundColor: 'coconut',
        size: 36,
      },
      onClick: () => alert('this onClick is working'),
      showCondition: (row: DataRow) => row.id === 1,
    },
    {
      label: <Text typo="hero-alternate">text</Text>,
      onClick: () => alert('this onClick is working'),
      showCondition: (row: DataRow) => row.id === 4,
    },
  ],
}
