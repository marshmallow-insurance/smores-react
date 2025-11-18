import { render, screen } from '../testUtils'
import { it, describe } from 'vitest'
import { Text } from './Text'

describe('Text component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <Text>The quick brown fox jumps over the lazy dog</Text>,
    )
    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog'),
    ).toBeTruthy()

    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveStyle({ color: '#292924' })
  })

  it('renders color.feedback.negative.200 / strawberry correctly with NEW color name', () => {
    const { container } = render(
      <Text color="color.feedback.negative.200">
        The quick brown fox jumps over the lazy dog
      </Text>,
    )
    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog'),
    ).toBeTruthy()

    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveStyle({ color: '#d03c30' })
  })

  it('renders color.feedback.negative.200 / strawberry correctly with OLD color name', () => {
    const { container } = render(
      <Text color="strawberry">
        The quick brown fox jumps over the lazy dog
      </Text>,
    )
    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog'),
    ).toBeTruthy()

    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveStyle({ color: '#d03c30' })
  })

  it('renders color.feedback.positive.200 / apple correctly with NEW color name', () => {
    const { container } = render(
      <Text color="color.feedback.positive.200">
        The quick brown fox jumps over the lazy dog
      </Text>,
    )
    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog'),
    ).toBeTruthy()

    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveStyle({ color: '#317a4c' })
  })

  it('renders color.feedback.positive.200 / apple correctly with OLD color name', () => {
    const { container } = render(
      <Text color="apple">The quick brown fox jumps over the lazy dog</Text>,
    )
    expect(
      screen.getByText('The quick brown fox jumps over the lazy dog'),
    ).toBeTruthy()

    expect(container).toMatchSnapshot()

    expect(container.firstChild).toHaveStyle({ color: '#317a4c' })
  })
})
