import React, { useState } from 'react'
import { Box } from '../Box'
import { ActionDropdown } from './ActionDropdown'

const actions = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'grey2',
    textColor: 'blue7',
  },
  {
    label: 'Medium',
    value: 'MEDIUM',
    bgColor: 'yellow5',
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

export const Container = () => {
  const [selectedAction, setSelectedAction] = useState(actions[0])

  return (
    <Box flex>
      <ActionDropdown
        id="statusActions"
        list={actions}
        value={selectedAction}
        onSelect={setSelectedAction}
      />

      <Box mr="16px" />

      <Box>
        <p>{selectedAction.label}</p>
      </Box>
    </Box>
  )
}
