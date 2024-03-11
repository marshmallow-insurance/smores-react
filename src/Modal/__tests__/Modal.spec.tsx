import { render } from '@testing-library/react'
import React from 'react'

import { Modal } from '../Modal'

test('renders', () => {
  const { container } = render(
    <Modal handleClick={() => console.log('modal')}>Text inside</Modal>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
