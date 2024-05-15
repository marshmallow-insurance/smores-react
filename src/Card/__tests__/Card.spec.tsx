import { render } from '@testing-library/react'
import React from 'react'

import { Card } from '../Card'

test('renders', () => {
  const { container } = render(<Card>Text inside</Card>)
  expect(container.firstChild).toMatchSnapshot()
})
