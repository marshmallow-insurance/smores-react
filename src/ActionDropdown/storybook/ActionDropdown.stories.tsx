import { ActionDropdown, ActionDropdownProps } from '../ActionDropdown'

import { Meta, StoryObj } from '@storybook/react-vite'
import { ActionListItem } from '../List'
import { useState } from 'react'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import {
  ScrollingModal,
  scrollModalToBottom,
} from '../../utils/storybookHelpers/ScrollingModal'

const actions: ActionDropdownProps['list'] = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'color.surface.base.100',
    textColor: 'color.text.base',
  },
  {
    label: 'Brand',
    value: 'ACTION',
    bgColor: 'color.surface.brand.400',
    textColor: 'color.text.base',
  },
  {
    label: 'Medium',
    value: 'MEDIUM',
    bgColor: 'color.feedback.notice.200',
    textColor: 'color.text.base',
  },
  {
    label: 'High alert',
    value: 'HIGH_ALERT',
    bgColor: 'color.feedback.informative.200',
    textColor: 'color.surface.base.000',
  },
  {
    label: 'Good zone',
    value: 'GOOD_ZONE',
    bgColor: 'color.feedback.positive.200',
    textColor: 'color.surface.base.000',
  },
  {
    label: 'DANGER zone',
    value: 'DANGER_ZONE',
    bgColor: 'color.feedback.negative.200',
    textColor: 'color.surface.base.000',
  },
]

const meta: Meta<typeof ActionDropdown> = {
  title: 'Action Dropdown',
  component: ActionDropdown,
  args: {
    list: actions,
    onSelect: fn(),
  },
}

export default meta
type Story = StoryObj<typeof ActionDropdown>

export const Default: Story = {
  args: {
    value: {
      label: 'Default grey',
      value: 'DEFAULT',
      bgColor: 'color.surface.base.100',
      textColor: 'color.text.base',
    },
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<ActionListItem>(actions[0])
    return <ActionDropdown {...args} value={value} onSelect={setValue} />
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

const InsideModal = (args: ActionDropdownProps) => {
  const [value, setValue] = useState<ActionListItem>(actions[0])
  return (
    <ScrollingModal>
      <ActionDropdown {...args} value={value} onSelect={setValue} />
    </ScrollingModal>
  )
}

/**
 * The menu is positioned with `position: fixed`, so a scrolling Modal does not
 * clip it. Here the dropdown is at the bottom of the modal, so the menu opens
 * above it.
 */
export const InsideScrollingModal: Story = {
  args: { value: actions[0] },
  render: (args) => <InsideModal {...args} />,
  play: async () => {
    const body = within(document.body)
    const trigger = await body.findByRole('combobox')
    scrollModalToBottom(trigger)
    await userEvent.click(trigger)
    const listbox = await body.findByRole('listbox')

    // Wait for the menu to be positioned above the trigger
    await waitFor(() =>
      expect(listbox.getBoundingClientRect().bottom).toBeLessThanOrEqual(
        trigger.getBoundingClientRect().top,
      ),
    )
    const rect = listbox.getBoundingClientRect()
    await expect(rect.top).toBeGreaterThanOrEqual(0)
    await expect(rect.width).toBe(trigger.getBoundingClientRect().width)

    // Nothing clips the menu, so the one at the centre is what is on top
    const middle = document.elementFromPoint(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    )
    await expect(listbox).toContainElement(middle as HTMLElement)

    // Arrow keys move through the options
    await userEvent.keyboard('{ArrowDown}')
    await expect(body.getByRole('option', { name: 'Brand' })).toHaveFocus()

    // Escape closes the menu first and then the modal
    await userEvent.keyboard('{Escape}')
    await expect(body.queryByRole('listbox')).not.toBeInTheDocument()
    await expect(trigger).toHaveFocus()
    await expect(body.getByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await expect(body.queryByRole('dialog')).not.toBeInTheDocument()
  },
}
