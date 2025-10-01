import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { Pagination } from './Pagination'
import { noop } from '../utils/noop'

describe('Pagination', () => {
  it('renders correctly with default props', () => {
    const { baseElement } = render(
      <Pagination total={12} partition={1} handlePageChange={noop} />,
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correctly with current page prop', () => {
    const { baseElement } = render(
      <Pagination
        total={12}
        partition={1}
        handlePageChange={noop}
        currentPage={4}
      />,
    )

    expect(baseElement).toMatchSnapshot()
  })
})
