import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { Message } from '../Message'

it('default renders correctly', () => {
  const { container } = render(
    <Message>This is an infomation message for the customer!</Message>,
  )

  expect(container).toMatchSnapshot()
})

it('warning renders correctly', () => {
  const { container } = render(
    <Message type="warning">
      This is a warning message for the customer!
    </Message>,
  )

  expect(container).toMatchSnapshot()
})

it('info renders correctly', () => {
  const { container } = render(
    <Message type="info">
      This is a infomational message for the customer!
    </Message>,
  )

  expect(container).toMatchSnapshot()
})

it('icon prop render correctly', () => {
  const { container } = render(
    <Message type="warning">
      This is a warning message for the customer!
    </Message>,
  )

  expect(container).toHaveTextContent(
    'This is a warning message for the customer!',
  )
})
