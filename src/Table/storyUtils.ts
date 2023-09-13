export interface DataRow {
  id: number
  name: string
  type: string
  ability: string
  evolves: boolean
  subRowData?: DataRow[]
}

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
