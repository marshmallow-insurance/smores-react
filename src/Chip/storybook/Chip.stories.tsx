import { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from '../Chip'

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
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

type Story = StoryObj<typeof Chip>

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Add',
    icon: 'plus',
  },
}

export const Secondary: Story = {
  args: {
    secondary: true,
    children: 'Added',
    icon: 'tick',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    primary: true,
  },
}

export const SecondaryDisabled: Story = {
  args: {
    secondary: true,
    disabled: true,
    loading: false,
    children: 'Add',
    icon: 'plus',
  },
}
