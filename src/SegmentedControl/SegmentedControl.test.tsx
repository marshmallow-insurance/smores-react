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

  it('renders default style correctly when no styles properties are passed', () => {
    const { container, getByText } = render(
      <SegmentedControl
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
        value="option1"
        onChange={noop}
        showTag={true}
      />,
    )
    // Selected
    expect(getByText('Option 1')).toHaveStyle({
      color: '#ffffff', // color.surface.base.000
    })
    expect(container.querySelector('[togglecolor]')).toHaveStyle({
      'background-color': '#292924', // color.text.base
    })

    // Unselected
    expect(getByText('Option 2')).toHaveStyle({
      color: '#292924', // color.text.base
    })
    expect(container.firstChild).toHaveStyle({
      'background-color': '#F1E9DC', // color.surface.base.300
    })
  })

  it('renders correctly with custom styles', () => {
    const { container, getByText } = render(
      <SegmentedControl
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
        value="option1"
        onChange={noop}
        showTag={true}
        styles={{
          selectedText: 'color.text.base',
          text: 'color.text.base',
          background: 'color.surface.brand.300',
          toggle: 'color.surface.base.000',
        }}
      />,
    )
    // Selected
    expect(getByText('Option 1')).toHaveStyle({
      color: '#292924', // color.text.base
    })
    expect(container.querySelector('[togglecolor]')).toHaveStyle({
      'background-color': '#FFFFFF', // color.surface.base.000
    })

    // Unselected
    expect(getByText('Option 2')).toHaveStyle({
      color: '#292924', // color.text.base
    })
    expect(container.firstChild).toHaveStyle({
      'background-color': '#ff88c8', // color.surface.brand.300
    })
  })

  it('renders correctly with custom styles and old colour names', () => {
    const { container, getByText } = render(
      <SegmentedControl
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
        value="option1"
        onChange={noop}
        showTag={true}
        styles={{
          selectedText: 'liquorice',
          text: 'liquorice',
          background: 'marshmallowPink',
          toggle: 'cream',
        }}
      />,
    )
    // Selected
    expect(getByText('Option 1')).toHaveStyle({
      color: '#292924', // liquorice
    })
    expect(container.querySelector('[togglecolor]')).toHaveStyle({
      'background-color': '#FFFFFF', // cream
    })

    // Unselected
    expect(getByText('Option 2')).toHaveStyle({
      color: '#292924', // liquorice
    })
    expect(container.firstChild).toHaveStyle({
      'background-color': '#ff88c8', // marshmallowPink
    })
  })
})
