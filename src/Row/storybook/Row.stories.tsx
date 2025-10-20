import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Row } from '../Row'

const meta: Meta<typeof Row> = {
  title: 'Row',
  component: Row,
  argTypes: { handleClick: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Row>

export const Default: Story = {
  args: {
    iconLeft: 'info',
    iconLeftColor: 'color.icon.base',
    iconRight: 'caret',
    iconRightColor: 'color.icon.subtle',
    heading: 'A lovely heading',
    subHeading: 'The quick brown fox jumps over the lazy dog',
    type: 'curved',
    borderTop: true,
    borderBottom: true,
  },
}

export const NoIcons: Story = {
  args: {
    heading: 'A lovely heading',
    subHeading: 'A row without an IconLeft or IconRight',
  },
}

export const NoSubheading: Story = {
  args: {
    heading: 'A lovely heading without a subheading',
    iconLeft: 'info',
    iconRight: 'download',
  },
}

export const BoldHeading: Story = {
  args: {
    heading: 'A row with a bold heading',
    subHeading: `A row with a heading that has a font weight of 500`,
    boldHeading: true,
  },
}

export const First: Story = {
  args: {
    heading: 'The first row',
    subHeading:
      'A first row with curved corners at the top and no bottom border',
    type: 'first',
    borderBottom: false,
  },
}

export const Middle: Story = {
  args: {
    heading: 'A middle row',
    subHeading: `A row with angular corners to go between 'first' and 'last' rows`,
  },
}

export const Last: Story = {
  args: {
    heading: 'The last row',
    subHeading:
      'A last row with curved corners at the bottom and no top border',
    type: 'last',
    borderTop: false,
  },
}

export const Curved: Story = {
  args: {
    heading: 'A curved row',
    type: 'curved',
    subHeading: 'A curved row with a border radius of 8px on all corners',
  },
}
