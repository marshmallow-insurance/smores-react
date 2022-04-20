import React from 'react'

import { Button, ButtonProps } from './Button'
import { InteractivePlayground } from './InteractivePlayground'

export default {
  title: 'Button',
  component: Button,
  argTypes: { handleClick: { action: 'clicked' } },
}

const Template = (props: ButtonProps) => <Button {...props}>Get started</Button>

const InteractivePlaygroundTemplate = (props: ButtonProps) => (
  <InteractivePlayground {...props} />
)

export const Interactive = InteractivePlaygroundTemplate.bind({})

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  'data-testid': 'test',
  'aria-label': 'primary-button',
}

export const PrimaryDisabled = Template.bind({})

PrimaryDisabled.args = {
  primary: true,
  disabled: true,
  'aria-disabled': 'true',
}

export const PrimaryLoading = Template.bind({})

PrimaryLoading.args = {
  primary: true,
  loading: true,
}

export const PrimaryForcedWidth = Template.bind({})

PrimaryForcedWidth.args = {
  primary: true,
  forcedWidth: '300px',
}

export const Secondary = Template.bind({})

Secondary.args = {
  secondary: true,
}

export const SecondaryDisabled = Template.bind({})

SecondaryDisabled.args = {
  secondary: true,
  disabled: true,
}

export const SecondaryLoading = Template.bind({})

SecondaryLoading.args = {
  secondary: true,
  loading: true,
}

export const Tertiary = Template.bind({})

Tertiary.args = {
  tertiary: true,
}

export const TertiaryDisabled = Template.bind({})

TertiaryDisabled.args = {
  tertiary: true,
  disabled: true,
}

export const TertiaryLoading = Template.bind({})

TertiaryLoading.args = {
  tertiary: true,
  loading: true,
}

export const Icon = Template.bind({})

Icon.args = {
  primary: true,
  icon: 'info',
}
