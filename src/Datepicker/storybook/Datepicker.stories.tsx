import type { Meta, StoryObj } from '@storybook/react'
import { Datepicker } from '../Datepicker'

const meta: Meta<typeof Datepicker> = {
  title: 'Datepicker',
  component: Datepicker,
  args: {
    showDayLabels: false,
    disableWeekend: false,
    range: 31,
    fromDate: new Date('2021/07/14'),
    fallbackStyle: false,
    disabled: false,
  },
  argTypes: { onDateSelect: { action: 'date selected' } },
}

export default meta
type Story = StoryObj<typeof Datepicker>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
