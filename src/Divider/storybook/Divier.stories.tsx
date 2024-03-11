import React from 'react'
import { Divider, DividerProps } from '../Divider'

export default {
  title: 'Divider',
  component: Divider,
}

const Template = (props: DividerProps) => <Divider {...props} />

export const Default = Template.bind({})

Default.args = {}
