import { Meta, StoryObj } from '@storybook/react-vite'
import { colourOptions } from '../../utils/storybookHelpers/colourOptions'
import { Divider } from '../Divider'

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: colourOptions,
    },
  },
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {},
}
