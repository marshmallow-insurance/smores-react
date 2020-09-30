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
