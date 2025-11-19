import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '../../Link'
import { Text } from '../../Text'
import { Alert } from '../Alert'

const Meta = {
  title: 'Alert',
  component: Alert,
  args: {
    message: 'This is an alert message',
    type: 'info',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'fallback', 'notice', 'positive', 'negative'],
    },
    ctaType: {
      control: 'radio',
      options: ['button', 'link', undefined],
    },
    ctaLabel: { control: 'text' },
    ctaAction: { control: 'object' },
  },
} as Meta<typeof Alert>

export default Meta

type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information Alert',
    message: 'This is an info alert message.',
    isDismissible: true,
  },
  render: (args) => <Alert {...args} />,
}

export const Fallback: Story = {
  args: {
    type: 'fallback',
    title: 'Fallback Alert',
    message: 'This is a fallback alert message.',
    isDismissible: true,
  },
  render: (args) => <Alert {...args} />,
}

export const Notice: Story = {
  args: {
    type: 'notice',
    title: 'Notice Alert',
    message: 'This is a notice alert message.',
  },
  render: (args) => <Alert {...args} />,
}

export const Negative: Story = {
  args: {
    type: 'negative',
    title: 'Negative Alert',
    message: 'This is a negative alert message.',
  },
  render: (args) => <Alert {...args} />,
}

export const Positive: Story = {
  args: {
    type: 'positive',
    title: 'Positive Alert',
    message: 'This is a positive alert message.',
  },
  render: (args) => <Alert {...args} />,
}

export const WithButtonCTA: Story = {
  args: {
    type: 'info',
    title: 'Alert with Button CTA',
    message: 'This alert has a call-to-action button.',
    ctaType: 'button',
    ctaLabel: 'Click Me',
    ctaAction: () => alert('Button CTA clicked!'),
  },
  render: (args) => <Alert {...args} />,
}

export const WithLinkCTA: Story = {
  args: {
    type: 'info',
    title: 'Alert with Link CTA',
    message: 'This alert has a call-to-action link.',
    ctaType: 'link',
    ctaLabel: 'Visit Marshmallow',
    ctaAction: 'https://marshmallow.com',
  },
  render: (args) => <Alert {...args} />,
}

export const WithLongerMessage: Story = {
  args: {
    type: 'notice',
    title: 'Alert with Longer Message and Max Width of 100%',
    message:
      'This is a longer alert message to demonstrate how the alert component handles more text content. The Text container has a max-width of 512px, even if the component width is flexible. It should properly wrap and maintain readability across different screen sizes.',
    maxWidth: '100%',
  },
  render: (args) => <Alert {...args} />,
}

export const WithReactNode: Story = {
  args: {
    type: 'notice',
    title: 'Alert with React Element Message',
    message: (
      <Text>
        Custom react element, with a <Link href={''}>Link</Link>
      </Text>
    ),
  },
  render: (args) => <Alert {...args} />,
}

export const WithoutTitle: Story = {
  args: {
    type: 'info',
    message: 'This alert does not have a title.',
  },
  render: (args) => <Alert {...args} />,
}
