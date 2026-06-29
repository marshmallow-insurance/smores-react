import { Meta, StoryObj } from '@storybook/react-vite'
import { PromoCard } from '../PromoCard'
import placeHolderSvg from './placeHolderImage.svg'

const illustration = (
  <img
    src={placeHolderSvg}
    alt=""
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
)

const noop = () => undefined

const meta: Meta<typeof PromoCard> = {
  title: 'PromoCard',
  component: PromoCard,
  args: {
    title: 'Insure your home',
    body: 'Add home cover and save £75 on your car insurance.',
    imagePosition: 'left',
    illustration,
    primaryButton: { label: 'Claim discount', onClick: noop },
    secondaryButton: { label: 'No thanks', onClick: noop },
  },
  argTypes: {
    imagePosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    title: { control: 'text' },
    body: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof PromoCard>

export const Default: Story = {}

export const ImageRight: Story = {
  args: {
    imagePosition: 'right',
  },
}

export const PrimaryButtonOnly: Story = {
  args: {
    secondaryButton: undefined,
  },
}

export const WithoutButtons: Story = {
  args: {
    primaryButton: undefined,
    secondaryButton: undefined,
  },
}

export const WithoutIllustration: Story = {
  args: {
    illustration: undefined,
  },
}

export const PrimaryVariant: Story = {
  args: {
    primaryButton: {
      label: 'Claim discount',
      onClick: noop,
      variant: 'primary',
    },
    secondaryButton: {
      label: 'No thanks',
      onClick: noop,
      variant: 'fallbackStyle',
    },
  },
}

export const DisabledAndLoading: Story = {
  args: {
    primaryButton: { label: 'Claim discount', onClick: noop, disabled: true },
    secondaryButton: { label: 'No thanks', onClick: noop, loading: true },
  },
}
