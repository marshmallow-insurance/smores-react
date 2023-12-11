import React, { useState } from 'react'
import { RadioGroup, RadioGroupProps } from './RadioGroup'
import visualSvg from './assets/radio-visual.svg?react'

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
  displayType: 'normal',
}

const InteractiveStory = (props: RadioGroupProps<string>) => {
  const [value, setValue] = useState('')

  return (
    <RadioGroup
      {...props}
      onChange={(nextValue) => setValue(nextValue)}
      value={value}
    />
  )
}

export const Interactive = InteractiveStory.bind({})

Interactive.args = defaultArgs

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

export const WithBodyCopy = Template.bind({})

WithBodyCopy.args = {
  ...defaultArgs,
  displayType: 'vertical-card',
  options: options.map((option) => ({
    ...option,
    bodyCopy:
      'E.g. shopping, travel and driving to see friends. Does not include travelling to and from work.',
  })),
}

export const WithError = Template.bind({})

WithError.args = {
  ...defaultArgs,
  error: true,
  errorMsg: 'something',
  displayType: 'horizontal-card',
}

export const WithVisual = Template.bind({})

WithVisual.args = {
  ...defaultArgs,
  options: options.map((option) => ({ ...option, visual: visualSvg })),
  displayType: 'horizontal-card',
}

export const Withicon = Template.bind({})

Withicon.args = {
  ...defaultArgs,
  options: options.map((option) => ({
    ...option,
    icon: 'card',
    iconPosition: 'center',
  })),
  displayType: 'horizontal-card',
}
