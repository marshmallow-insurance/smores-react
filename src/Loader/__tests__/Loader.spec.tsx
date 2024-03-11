import { render } from '@testing-library/react'
import React from 'react'

import { Loader } from '../Loader'

test('renders', () => {
  const { container } = render(<Loader height="32px" color="marshmallowPink" />)
  expect(container.firstChild).toMatchSnapshot()
})
