import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Button } from '../Button'

test('renders', () => {
  const { container } = render(<Button color="green" />)
  expect(container.firstChild).toMatchSnapshot()
})
