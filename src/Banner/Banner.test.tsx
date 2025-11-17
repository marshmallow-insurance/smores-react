import { expect, it } from 'vitest'
import { BannerItem } from './BannerItem'
import { render } from '../testUtils'

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
