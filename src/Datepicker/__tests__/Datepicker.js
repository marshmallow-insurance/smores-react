import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Datepicker } from '../Datepicker'

test('renders', () => {
  const { container } = render(
    <Datepicker range={20} onDateSelect={str => {}} />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
