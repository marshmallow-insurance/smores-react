import { render } from '@testing-library/react'
import React from 'react'

import { Toggle } from '../Toggle'

test('renders', () => {
  const { container } = render(
    <Toggle id="toggle" checked={false} onToggle={() => {}} />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
