import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Dropdown } from './Dropdown'
import { noop } from '../utils/noop'

const items = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
]

describe('Dropdown', () => {
  it('renders correctly with a list of items', () => {
    const { container } = render(
      <Dropdown list={items} onSelect={noop} onInputChange={noop} />,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly when completed', () => {
    const { container } = render(
      <Dropdown list={items} onSelect={noop} onInputChange={noop} completed />,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly with an error message', () => {
    const { container } = render(
      <Dropdown
        list={items}
        onSelect={noop}
        onInputChange={noop}
        error
        errorMsg="This is an error"
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
