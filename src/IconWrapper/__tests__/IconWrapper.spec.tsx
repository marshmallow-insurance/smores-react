import { render } from '@testing-library/react'
import React from 'react'

import { Icon } from '../../Icon'
import { IconWrapper } from '../IconWrapper'

test('renders', () => {
  const props = {
    render: 'included',
    size: 16,
    t: 'auto',
    r: 'auto',
    b: 'auto',
    l: 'auto',
  }
  const { container } = render(
    <IconWrapper {...props} render="wheel-flat">
      <Icon render="wheel-flat" />
    </IconWrapper>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
