import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box } from '../../Box'
import { Text } from '../../Text'
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
  args: {
    notFoundComponent: () => <div>Custom not found component</div>,
  },
}

const allFuzzySearchOptions = {
  findAllMatches: true,
  minMatchCharLength: 2,
  location: 0,
  threshold: 0.45,
  distance: 55,
}

export const Occupations: Story = {
  args: {
    enableFuzzySearch: true,
    assistiveText: 'I am assisting',
    fuzzySearchOptions: allFuzzySearchOptions,
    clearSearch: true,
    searchList: occupations.map(({ name, value }) => ({ label: name, value })),
    onFound: (searchTerm: string) => console.log(`selected ${searchTerm}`),
    notFoundComponent: (searchTerm: string) => (
      <Box>
        <Text typo="headline-regular">No matches for {`'${searchTerm}'`}.</Text>
        <Text mt="8px">
          {`It might be listed differently. For example, if you're a "PR
          Consultant", try "Public Relations Officer" instead.`}
        </Text>
      </Box>
    ),
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
    notFoundComponent: (searchTerm: string) => (
      <Box>
        <Text typo="headline-regular">No matches for {`'${searchTerm}'`}.</Text>
        <Text mt="8px">
          {`Sometimes we use different terms. If you're in "Medical services," try "Healthcare."`}
        </Text>
      </Box>
    ),
  },
  argTypes: {
    ...Occupations.argTypes,
  },
}
