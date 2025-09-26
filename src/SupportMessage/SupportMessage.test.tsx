import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { SupportMessage } from './SupportMessage'

describe('SupportMessage', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <SupportMessage type="info" description={'This is an info message.'} />,
    )
    expect(container).toMatchSnapshot()
  })
})
