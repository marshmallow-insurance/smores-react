import React from 'react'
import { Container } from './Container'
import { ValueToggle, ValueToggleProps } from '../ValueToggle'

export default {
  title: 'ValueToggle',
  component: ValueToggle,
}

const Template = <T,>(props: ValueToggleProps<T>) => <Container {...props} />

export const Default = Template.bind({})

Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2', tag: 'tag 2' },
  ],
  value: 'option1',
  showTag: false,
}

export const Custom = Template.bind({})

Custom.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2', tag: 'tag 2' },
    { label: 'Option 3', value: 'option3', tag: 'tag 3', isDisabled: true },
  ],
  value: 'option2',
  showTag: true,
  toggleColor: 'cream',
  backgroundColor: 'marshmallowPink',
  textColor: 'cream',
  selectedTextColor: 'liquorice',
  tagColor: 'liquorice',
  tagTextColor: 'cream',
  tagBorderColor: 'marshmallowPink',
}
