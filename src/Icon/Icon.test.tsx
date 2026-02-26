import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Icon render="car" />)
    expect(container).toMatchSnapshot()
  })
  it('renders correctly with custom size and color', () => {
    const { container } = render(
      <Icon render="search" size={32} color="color.illustration.accent2.200" />,
    )
    expect(container).toMatchSnapshot()
  })
})
