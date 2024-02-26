import { render } from '@testing-library/react'
import React from 'react'

import { Emoji } from '../Emoji'

test('renders', () => {
  const { container } = render(<Emoji symbol="😉" size={24} label="wink" />)
  expect(container.firstChild).toMatchSnapshot()
})
