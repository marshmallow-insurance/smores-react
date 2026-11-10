import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { MINIMAL_VIEWPORTS } from 'storybook/viewport'
import { Box } from '../../Box'
import { Text } from '../../Text'
import { CheckboxCard } from '../CheckboxCard'

const meta: Meta<typeof CheckboxCard> = {
  title: 'CheckboxCard',
  component: CheckboxCard,
  args: {
    label: 'Label',
    variant: 'default',
    error: false,
    valid: false,
    onChange: fn(),
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'notice'],
    },
    label: { control: 'text' },
    description: { control: 'text' },
    errorMsg: { control: 'text', if: { arg: 'error' } },
    children: { control: false },
  },
  parameters: {
    viewport: {
      options: {
        ...MINIMAL_VIEWPORTS,
        figmaMobile: {
          name: 'Mobile (375px)',
          styles: { width: '375px', height: '667px' },
          type: 'mobile',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <Box p="space.200" maxWidth="375px">
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CheckboxCard>

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Label' })

    await userEvent.click(canvas.getByText('Label'))

    await waitFor(() => expect(args.onChange).toHaveBeenCalled())
    await expect(checkbox).toBeChecked()
  },
}

export const Notice: Story = {
  args: {
    variant: 'notice',
    label: 'I confirm that these details are correct',
  },
}

export const WithDescription: Story = {
  args: {
    description: 'Description',
  },
}

export const WithSlot: Story = {
  args: {
    children: (
      <Text tag="span" typo="body-small" color="color.text.subtle">
        Extra content, shown above the checkbox and label.
      </Text>
    ),
  },
}

export const Invalid: Story = {
  args: {
    error: true,
    errorMsg: 'Helper text',
  },
}

export const NoticeInvalid: Story = {
  args: {
    variant: 'notice',
    error: true,
    errorMsg: 'Helper text',
  },
}

export const Valid: Story = {
  args: {
    valid: true,
    defaultChecked: true,
  },
}

export const NoticeValid: Story = {
  args: {
    variant: 'notice',
    valid: true,
    defaultChecked: true,
  },
}

// A long label wraps next to the checkbox, which stays at the top
export const LongLabel: Story = {
  tags: ['!autodocs'],
  args: {
    variant: 'notice',
    label:
      'I confirm that I have read the information above and that everything I have told you is correct',
    description: 'You can change your answers later in your account.',
  },
  globals: {
    viewport: { value: 'figmaMobile', isRotated: false },
  },
}
