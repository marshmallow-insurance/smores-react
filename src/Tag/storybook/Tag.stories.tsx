import React from 'react'
import { Tag, TagProps } from '../Tag'
import { CollectionPage } from './Collection'

export default {
  title: 'Tag',
  component: Tag,
}

const Template = (props: TagProps) => <Tag {...props} />

export const Default = Template.bind({})

Default.args = {
  label: 'This is a tag',
  bgColor: 'feijoa',
  borderColor: 'feijoa',
  color: 'cream',
}

Default.argTypes = {
  theme: { table: { disable: true } },
  as: { table: { disable: true } },
  forwardedAs: { table: { disable: true } },
}

export const Collection = CollectionPage.bind({})
