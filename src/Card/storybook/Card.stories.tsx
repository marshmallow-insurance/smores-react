import React from 'react'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Link } from '../../Link'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { Card, CardProps } from '../Card'
import placeHolderSvg from './placeHolderImage.svg?react'

export default {
  title: 'Card',
  component: Card,
}

const Template = (props: CardProps) => <Card {...props} />

export const Default = Template.bind({})

Default.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
}

export const DefaultFallback = Template.bind({})

DefaultFallback.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
  fallbackStyle: true,
}

export const GenericChildCard = Template.bind({})

GenericChildCard.args = {
  children: <Text tag="h1">Children here</Text>,
}

export const GenericCard = Template.bind({})

GenericCard.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
}

export const CardWithOnClickAction = Template.bind({})

CardWithOnClickAction.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
  cardOnClickAction: () => alert('clicked'),
}

export const CardWithRightAction = Template.bind({})

CardWithRightAction.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
  rightAction: <Icon render="caret" color="marzipan" rotate={-90} />,
}

export const CardWithRightActionLink = Template.bind({})

CardWithRightActionLink.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
  rightAction: (
    <Link href="" typo="regular">
      Action
    </Link>
  ),
}

export const CardWithButton = Template.bind({})

CardWithButton.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
  buttonAction: (
    <Button primary={true} forcedWidth="100%">
      Default
    </Button>
  ),
}

export const CardWithImage = Template.bind({})

CardWithImage.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
  visualHeight: '120px',
  visual: placeHolderSvg,
}

export const CardWithImageWithTag = Template.bind({})

CardWithImageWithTag.args = {
  title: 'Card title',
  body: 'Card description',
  leadingIcon: 'copy',
  maxWidth: '300px',
  visualHeight: '180px',
  tag: <Tag label="default" bgColor="feijoa" color="cream" />,
  buttonAction: (
    <Button primary={true} forcedWidth="100%">
      Default
    </Button>
  ),
  visual: placeHolderSvg,
}
