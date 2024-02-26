import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { Row } from '../Row'

it('default renders correctly', () => {
  const { container } = render(<Row heading="This is a Row with a heading" />)

  expect(container).toMatchSnapshot()
})
