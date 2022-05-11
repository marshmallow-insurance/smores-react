import React, { useState } from 'react'
import { Box } from '../Box'
import { ActionDropdown, ActionDropdownProps } from './ActionDropdown'
import { Text } from '../Text'

const actions: ActionDropdownProps['list'] = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'background',
    textColor: 'secondary',
  },
  {
    label: 'Medium',
    value: 'MEDIUM',
    bgColor: 'warning',
    textColor: 'secondary',
  },
  {
    label: 'High alert',
    value: 'HIGH_ALERT',
    bgColor: 'agentWarning',
    textColor: 'white',
  },
  {
    label: 'Good zone',
    value: 'GOOD_ZONE',
    bgColor: 'success',
    textColor: 'white',
  },
  {
    label: 'DANGER zone',
    value: 'DANGER_ZONE',
    bgColor: 'error',
    textColor: 'white',
  },
]

export const Container = () => {
  const [selectedAction, setSelectedAction] = useState(actions[0])

  return (
    <Box flex alignItems="center">
      <ActionDropdown
        id="statusActions"
        list={actions}
        value={selectedAction}
        onSelect={setSelectedAction}
      />

      <Box mr="16px" />

      <Box>
        <Text tag="p" typo="base-small">
          {selectedAction.label}
        </Text>
      </Box>
    </Box>
  )
}
