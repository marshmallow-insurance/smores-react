import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { ActionDropdown } from '../ActionDropdown'

const actions = [
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
]

test('renders', () => {
  const { container } = render(
    <ActionDropdown list={actions} onSelect={(e) => console.log(e)} />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
