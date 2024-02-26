import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { BrandCard } from '../BrandCard'

test('renders', () => {
  const { container } = render(<BrandCard>Text inside</BrandCard>)
  expect(container.firstChild).toMatchSnapshot()
})
