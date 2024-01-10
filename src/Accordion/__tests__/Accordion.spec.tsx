import { render } from '@testing-library/react'
import React from 'react'

import { Accordion } from '../Accordion'

test('renders', () => {
  const { container } = render(
    <Accordion title="How it works">
      Lots of brilliant information about this beautiful component
    </Accordion>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
