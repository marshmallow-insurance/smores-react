import { render } from '@testing-library/react'
import React from 'react'

import { Pagination } from '../Pagination'

test('renders', () => {
  const { container } = render(
    <Pagination total={11} partition={1} handlePageChange={() => {}} />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
