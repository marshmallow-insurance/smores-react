import React from 'react'
import { Divider, DividerProps } from './Divider'

export default {
  title: 'Divider',
  component: Divider,
}

const Template = (args: DividerProps) => <Divider {...args} />

export const Default = Template.bind({})

Default.args = {}
