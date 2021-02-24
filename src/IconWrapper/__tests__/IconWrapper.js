import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { IconWrapper } from '../IconWrapper'
import { Icon } from '../../Icon'

test('renders', () => {
  const args = {
    render: 'included',
    size: 16,
    t: 'auto',
    r: 'auto',
    b: 'auto',
    l: 'auto',
  }
  const { container } = render(
    <IconWrapper {...args}>
      <Icon render="wheel-flat" />
    </IconWrapper>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
