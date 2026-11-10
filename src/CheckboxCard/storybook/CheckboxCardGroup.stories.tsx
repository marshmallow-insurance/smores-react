import { Meta, StoryObj } from '@storybook/react-vite'
import { Box } from '../../Box'
import { CheckboxCard } from '../CheckboxCard'
import { CheckboxCardGroup } from '../CheckboxCardGroup'

const circumstances = [
  'Bereavement',
  'Illness or injury',
  'Loss of income',
  'Caring for someone',
  'None of these',
]

const meta: Meta<typeof CheckboxCardGroup> = {
  title: 'CheckboxCardGroup',
  component: CheckboxCardGroup,
  args: {
    label: 'Form title',
    assistiveText: 'Select all that apply',
    renderAsTitle: true,
    error: false,
  },
  argTypes: {
    errorMsg: { control: 'text', if: { arg: 'error' } },
    children: { control: false },
  },
  render: (args) => (
    <CheckboxCardGroup {...args}>
      {circumstances.map((circumstance) => (
        <CheckboxCard
          key={circumstance}
          label={circumstance}
          name="circumstances"
          value={circumstance}
        />
      ))}
    </CheckboxCardGroup>
  ),
  decorators: [
    (Story) => (
      <Box p="space.200" maxWidth="375px">
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CheckboxCardGroup>

export const Default: Story = {}

export const WithGroupLabel: Story = {
  args: {
    label: 'Group label',
    renderAsTitle: false,
  },
}

export const Invalid: Story = {
  args: {
    error: true,
    errorMsg: 'Choose at least one option',
  },
}
