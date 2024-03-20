import { render } from '@testing-library/react'
import React from 'react'

import { BrandCard } from '../BrandCard'

test('renders', () => {
  const { container } = render(
    <BrandCard
      title="Some example title"
      body="Some example body"
      visual="imgUrl"
      bgColor="tangerine"
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
