import { render } from '@testing-library/react'
import React from 'react'

import { IconStrict } from '../IconStrict'

test('renders', () => {
  const { container } = render(<IconStrict render="at" size={48} />)
  expect(container.firstChild).toMatchSnapshot()
})
