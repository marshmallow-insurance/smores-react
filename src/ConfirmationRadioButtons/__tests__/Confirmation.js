import React from 'react'
import { render } from '@testing-library/react'

import { Confirmation } from '../Confirmation'

test('renders', () => {
  const { container } = render(<Confirmation />)
  expect(container.firstChild).toMatchSnapshot()
})
