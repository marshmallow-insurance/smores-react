import { render } from '@testing-library/react'
import React from 'react'

import { Tag } from '../Tag'

test('renders', () => {
  const { container } = render(
    <Tag
      label="Cancelled - Refunded Manually"
      color="strawberry"
      bgColor="cream"
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
