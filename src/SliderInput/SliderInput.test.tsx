import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { SliderInput } from './SliderInput'
import { noop } from '../utils/noop'

describe('SliderInput', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <SliderInput value={50} onChange={noop} min={0} max={100} />,
    )
    expect(container).toMatchSnapshot()
  })
})
