import { render } from '@testing-library/react'
import React from 'react'

import { Icon } from '../Icon'

test('renders', () => {
  const { container } = render(<Icon render="at" size={32} color="apple" />)
  expect(container.firstChild).toMatchSnapshot()
})
