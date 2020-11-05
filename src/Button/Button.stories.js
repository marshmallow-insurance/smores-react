import React from 'react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { handleClick: { action: 'clicked' } },
}

const Template = (args) => <Button {...args}>Get started</Button>

export const Default = Template.bind({})

Default.args = {
  color: 'blue',
}

export const Coloured = Template.bind({})

Coloured.args = {
  color: 'green',
}

export const Inverted = Template.bind({})

Inverted.args = {
  inverted: true,
}
export const Outlined = Template.bind({})

Outlined.args = {
  outlined: true,
}

export const Block = Template.bind({})

Block.args = {
  block: true,
}

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
}

export const PrimaryDisabled = Template.bind({})

PrimaryDisabled.args = {
  primary: true,
  disabled: true
}

export const PrimaryLoading = Template.bind({})

PrimaryLoading.args = {
  primary: true,
  loading: true
}

export const Secondary = Template.bind({})

Secondary.args = {
  secondary: true
}

export const SecondaryDisabled = Template.bind({})

SecondaryDisabled.args = {
  secondary: true,
  disabled: true
}

export const SecondaryLoading = Template.bind({})

SecondaryLoading.args = {
  secondary: true,
  loading: true
}

export const Tertiary = Template.bind({})

Tertiary.args = {
  tertiary: true
}

export const TertiaryDisabled = Template.bind({})

TertiaryDisabled.args = {
  tertiary: true,
  disabled: true
}

export const TertiaryLoading = Template.bind({})

TertiaryLoading.args = {
  tertiary: true,
  loading: true
}

export const Icon = Template.bind({})

Icon.args = {
  primary: true,
  icon: 'info'
}