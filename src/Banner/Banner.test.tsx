import { expect, it } from 'vitest'
import { BannerItem } from './BannerItem'
import { render, screen } from '../testUtils'

const CustomIcon = () => <span data-testid="banner-custom-icon" />

describe('BannerItem', () => {
  it('render General banner correctly', () => {
    const { container } = render(
      <BannerItem
        message="This is a banner"
        deleteBanner={vi.fn()}
        id="1"
        type="general"
        topOffset="8px"
      />,
    )
    expect(container).toMatchSnapshot()

    expect(container.querySelector('[data-testid$="-container"]')).toBeNull()
  })
  it('render Upsell banner correctly', () => {
    const { container } = render(
      <BannerItem
        message="This is a banner"
        deleteBanner={vi.fn()}
        id="1"
        type="upsell"
        topOffset="8px"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders with a legacy icon when provided', () => {
    render(
      <BannerItem
        message="This is a banner"
        deleteBanner={vi.fn()}
        id="1"
        type="general"
        topOffset="8px"
        leadingIcon="info"
      />,
    )

    expect(screen.getByTestId('info-container')).toBeInTheDocument()
  })

  it('renders with a custom icon component when provided', () => {
    render(
      <BannerItem
        message="This is a banner"
        deleteBanner={vi.fn()}
        id="1"
        type="general"
        topOffset="8px"
        leadingIcon="info"
        iconComponent={<CustomIcon />}
      />,
    )

    expect(screen.getByTestId('banner-custom-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('info-container')).not.toBeInTheDocument()
  })
  it('render Success banner correctly', () => {
    const { container } = render(
      <BannerItem
        message="This is a banner"
        deleteBanner={vi.fn()}
        id="1"
        type="success"
        topOffset="8px"
      />,
    )
    expect(container).toMatchSnapshot()
  })
  it('render Critical banner correctly', () => {
    const { container } = render(
      <BannerItem
        message="This is a banner"
        deleteBanner={vi.fn()}
        id="1"
        type="critical"
        topOffset="8px"
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
