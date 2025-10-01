import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { Logo } from './Logo'

describe('Logo', () => {
  it('renders correctly', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })

  it('renders positive2 correctly', () => {
    const { container } = render(<Logo type="positive2" />)
    expect(container).toMatchSnapshot()
  })

  it('renders negative1 correctly', () => {
    const { container } = render(<Logo type="negative1" />)
    expect(container).toMatchSnapshot()
  })
})
