import React from 'react'
import { Loader, LoaderProps } from './Loader'

export default {
  title: 'Loader',
  component: Loader,
}

const Template = (props: LoaderProps) => <Loader {...props} />

export const Default = Template.bind({})

Default.args = {
  height: 32,
}

export const BigAndBlue = Template.bind({})

BigAndBlue.args = {
  height: 54,
  color: 'liquorice',
}
