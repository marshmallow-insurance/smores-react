import React from 'react'
import { Box } from '../../Box'
import { SearchInput, SearchInputProps } from '../SearchInput'
import { Container } from './Container'

export default {
  title: 'Search Input',
  component: SearchInput,
}

const Template = (props: SearchInputProps) => (
  <Box height="500px" width="100%">
    <Container {...props} />
  </Box>
)

export const Default = Template.bind({})

export const ShowIcon = Template.bind({})

ShowIcon.args = {
  showIcon: true,
}
