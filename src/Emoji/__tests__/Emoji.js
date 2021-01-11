import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Emoji } from '../Emoji'

test('renders', () => {
  const { container } = render(<Emoji symbol="😉" size={24} label="wink" />)
  expect(container.firstChild).toMatchSnapshot()
})
