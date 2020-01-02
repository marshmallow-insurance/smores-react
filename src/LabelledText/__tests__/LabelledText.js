import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { LabelledText } from '../LabelledText'

test('renders', () => {
  const { container } = render(
    <LabelledText label="Name">Hideo Kojima</LabelledText>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
