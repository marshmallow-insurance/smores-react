import React from 'react'
import { Tag } from './Tag'

export default {
  title: 'Tag',
  component: Tag,
}

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'This is a tag',
  bgColor: 'success',
  borderColor: 'success',
  color: 'white',
}

Default.argTypes = {
  theme: { table: { disable: true } },
  as: { table: { disable: true } },
  forwardedAs: { table: { disable: true } },
}
