import React, { useState } from 'react'
import { Box } from '../Box'
import { ActionDropdown, ActionDropdownProps } from './ActionDropdown'
import { Text } from '../Text'

const actions: ActionDropdownProps['list'] = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'coconut',
    textColor: 'liquorice',
  },
  {
    label: 'Brand',
    value: 'ACTION',
    bgColor: 'marshmallowPink',
    textColor: 'liquorice',
  },
  {
    label: 'Medium',
    value: 'MEDIUM',
    bgColor: 'lemon',
    textColor: 'liquorice',
  },
  {
    label: 'High alert',
    value: 'HIGH_ALERT',
    bgColor: 'tangerine',
    textColor: 'cream',
  },
  {
    label: 'Good zone',
    value: 'GOOD_ZONE',
    bgColor: 'apple',
    textColor: 'cream',
  },
  {
    label: 'DANGER zone',
    value: 'DANGER_ZONE',
    bgColor: 'strawberry',
    textColor: 'cream',
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
