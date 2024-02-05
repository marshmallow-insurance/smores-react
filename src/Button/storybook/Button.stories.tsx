import React from 'react'

import { Button, ButtonProps } from '../Button'
import { CollectionPage } from './Collection'
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

export const Playground = Template.bind({})

Playground.args = {
  primary: true,
  secondary: false,
  fallbackStyle: false,
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
