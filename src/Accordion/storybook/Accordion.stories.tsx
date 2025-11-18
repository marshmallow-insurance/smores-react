import { Meta, StoryObj } from '@storybook/react'
import { Box } from '../../Box'
import { Accordion } from '../Accordion'

const colourOptions = [
  'color.surface.base.000',
  'color.surface.base.100',
  'color.surface.base.300',
  'color.illustration.neutral.300',
]

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  args: {
    title: 'How it works',
    children: 'Lots of brilliant information about this beautiful component',
  },
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: colourOptions,
    },
    borderColor: {
      control: 'select',
      options: colourOptions,
    },
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
