import React from 'react'
import { RadioGroup, RadioGroupProps } from './RadioGroup'

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: { onChange: { action: 'clicked' } },
}

const options = [
  { label: 'Social', value: 'social' },
  { label: 'Social and commuting', value: 'social/commuting' },
  {
    label: 'All the above, and I drive for work',
    value: 'social/commuting/work',
  },
  { label: 'It’s a commercial vehicle', value: 'commercial' },
]

const defaultArgs: RadioGroupProps = {
  label: 'What do you use it for?',
  onChange: (value: string) => console.log(value),
  value: options[0].value,
  options,
}

const Template = (props: RadioGroupProps) => <RadioGroup {...props} />

export const Default = Template.bind({})

Default.args = defaultArgs

export const Vertical = Template.bind({})

Vertical.args = {
  ...defaultArgs,
  displayType: 'vertical-card',
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  ...defaultArgs,
  displayType: 'horizontal-card',
}

export const WithError = Template.bind({})

WithError.args = {
  ...defaultArgs,
  error: true,
  errorMsg: 'something',
  displayType: 'horizontal-card',
}
