import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { CheckBox } from '../CheckBox'

const Container = () => {
  const [checked, setChecked] = useState(false)

  return (
    <CheckBox
      id="agreement"
      checked={checked}
      toggle={() => setChecked(!checked)}
    >
      I agree
    </CheckBox>
  )
}

const meta: Meta<typeof CheckBox> = {
  title: 'Checkbox',
  component: CheckBox,
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  render: () => <Container />,
}

export const WithError: Story = {
  args: {
    children: 'I disagree',
    error: true,
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

export const WithErrorLabel: Story = {
  args: {
    children: 'I disagree',
    error: true,
    errorMsg: 'Something has gone wrong',
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
