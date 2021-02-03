import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Pagination } from '../Pagination'

test('renders', () => {
  const { container } = render(
    <Pagination total={11} partition={1} handlePageChange={() => {}} />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
