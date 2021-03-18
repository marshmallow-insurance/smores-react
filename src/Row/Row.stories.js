import React from 'react'
import { Row } from '../Row'

export default {
  title: 'Row',
  conmponent: Row,
}

const Template = (args) => <Row {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: 'info',
  heading: 'A lovely heading',
  subHeading: 'The quick brown fox jumps over the lazy dog',
  caret: true,
  type: 'curved',
  borderTop: true,
  borderBottom: true,
}

export const NoIcon = Template.bind({})

NoIcon.args = {
  heading: 'A lovely heading',
  subHeading: 'A row without an Icon',
}

export const NoSubheading = Template.bind({})

NoSubheading.args = {
  heading: 'A lovely heading without a subheading',
  icon: 'info',
}

export const NoCaret = Template.bind({})

NoCaret.args = {
  heading: 'A lovely heading',
  subHeading: 'A row without a caret',
  icon: 'info',
  caret: false,
}

export const First = Template.bind({})

First.args = {
  heading: 'The first row',
  subHeading: 'A first row with curved corners at the top and no bottom border',
  type: 'first',
  borderBottom: false,
}

export const Middle = Template.bind({})

Middle.args = {
  heading: 'A middle row',
  subHeading: `A row with angular corners to go between 'first' and 'last' rows`,
}

export const Last = Template.bind({})

Last.args = {
  heading: 'The last row',
  subHeading: 'A last row with curved corners at the bottom and no top border',
  type: 'last',
  borderTop: false,
}

export const Curved = Template.bind({})

Curved.args = {
  heading: 'A curved row',
  type: 'curved',
  subHeading: 'A curved row with a border radius of 8px on all corners',
}
