import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Accordion } from '../Accordion'

test('renders', () => {
  const { container } = render(
    <Accordion title="How it works">
      Lots of brilliant information about this beautiful component
    </Accordion>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
