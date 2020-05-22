import React from 'react'
import { storiesOf } from '@storybook/react'

import { ActionDropdown } from './ActionDropdown'

const defaultAction = {
  label: 'Medium',
  value: 'MEDIUM',
  bgColor: 'yellow5',
  textColor: 'blue7',
}

const actions = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'grey2',
    textColor: 'blue7',
  },
  {
    label: 'High alert',
    value: 'HIGH_ALERT',
    bgColor: 'orange4',
    textColor: 'white',
  },
  {
    label: 'Good zone',
    value: 'GOOD_ZONE',
    bgColor: 'green6',
    textColor: 'white',
  },
  {
    label: 'DANGER zone',
    value: 'DANGER_ZONE',
    bgColor: 'red6',
    textColor: 'white',
  },
]

storiesOf('ActionDropdown', module)
  .addWithJSX('without initital option', () => (
    <ActionDropdown
      id="statusActions1"
      list={actions}
      onSelect={(e) => console.log(e)}
    />
  ))
  .addWithJSX('with initital option', () => (
    <ActionDropdown
      id="statusActions2"
      list={actions}
      defaultAction={defaultAction}
      onSelect={(e) => console.log(e)}
    />
  ))
