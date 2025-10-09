import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Divider />)
    expect(container).toMatchSnapshot()
  })
})
