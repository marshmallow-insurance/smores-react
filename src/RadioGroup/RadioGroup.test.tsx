import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { RadioGroup } from './RadioGroup'
import { noop } from '../utils/noop'

describe('RadioGroup', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <RadioGroup
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        value="option1"
        onChange={noop}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly as a vertical-card with body copy', () => {
    const { container } = render(
      <RadioGroup
        options={[
          {
            label: 'Option 1',
            value: 'option1',
            bodyCopy: 'This is the body copy for option 1.',
          },
          {
            label: 'Option 2',
            value: 'option2',
            bodyCopy: 'This is the body copy for option 2.',
          },
          {
            label: 'Option 3',
            value: 'option3',
            bodyCopy: 'This is the body copy for option 3.',
          },
        ]}
        value="option1"
        onChange={noop}
        displayType="vertical-card"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly as a horizontal-card with an error message', () => {
    const { container } = render(
      <RadioGroup
        options={[
          {
            label: 'Option 1',
            value: 'option1',
          },
          {
            label: 'Option 2',
            value: 'option2',
          },
          {
            label: 'Option 3',
            value: 'option3',
          },
        ]}
        value="option1"
        onChange={noop}
        displayType="horizontal-card"
        error
        errorMsg="This is an error message."
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
