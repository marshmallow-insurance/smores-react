import React from 'react'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { Tooltip } from '../../Tooltip'
import { RowAction } from '../types'

export interface DataRow {
  id: number
  name: string
  type: string
  ability: string
  evolves: boolean
  subRowData?: DataRow[]
}

const exampleOnClick = (element: string) =>
  alert(`onClick from ${element} is working`)

export const data: DataRow[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass/Poison',
    ability: 'Overgrow',
    evolves: true,
    subRowData: [
      {
        id: 1,
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        ability: 'Overgrow',
        evolves: true,
      },
      {
        id: 4,
        name: 'Charmander',
        type: 'Fire',
        ability: 'Blaze',
        evolves: true,
      },
    ],
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    ability: 'Blaze',
    evolves: true,
  },
  {
    id: 7,
    name: 'Squirtle',
    type: 'Water',
    ability: 'Torrent',
    evolves: true,
    subRowData: [
      {
        id: 1,
        name: 'Ivysaur',
        type: 'Grass/Poison',
        ability: 'Overgrow',
        evolves: true,
      },
      {
        id: 4,
        name: 'Charmander',
        type: 'Fire',
        ability: 'Blaze',
        evolves: true,
      },
    ],
  },
  {
    id: 10,
    name: 'Caterpie',
    type: 'Bug',
    ability: 'Shield Dust',
    evolves: true,
  },
  {
    id: 13,
    name: 'Weedle',
    type: 'Bug/Poison',
    ability: 'Shield Dust',
    evolves: true,
  },
  {
    id: 16,
    name: 'Pidgey',
    type: 'Normal/Flying',
    ability: 'Tangled Feet',
    evolves: true,
  },
  {
    id: 19,
    name: 'Rattata',
    type: 'Normal',
    ability: 'Run Away',
    evolves: true,
  },
  {
    id: 23,
    name: 'Ekans',
    type: 'Poison',
    ability: 'Intimidate',
    evolves: true,
  },
  {
    id: 40,
    name: 'Wigglytuff',
    type: 'Normal/Fairy',
    ability: 'Cute Charm',
    evolves: false,
  },
  {
    id: 30,
    name: 'Nidorina',
    type: 'Poison',
    ability: 'Poison Point',
    evolves: false,
  },
  {
    id: 33,
    name: 'Nidorino',
    type: 'Poison',
    ability: 'Poison Point',
    evolves: false,
  },
  {
    id: 36,
    name: 'Clefable',
    type: 'Fairy',
    ability: 'Magic Guard',
    evolves: false,
  },
  {
    id: 39,
    name: 'Jigglypuff',
    type: 'Normal/Fairy',
    ability: 'Cute Charm',
    evolves: false,
  },
  {
    id: 42,
    name: 'Golbat',
    type: 'Poison/Flying',
    ability: 'Inner Focus',
    evolves: false,
  },
  {
    id: 45,
    name: 'Vileplume',
    type: 'Grass/Poison',
    ability: 'Chlorophyll',
    evolves: false,
  },
  {
    id: 48,
    name: 'Venonat',
    type: 'Bug/Poison',
    ability: 'Compound Eyes',
    evolves: true,
  },
  {
    id: 51,
    name: 'Dugtrio',
    type: 'Ground',
    ability: 'Sand Veil',
    evolves: false,
  },
]

export const rowActions = [
  {
    genericButton: {
      children: 'generic button',
      primary: true,
      smallButton: true,
    },
    onClick: () => exampleOnClick('generic button'),
    showCondition: (row: DataRow) => row.id === 7,
  },
  // TODO: Buttons below need to change colour when IconStrict is updated
  {
    iconButton: {
      render: 'alert',
      backgroundColor: 'mascarpone',
      size: 36,
      tooltipText: 'mascarpone tooltip',
    },
    onClick: () => exampleOnClick('info icon'),
    showCondition: (row: DataRow) => row.id === 1,
  },
  {
    iconButton: {
      render: 'info',
      backgroundColor: 'peanut',
      size: 36,
    },
    onClick: () => exampleOnClick('info icon'),
    showCondition: (row: DataRow) => row.id === 1,
  },
  {
    label: (
      <Tag
        bgColor="color.surface.brand.300"
        borderColor="color.surface.brand.300"
        color="color.text.base"
        label="anything"
      />
    ),
    onClick: () => exampleOnClick('tag text'),
    showCondition: (row: DataRow) => row.id === 4,
  },
] as RowAction<DataRow>[]

export const columns = [
  {
    name: 'id',
    cell: (row: DataRow) => row.id,
    minWidth: '100px',
  },
  {
    name: (
      <Button
        primary
        smallButton
        onClick={() => exampleOnClick('column button')}
      >
        name btn
      </Button>
    ),
    cell: (row: DataRow) => row.name,
    minWidth: '100px',
  },
  {
    name: (
      <Tag
        bgColor="color.surface.brand.300"
        borderColor="color.surface.brand.300"
        color="color.text.base"
        label="ReactNode Header"
      />
    ),
    cell: (row: DataRow) => (
      <Tag
        bgColor="color.surface.base.100"
        borderColor="color.surface.base.100"
        color="color.text.base"
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
      <Button textBtn={row.evolves}>{row.evolves.toString()}</Button>
    ),
    minWidth: '100px',
    maxWidth: '100px',
  },
  {
    name: 'e.g1',
    cell: (row: DataRow) => (
      <Box flex justifyContent="flex-start">
        <Tooltip
          content={<Text color="color.surface.base.000">{row.ability}</Text>}
          position="top"
          variant="fallback"
          underline
        >
          what ability?
        </Tooltip>
      </Box>
    ),
    minWidth: '150px',
  },
  {
    name: 'e.g2',
    cell: () => 'example data2',
    minWidth: '150px',
  },
  {
    name: 'e.g3',
    cell: () => 'example data3',
    minWidth: '150px',
  },
  {
    name: 'e.g4',
    cell: () => 'really super long text that should be cut off',
    maxWidth: '200px',
    truncateContent: true,
  },
  {
    name: 'e.g5',
    cell: () => 'example data5',
    minWidth: '150px',
  },
]

export const columnsV2 = [
  {
    name: 'name',
    cell: (row: DataRow) => <Text typo="headline-small">{row.name}</Text>,
  },
  {
    name: 'evolves',
    cell: () => <Icon render="plus-circle" size={16} />,
  },
  {
    name: 'ability',
    cell: (row: DataRow) => <Text typo="headline-small">{row.ability}</Text>,
  },
  {
    name: 'e.g1',
    cell: () => (
      <Button primary smallButton onClick={() => exampleOnClick('e.g1 button')}>
        e.g1
      </Button>
    ),
  },
  {
    name: 'e.g2',
    cell: () => 'example data2',
  },
  {
    name: 'e.g3',
    cell: () => 'example data3',
  },
]
