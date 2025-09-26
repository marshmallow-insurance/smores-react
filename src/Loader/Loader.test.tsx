import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { Loader } from './Loader'

describe('Loader', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Loader height={'24px'} />)
    expect(container).toMatchSnapshot()
  })
})
