import React from 'react'
import { SearchInput, SearchInputProps } from './SearchInput'
import { Container } from './Container'

export default {
  title: 'Search Input',
  component: SearchInput,
}

const Template = (props: SearchInputProps) => <Container {...props} />

export const Default = Template.bind({})

export const ShowIcon = Template.bind({})

ShowIcon.args = {
  showIcon: true,
}
