import React from 'react'
import { Chip } from './Chip'

export default {
  title: 'Chip',
  component: Chip,
  argTypes: { handleClick: { action: 'clicked' } },
}

const Template = (args) => <Chip {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  children: 'Add',
  icon: 'plus',
}

export const Secondary = Template.bind({})

Secondary.args = {
  secondary: true,
  children: 'Added',
  icon: 'tick',
}

export const Loading = Template.bind({})

Loading.args = {
  loading: true,
}

export const SecondaryDisabled = Template.bind({})

SecondaryDisabled.args = {
  secondary: true,
  disabled: true,
  loading: false,
  children: 'Add',
  icon: 'plus',
}
