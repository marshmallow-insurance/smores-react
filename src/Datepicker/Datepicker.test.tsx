import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { Datepicker } from './Datepicker'
import { noop } from '../utils/noop'

describe('Datepicker', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <Datepicker
        onDateSelect={noop}
        fromDate={new Date('2020-07-01')}
        range={14}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
