import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CheckBoxGroup } from '../../CheckBoxGroup'

const meta: Meta<typeof CheckBoxGroup> = {
  title: 'Checkbox Group',
  component: CheckBoxGroup,
  decorators: [
    (Story) => (
      <div style={{ margin: '64px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CheckBoxGroup>

const options = [
  {
    id: 0,
    label: 'Apples',
    checked: false,
  },
  {
    id: 1,
    label: 'Oranges',
    checked: false,
  },
  {
    id: 2,
    label: 'Grapes',
    checked: false,
  },
  {
    id: 3,
    label: 'Bananas',
    checked: false,
  },
]

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [list, setList] = useState(options)

    const toggleCheck = (id: number) => {
      const newList = [...list]
      newList[id].checked = !list[id].checked
      setList(newList)
    }

    return <CheckBoxGroup list={options} onToggle={toggleCheck} />
  },
}
