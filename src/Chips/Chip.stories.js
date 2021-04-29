import React from 'react'
import { Chip } from './Chip'

export default {
  title: 'Chip',
  component: Chip,
  argTypes: { handleClick: { action: 'clicked' } },
}

const Template = (args) => <Chip {...args}>Add</Chip>

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
