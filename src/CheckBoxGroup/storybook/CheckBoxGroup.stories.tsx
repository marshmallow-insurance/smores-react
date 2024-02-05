import React, { useState } from 'react'
import { CheckBoxGroup } from '../../CheckBoxGroup'

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

const Group = () => {
  const [list, setList] = useState(options)

  const toggleCheck = (id: number) => {
    const newList = [...list]
    newList[id].checked = !list[id].checked

    setList(newList)
  }

  return <CheckBoxGroup list={list} onToggle={toggleCheck} />
}

export default {
  title: 'Checkbox Group',
  component: CheckBoxGroup,
}

const Template = () => <Group />

export const Default = Template.bind({})
