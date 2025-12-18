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

  it('renders a custom icon component when provided', () => {
    const CustomIcon = () => <span data-testid="custom-icon" />

    const { getByTestId, queryByTestId } = render(
      <RadioGroup
        options={[
          {
            label: 'Option 1',
            value: 'option1',
            icon: 'alert',
            iconComponent: <CustomIcon />,
          },
        ]}
        value="option1"
        onChange={noop}
      />,
    )

    expect(getByTestId('custom-icon')).toBeInTheDocument()
    expect(queryByTestId('alert-container')).not.toBeInTheDocument()
  })

  it('falls back to the icon prop when no custom icon is provided', () => {
    const { getByTestId } = render(
      <RadioGroup
        options={[
          {
            label: 'Option 1',
            value: 'option1',
            icon: 'alert',
          },
        ]}
        value="option1"
        onChange={noop}
      />,
    )

    expect(getByTestId('alert-container')).toBeInTheDocument()
  })
})
