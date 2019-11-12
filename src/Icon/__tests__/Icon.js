import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Icon } from '../Icon'
import { theme } from '../../theme'

test('renders', () => {
  const { container } = render(
    <Icon render="at" size="32" color={theme.colors.pink[500]} />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
