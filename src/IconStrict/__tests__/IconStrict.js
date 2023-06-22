import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { IconStrict } from '../IconStrict'

test('renders', () => {
  const { container } = render(<IconStrict render="at" size="48" />)
  expect(container.firstChild).toMatchSnapshot()
})
