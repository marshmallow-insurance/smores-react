import { expect, it } from 'vitest'
import { render } from '../testUtils'

import { Accordion } from './Accordion'

describe('Accordion', () => {
  it('renders correctly when closed', () => {
    const { container } = render(
      <Accordion title="How it works">
        Lots of brilliant information about this beautiful component
      </Accordion>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly when expanded', () => {
    const { container } = render(
      <Accordion title="How it works" defaultIsOpen>
        Lots of brilliant information about this beautiful component
      </Accordion>,
    )
    expect(container).toMatchSnapshot()
  })
  it('renders correctly for fullBorder and filledBackground variant', () => {
    const { container } = render(
      <Accordion title="How it works" fullBorder filledBackground defaultIsOpen>
        Lots of brilliant information about this beautiful component
      </Accordion>,
    )
    expect(container).toMatchSnapshot()
  })
  it('uses the border color, not the background color, for the top border', () => {
    const { container } = render(
      <Accordion title="How it works" borderTop>
        Lots of brilliant information about this beautiful component
      </Accordion>,
    )
    expect(container.firstChild).toHaveStyleRule('border-top', '1px solid #dad2c4')
  })
})
