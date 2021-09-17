import React from 'react'
import { SearchInput } from './SearchInput'
import { Container, list } from './Container'

export default {
  title: 'Search Input',
  component: SearchInput,
}

const Template = (args) => <Container {...args} />

const SearchInputWithOutline = () => (
  <SearchInput
    id="days"
    label="Days"
    placeholder="Search days"
    searchList={list}
    onFound={() => {}}
    showCaret
    outlined
  />
)

export const Default = Template.bind({})

export const WithBorder = SearchInputWithOutline.bind({})
