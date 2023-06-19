import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { ActionDropdown } from '../ActionDropdown'

const actions = [
  {
    label: 'High alert',
    value: 'HIGH_ALERT',
    bgColor: 'tangerine',
    textColor: 'cream',
  },
  {
    label: 'Good zone',
    value: 'GOOD_ZONE',
    bgColor: 'success',
    textColor: 'cream',
  },
]

test('renders', () => {
  const { container } = render(
    <ActionDropdown
      value={actions[0]}
      list={actions}
      onSelect={(e) => console.log(e)}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
