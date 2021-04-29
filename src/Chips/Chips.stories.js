import React from 'react'
import { Chips } from './Chips'

export default {
  title: 'Chips',
  component: Chips,
  argTypes: { handleClick: { action: 'clicked' } },
}

const Template = (args) => <Chips {...args}>Add</Chips>

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
}

export const Secondary = Template.bind({})

Secondary.args = {
  secondary: true,
}

export const Icon = Template.bind({})

Icon.args = {
  primary: true,
  icon: 'tick',
}
