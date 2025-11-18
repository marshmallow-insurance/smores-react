import { Meta, StoryObj } from '@storybook/react'
import { Placeholder } from '../../components/Placeholder'
import { Fieldset, FieldsetProps } from '../Fieldset'

const meta: Meta<FieldsetProps> = {
  title: 'Fieldset',
  component: Fieldset,
}

export default meta
type Story = StoryObj<FieldsetProps>

const Template: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Placeholder />
    </Fieldset>
  ),
}

export const Default: Story = {
  ...Template,
  args: {
    label: 'Fieldset label',
    assistiveText: 'Some assistive text to help the user',
    renderAsTitle: true,
    required: false,
  },
}

export const WithError: Story = {
  ...Template,
  args: {
    label: 'Fieldset label',
    assistiveText: 'Some assistive text to help the user',
    renderAsTitle: true,
    required: false,
    error: true,
    errorMsg: 'This is an error message describing what is wrong',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const WithSmallLabel: Story = {
  ...Template,
  args: {
    label: 'Fieldset label',
    assistiveText: 'Some assistive text to help the user',
    renderAsTitle: false,
    required: false,
  },
}

export const WithCompletedStatus: Story = {
  ...Template,
  args: {
    label: 'Fieldset label',
    assistiveText: 'Some assistive text to help the user',
    renderAsTitle: true,
    required: false,
    completed: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}
