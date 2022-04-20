import React from 'react'
import { Card, CardProps } from './Card'
import { Text } from '../Text'

export default {
  title: 'Card',
  component: Card,
}

const Template = (props: CardProps) => (
  <Card {...props}>
    <Text tag="h1">Card with default padding</Text>
  </Card>
)

export const Default = Template.bind({})

export const MaxWidth = Template.bind({})

MaxWidth.args = {
  maxWidth: '250px',
}

export const NarrowPadding = Template.bind({})

NarrowPadding.args = {
  narrow: true,
}

export const WidePadding = Template.bind({})

WidePadding.args = {
  wide: true,
}

export const Margins = Template.bind({})

Margins.args = {
  marginX: '50px',
  marginY: '30px',
}
