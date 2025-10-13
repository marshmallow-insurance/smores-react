import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { Card } from './Card'
import placeHolderSvg from './storybook/placeHolderImage.svg'
import { Button } from '../Button'

describe('Card', () => {
  it('renders correctly with title and body', () => {
    const { container } = render(
      <Card title="Card Title" body="This is the card body." />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with a leading icon', () => {
    const { container } = render(<Card title="Card Title" leadingIcon="info" />)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with a visual', () => {
    const { container } = render(
      <Card title="Card Title" visual={placeHolderSvg} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with action button', () => {
    const { container } = render(
      <Card
        title="Card Title"
        buttonAction={<Button primary>Action</Button>}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders correctly with fallback style', () => {
    const { container } = render(<Card title="Card Title" fallbackStyle />)
    expect(container).toMatchSnapshot()
  })
})
