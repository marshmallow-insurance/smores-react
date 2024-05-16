import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SearchInput } from '../SearchInput'
import { industries } from './industries'
import { occupations } from './occupations'
import { searchList } from './searchList'

type Story = StoryObj<typeof SearchInput>

const meta: Meta<typeof SearchInput> = {
  title: 'Search Input',
  component: SearchInput,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Search label',
    showIcon: false,
    renderAsTitle: false,
    resultsRelativePosition: false,
    resultsBorder: true,
    enableFuzzySearch: false,
    searchList: searchList,
    name: 'search_input',
    className: '',
    onNotFound: undefined,
    notFoundComponent: undefined,
  },
}

export default meta

export const ShowIcon: Story = { args: { showIcon: true } }

export const OnNotFoundFunction: Story = {
  args: {
    onNotFound: (searchTerm: string) =>
      alert(`Could not find value for ${searchTerm}`),
  },
}

export const NotFoundComponent: Story = {
  args: { notFoundComponent: <div>Custom not found component</div> },
}

const allFuzzySearchOptions = {
  isCaseSensitive: true,
  distance: 0,
  findAllMatches: true,
  ignoreLocation: true,
  ignoreFieldNorm: true,
  fieldNormWeight: 0,
  includeMatches: true,
  includeScore: true,
  keys: ['label'],
  location: 0,
  minMatchCharLength: 0,
  shouldSort: true,
  threshold: 0,
  useExtendedSearch: true,
}

export const Occupations: Story = {
  args: {
    enableFuzzySearch: true,
    fuzzySearchOptions: allFuzzySearchOptions,
    searchList: occupations.map(({ name, value }) => ({ label: name, value })),
  },
  argTypes: {
    searchList: { control: false },
    label: { control: false },
    renderAsTitle: { control: false },
    onBlur: { control: false },
    onFound: { control: false },
    onNotFound: { control: false },
    notFoundComponent: { control: false },
    name: { control: false },
    showIcon: { control: false },
    resultsRelativePosition: { control: false },
    resultsBorder: { control: false },
    enableFuzzySearch: { control: false },
    className: { control: false },
    fuzzySearchOptions: {
      control: 'object',
    },
  },
}

export const Industries: Story = {
  args: {
    ...Occupations.args,
    searchList: industries.map(({ name, value }) => ({ label: name, value })),
  },
  argTypes: {
    ...Occupations.argTypes,
  },
}
