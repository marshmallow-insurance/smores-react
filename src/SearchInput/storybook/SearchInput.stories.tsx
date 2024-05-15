import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SearchInput } from '../SearchInput'
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
