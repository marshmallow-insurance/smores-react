import { render } from '@testing-library/react'
import React from 'react'

import { LabelledText } from '../LabelledText'

test('renders', () => {
  const { container } = render(
    <LabelledText label="Name">Hideo Kojima</LabelledText>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
