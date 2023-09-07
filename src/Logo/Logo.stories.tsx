import React from 'react'
import { CollectionPage } from './Collection'
import { Logo, LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
}

const Template = (props: LogoProps) => <Logo {...props} />

export const Default = Template.bind({})

export const ColorScheme1 = Template.bind({})

ColorScheme1.args = {
  type: 'positive1',
}

export const ColorScheme2 = Template.bind({})

ColorScheme2.args = {
  type: 'positive1',
}

export const ColorScheme3 = Template.bind({})

ColorScheme3.args = {
  type: 'positive2',
}

export const NoText = Template.bind({})

NoText.args = {
  type: 'positive1',
  showText: false,
}

export const Collection = CollectionPage.bind({})
