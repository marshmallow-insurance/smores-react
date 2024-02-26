import { render } from '@testing-library/react'
import React from 'react'

import { CheckBox } from '../CheckBox'

test('renders', () => {
  const { container } = render(
    <CheckBox checked={false} toggle={() => console.log('toggle')}>
      CheckBox Test
    </CheckBox>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
