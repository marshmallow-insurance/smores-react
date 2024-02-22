import { render } from '@testing-library/react'
import React from 'react'

import { Button } from '../Button'

test('renders', () => {
  const { container } = render(<Button>Test</Button>)
  expect(container.firstChild).toMatchSnapshot()
})
