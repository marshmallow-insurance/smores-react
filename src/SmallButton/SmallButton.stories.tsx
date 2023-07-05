import React from 'react'

import { SmallButton } from './SmallButton'
import { ButtonProps } from '../Button/Button'
import { CollectionPage } from './Collection'

export default {
  title: 'SmallButton',
  component: SmallButton,
  argTypes: { handleClick: { action: 'clicked' } },
}

const Template = (props: ButtonProps) => (
  <SmallButton {...props}>Click</SmallButton>
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

export const Collection = CollectionPage.bind({})
