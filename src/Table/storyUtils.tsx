import React from 'react'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { Text } from '../Text'
import { Tooltip } from '../Tooltip'
import { RowAction } from './types'

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
    id: 27,
    name: 'Sandshrew',
    type: 'Ground',
    ability: 'Sand Veil',
    evolves: true,
  },
  {
    id: 29,
    name: 'Nidoran♀',
    type: 'Poison',
    ability: 'Poison Point',
    evolves: true,
  },
  {
    id: 32,
    name: 'Nidoran♂',
    type: 'Poison',
    ability: 'Poison Point',
    evolves: true,
  },
  {
    id: 35,
    name: 'Clefairy',
    type: 'Fairy',
    ability: 'Magic Guard',
    evolves: true,
  },
  {
    id: 37,
    name: 'Vulpix',
    type: 'Fire',
    ability: 'Flash Fire',
    evolves: true,
  },
  {
    id: 39,
    name: 'Jigglypuff',
    type: 'Normal/Fairy',
    ability: 'Cute Charm',
    evolves: true,
  },
  {
    id: 43,
    name: 'Oddish',
    type: 'Grass/Poison',
    ability: 'Chlorophyll',
    evolves: true,
  },
  {
    id: 46,
    name: 'Paras',
    type: 'Bug/Grass',
    ability: 'Dry Skin',
    evolves: true,
  },
  {
    id: 48,
    name: 'Venonat',
    type: 'Bug/Poison',
    ability: 'Compound Eyes',
    evolves: true,
  },
  {
    id: 50,
    name: 'Diglett',
    type: 'Ground',
    ability: 'Sand Force',
    evolves: true,
  },
  {
    id: 52,
    name: 'Meowth',
    type: 'Normal',
    ability: 'Pickup',
    evolves: true,
  },
  {
    id: 54,
    name: 'Psyduck',
    type: 'Water',
    ability: 'Cloud Nine',
    evolves: true,
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
  {
    iconButton: {
      render: 'car',
      backgroundColor: 'coconut',
      size: 36,
    },
    onClick: () => exampleOnClick('car icon'),
    showCondition: (row: DataRow) => row.id === 1,
  },
  {
    label: <Text typo="hero-alternate">text</Text>,
    onClick: () => exampleOnClick('hero-alternate text'),
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
    minWidth: '150px',
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

export const columnsV2 = [
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
]
