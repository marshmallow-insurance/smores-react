import { Meta, StoryObj } from '@storybook/react-vite'
import { colourOptions } from '../../utils/storybookHelpers/colourOptions'
import { IconStrict } from '../IconStrict'

const meta: Meta<typeof IconStrict> = {
  title: 'IconStrict',
  component: IconStrict,
  argTypes: {
    handleClick: { action: 'clicked' },
    backgroundColor: { control: 'select', options: colourOptions },
    iconColor: { control: 'select', options: colourOptions },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof IconStrict>

export const Default: Story = {
  args: {
    size: 48,
    render: 'info',
    backgroundColor: 'color.surface.base.200',
  },
}

export const AlternateColours: Story = {
  args: {
    size: 48,
    render: 'info',
    iconColor: 'color.surface.base.000',
    backgroundColor: 'color.surface.brand.400',
  },
}

export const WithoutBackground: Story = {
  args: {
    size: 48,
    render: 'info',
  },
}

export const WithClickHandler: Story = {
  args: {
    size: 48,
    render: 'info',
    handleClick: () => alert('clicked'),
    backgroundColor: 'color.surface.base.200',
  },
}
