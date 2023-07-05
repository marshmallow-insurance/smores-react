import React from 'react'

import { render } from '@testing-library/react'
import 'jest-styled-components'

import { SmallButton } from '../SmallButton'

test('renders', () => {
  const { container } = render(<SmallButton color="green" />)
  expect(container.firstChild).toMatchSnapshot()
})
