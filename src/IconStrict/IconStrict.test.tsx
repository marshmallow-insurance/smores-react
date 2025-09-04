import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { IconStrict } from './IconStrict'

describe('IconStrict', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<IconStrict render="car" />)
    expect(container).toMatchSnapshot()
  })
  it('renders correctly with background color', () => {
    const { container } = render(
      <IconStrict render="search" size={36} backgroundColor="matcha" />,
    )
    expect(container).toMatchSnapshot()
  })
})
