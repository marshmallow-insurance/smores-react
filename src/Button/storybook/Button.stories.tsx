import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { faArrowRight } from '@awesome.me/kit-46ca99185c/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'
import { CollectionPage } from './Collection'
import { InteractivePlayground } from './InteractivePlayground'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    //gives storybook the vi.mock fn() for easy mock implementations
    children: 'Button',
    handleClick: fn(),
    onClick: fn(),
    variant: 'primary',
    size: 'regular',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'neutral', 'tertiary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['regular', 'small'],
    },
    ...Object.fromEntries(
      [
        'primary',
        'secondary',
        'tertiary',
        'fallbackStyle',
        'smallButton',
        'textBtn',
      ].map((prop) => [
        prop,
        { control: false, table: { category: 'Deprecated' } },
      ]),
    ),
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button.innerText).toBe('Button')
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
    await expect(button).toHaveStyle(`background-color: #ff88c8`)
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(`background-color: #dad2c4`)
  },
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(`background-color: #ffffff`)
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(`background-color: rgba(0, 0, 0, 0)`)
    await expect(button).toHaveStyle(`text-decoration-line: none`)
  },
}

export const TextButton: Story = {
  args: {
    variant: undefined,
    textBtn: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(`background-color: rgba(0, 0, 0, 0)`)
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const WithFontAwesomeIcon: Story = {
  args: {
    children: 'Continue',
    iconComponent: <FontAwesomeIcon icon={faArrowRight} />,
    trailingIcon: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

export const ForcedWidth: Story = {
  args: {
    forcedWidth: '300px',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Button/i })
    await expect(button).toHaveStyle(`width: 300px`)
  },
}

export const Playground: Story = {}

export const InteractivePlaygroundTemplate: Story = {
  render: (args) => <InteractivePlayground {...args} />,
}
export const CollectionTemplate: Story = {
  render: (args) => <CollectionPage {...args} />,
}
