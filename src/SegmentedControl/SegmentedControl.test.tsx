import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { SegmentedControl } from './SegmentedControl'
import { noop } from '../utils/noop'

describe('SegmentedControl', () => {
  it('renders correctly with default props and a tag', () => {
    const { container } = render(
      <SegmentedControl
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2', tag: 'tag 2' },
        ]}
        value="option1"
        onChange={noop}
        showTag={true}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
