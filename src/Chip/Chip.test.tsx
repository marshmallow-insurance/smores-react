import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Chip } from './Chip'
import { noop } from '../utils/noop'

describe('Chip', () => {
  it('renders correctly with primary styling', () => {
    const { container } = render(
      <Chip handleClick={noop} primary>
        Primary
      </Chip>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly with secondary styling', () => {
    const { container } = render(
      <Chip handleClick={noop} secondary>
        Secondary
      </Chip>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly when disabled', () => {
    const { container } = render(
      <Chip handleClick={noop} disabled>
        Disabled
      </Chip>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly when loading', () => {
    const { container } = render(
      <Chip handleClick={noop} loading>
        Loading
      </Chip>,
    )
    expect(container).toMatchSnapshot()
  })
})
