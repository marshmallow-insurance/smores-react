import { render } from '@testing-library/react'
import React from 'react'

import { Row } from '../Row'

it('default renders correctly', () => {
  const { container } = render(<Row heading="This is a Row with a heading" />)

  expect(container).toMatchSnapshot()
})
