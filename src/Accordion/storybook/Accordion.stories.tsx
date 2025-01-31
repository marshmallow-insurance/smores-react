import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box } from '../../Box'
import { Accordion } from '../Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  args: {
    title: 'How it works',
    children: 'Lots of brilliant information about this beautiful component',
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    title: 'How it works',
    children: 'Lots of brilliant information about this beautiful component',
  },
}

export const FilledBackground: Story = {
  args: {
    title: 'How it works',
    children: 'Lots of brilliant information about this beautiful component',
    filledBackground: true,
  },
}

export const FullBorder: Story = {
  args: {
    title: 'How it works',
    children: 'Lots of brilliant information about this beautiful component',
    fullBorder: true,
  },
}

export const BorderTop: Story = {
  args: {
    title: 'How it works',
    children: 'Lots of brilliant information about this beautiful component',
    borderTop: true,
  },
}

export const Stacked: Story = {
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Box flex direction="column">
      <Accordion {...args} {...Default.args} />
      <Accordion {...args} {...Default.args} />
      <Accordion {...args} {...Default.args} />
    </Box>
  ),
}
