import { Meta, StoryObj } from '@storybook/react-vite'
import { LabelledText } from '../LabelledText'

const meta: Meta<typeof LabelledText> = {
  title: 'LabelledText',
  component: LabelledText,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof LabelledText>

export const Default: Story = {
  args: {
    label: 'Name',
  },
  render: (args) => <LabelledText {...args}>Hideo Kojima</LabelledText>,
}
