import React from 'react'
import { Button } from '../../Button'
import { Tag } from '../../Tag'
import { BrandCard, BrandCardProps } from '../BrandCard'
import placeHolderSvg from './placeHolderImage.svg'

export default {
  title: 'BrandCard',
  component: BrandCard,
}

const Template = (props: BrandCardProps) => <BrandCard {...props} />

export const Default = Template.bind({})

Default.args = {
  title: 'All about marshmallow miles',
  body: 'Puzzled by your driving score? Wondering about rewards? Here’s how it all works!',
  alignVisual: 'left',
  bgColor: 'macaroon',
  visualHeight: '200px',
  visual: placeHolderSvg,
}

export const BrandCardWithImageWithTag = Template.bind({})

BrandCardWithImageWithTag.args = {
  title: 'All about marshmallow miles',
  body: 'Puzzled by your driving score? Wondering about rewards? Here’s how it all works!',
  maxWidth: '350px',
  bgColor: 'matcha',
  visualHeight: '180px',
  tag: <Tag label="default tag" bgColor="fairyFloss" color="liquorice" />,
  buttonAction: <Button fallbackStyle>Tell me more</Button>,
  visual: placeHolderSvg,
}

export const BrandCardAlignImageRight = Template.bind({})

BrandCardAlignImageRight.args = {
  title: 'All about marshmallow miles',
  body: 'Puzzled by your driving score? Wondering about rewards? Here’s how it all works!',
  bgColor: 'matcha',
  alignVisual: 'right',
  visualHeight: '180px',
  buttonAction: <Button fallbackStyle>Tell me more</Button>,
  visual: placeHolderSvg,
}

export const BrandCardWithImageBelow = Template.bind({})

BrandCardWithImageBelow.args = {
  title: 'All about marshmallow miles',
  body: 'Puzzled by your driving score? Wondering about rewards? Here’s how it all works!',
  maxWidth: '350px',
  visualHeight: '180px',
  alignVisual: 'left',
  visualBottom: true,
  bgColor: 'peanut',
  tag: <Tag label="new" bgColor="fairyFloss" color="liquorice" />,
  buttonAction: <Button fallbackStyle>Tell me more</Button>,
  visual: placeHolderSvg,
}
