import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Datepicker } from './Datepicker'
import { noop } from '../utils/noop'

describe('Datepicker', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Datepicker onDateSelect={noop} />)
    expect(container).toMatchSnapshot()
  })
})
