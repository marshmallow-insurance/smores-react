import React from 'react'

import { Button, ButtonProps } from './Button'
import { InteractivePlayground } from './InteractivePlayground'
import { CollectionPage } from './Collection'

export default {
  title: 'Button',
  component: Button,
  argTypes: { handleClick: { action: 'clicked' } },
}

const Template = (props: ButtonProps) => <Button {...props}>Get started</Button>

const InteractivePlaygroundTemplate = (props: ButtonProps) => (
  <InteractivePlayground {...props} />
)

export const Playground = Template.bind({})

Playground.args = {
  primary: true,
  secondary: false,
  fallback: false,
  disabled: false,
  loading: false,
  icon: '',
}

export const Interactive = InteractivePlaygroundTemplate.bind({})
export const Collection = CollectionPage.bind({})

export const ForcedWidth = Template.bind({})

ForcedWidth.args = {
  primary: true,
  forcedWidth: '300px',
}
