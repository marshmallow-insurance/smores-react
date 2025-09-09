import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <Link href="https://www.google.com">Google Link</Link>,
    )
    expect(container).toMatchSnapshot()
  })
})
