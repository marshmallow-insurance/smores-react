import { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from '../../Icon'
import { IconWrapper } from '../IconWrapper'

const meta: Meta<typeof IconWrapper> = {
  title: 'IconWrapper',
  component: IconWrapper,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof IconWrapper>

export const Default: Story = {
  args: {
    render: 'included',
    size: 16,
    t: '0',
    r: '0',
    b: '0',
    l: '0',
  },
  render: (args) => (
    <IconWrapper {...args}>
      <Icon render="wheel-flat" />
    </IconWrapper>
  ),
}

export const Excluded: Story = {
  args: {
    render: 'excluded',
    l: '0',
    t: '0',
  },
  render: (args) => (
    <IconWrapper {...args}>
      <Icon render="wheel-flat" />
    </IconWrapper>
  ),
}

export const BottomRight: Story = {
  args: {
    r: '0',
    b: '0',
  },
  render: (args) => (
    <IconWrapper {...args}>
      <Icon render="wheel-flat" />
    </IconWrapper>
  ),
}

export const BottomLeft: Story = {
  args: {
    l: '0',
    b: '0',
  },
  render: (args) => (
    <IconWrapper {...args}>
      <Icon render="wheel-flat" />
    </IconWrapper>
  ),
}

export const TopRight: Story = {
  args: {
    r: '0',
    t: '0',
  },
  render: (args) => (
    <IconWrapper {...args}>
      <Icon render="wheel-flat" />
    </IconWrapper>
  ),
}

export const TopLeft: Story = {
  args: {
    l: '0',
    t: '0',
  },
  render: (args) => (
    <IconWrapper {...args}>
      <Icon render="wheel-flat" />
    </IconWrapper>
  ),
}
