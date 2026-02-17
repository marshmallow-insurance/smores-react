import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { RadioGroup } from './RadioGroup'
import { noop } from '../utils/noop'
import { Box } from '../Box'
import { Text } from '../Text'

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

  it('renders React elements in bodyCopy', () => {
    const { container } = render(
      <RadioGroup
        options={[
          {
            label: 'Pay now',
            value: 'pay-now',
            bodyCopy: (
              <Box direction="column" gap={{ custom: '4px' }}>
                <Text>£189.38 today</Text>
                <Text typo="body-small" color="color.text.subtle">
                  Your remaining 3 monthly payments stay at £39.43
                </Text>
              </Box>
            ),
          },
          {
            label: 'Spread the cost',
            value: 'spread-cost',
            bodyCopy: (
              <Box direction="column" gap={{ custom: '4px' }}>
                <Text>£12.50 today</Text>
                <Text typo="body-small" color="color.text.subtle">
                  Your remaining 3 monthly payments will increase to £94.22
                </Text>
              </Box>
            ),
          },
        ]}
        value="pay-now"
        onChange={noop}
        displayType="vertical-card"
      />,
    )

    expect(container).toMatchSnapshot()
  })
})
