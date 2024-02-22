import { render } from '@testing-library/react'
import React from 'react'

import { Text } from '../Text'

test('renders', () => {
  const { container } = render(
    <Text>The quick brown fox jumps over the lazy dog</Text>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
