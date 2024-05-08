import React from 'react'
import { Container } from './Container'
import { SegmentedControl, SegmentedControlProps } from '../SegmentedControl'

/**
 * ### How do I pass state to the `SegmentedControl` component?
 * We recommend pulling the state up to at least the component that renders `SegmentedControl` up to at least the component that renders `SegmentedControl`, this should make it easier to pass state to the `SegmentedControl` component
 */

export default {
  title: 'SegmentedControl',
  component: SegmentedControl,
}

const Template = <T,>(props: SegmentedControlProps<T>) => (
  <Container {...props} />
)

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
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2, tag: 'tag 2' },
    { label: 'Option 3', value: 3, tag: 'tag 3', isDisabled: true },
  ],
  value: 2,
  showTag: true,
  toggleColor: 'cream',
  backgroundColor: 'marshmallowPink',
  textColor: 'cream',
  selectedTextColor: 'liquorice',
  tagColor: 'liquorice',
  tagTextColor: 'cream',
  tagBorderColor: 'marshmallowPink',
}
