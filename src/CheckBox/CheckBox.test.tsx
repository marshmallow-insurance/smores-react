import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { CheckBox } from './CheckBox'

describe('CheckBox', () => {
  it('renders correctly when unchecked', () => {
    const { container } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <CheckBox checked={false} toggle={() => {}}>
        Accept Terms
      </CheckBox>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly when checked', () => {
    const { container } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <CheckBox checked={true} toggle={() => {}}>
        Accept Terms
      </CheckBox>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly with an error state', () => {
    const { container } = render(
      <CheckBox
        checked={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        toggle={() => {}}
        error={true}
        errorMsg="You must accept the terms"
      >
        Accept Terms
      </CheckBox>,
    )
    expect(container).toMatchSnapshot()
  })
})
