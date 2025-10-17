import React from 'react'
import { render } from '../testUtils'
import { it, expect } from 'vitest'
import { Toggle } from './Toggle'
import { noop } from '../utils/noop'

describe('Toggle Component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <Toggle
        checked={true}
        onToggle={noop}
        bgColor="color.illustration.accent4.100"
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
