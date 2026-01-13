import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { useState } from 'react'
import { NumberStepper } from '../NumberStepper'

const meta: Meta<typeof NumberStepper> = {
  title: 'NumberStepper',
  component: NumberStepper,
  args: {
    minValue: 1,
    maxValue: 10,
    value: 5,
  },
  argTypes: {
    value: {
      control: { type: 'number' },
    },
    minValue: {
      control: { type: 'number' },
    },
    maxValue: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof NumberStepper>

export const Default: Story = {
  args: {
    value: 5,
    minValue: 1,
    maxValue: 10,
    setValue: fn(),
  },
}

export const AtMinimum: Story = {
  args: {
    value: 1,
    minValue: 1,
    maxValue: 10,
    setValue: fn(),
  },
}

export const AtMaximum: Story = {
  args: {
    value: 10,
    minValue: 1,
    maxValue: 10,
    setValue: fn(),
  },
}

export const Disabled: Story = {
  args: {
    value: 5,
    minValue: 1,
    maxValue: 10,
    disabled: true,
    setValue: fn(),
  },
}

export const WithLabel: Story = {
  args: {
    value: 3,
    minValue: 0,
    maxValue: 99,
    label: 'Number of items',
    id: 'items-stepper',
    setValue: fn(),
  },
}

// Interactive story that manages its own state
const InteractiveTemplate = () => {
  const [value, setValue] = useState(5)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NumberStepper
        value={value}
        setValue={setValue}
        minValue={1}
        maxValue={10}
        testId="interactive-stepper"
      />
      <p style={{ fontFamily: 'sans-serif', fontSize: '14px' }}>
        Current value: <strong>{value}</strong>
      </p>
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
}
