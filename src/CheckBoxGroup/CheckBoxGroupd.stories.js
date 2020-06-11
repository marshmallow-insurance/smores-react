import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { CheckBoxGroup } from './CheckBoxGroup'

const options = [
  {
    id: 0,
    label: 'Apples',
    value: 'APPLES',
    checked: false,
  },
  {
    id: 1,
    label: 'Oranges',
    value: 'ORANGES',
    checked: false,
  },
  {
    id: 2,
    label: 'Grapes',
    value: 'GRAPES',
    checked: false,
  },
  {
    id: 3,
    label: 'Bananas',
    value: 'BANANAS',
    checked: false,
  },
]

const Group = () => {
  const [list, setList] = useState(options)

  const toggleCheck = (id) => {
    const newList = [...list]
    newList[id].checked = !list[id].checked

    setList(newList)
  }

  return <CheckBoxGroup list={list} onToggle={toggleCheck} />
}

storiesOf('CheckBoxGroup', module).addWithJSX('default', () => <Group />)
