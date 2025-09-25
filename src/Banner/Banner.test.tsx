import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BannerItem } from './BannerItem'
import { SmoresThemeProvider } from './../ThemeProvider/ThemeProvider'

describe('BannerItem', () => {
  it('render General banner correctly', () => {
    const { container } = render(
      <SmoresThemeProvider>
        <BannerItem
          message="This is a banner"
          deleteBanner={vi.fn()}
          id="1"
          type="general"
          topOffset="8px"
        />
      </SmoresThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
  it('render Upsell banner correctly', () => {
    const { container } = render(
      <SmoresThemeProvider>
        <BannerItem
          message="This is a banner"
          deleteBanner={vi.fn()}
          id="1"
          type="upsell"
          topOffset="8px"
        />
      </SmoresThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
  it('render Success banner correctly', () => {
    const { container } = render(
      <SmoresThemeProvider>
        <BannerItem
          message="This is a banner"
          deleteBanner={vi.fn()}
          id="1"
          type="success"
          topOffset="8px"
        />
      </SmoresThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
  it('render Critical banner correctly', () => {
    const { container } = render(
      <SmoresThemeProvider>
        <BannerItem
          message="This is a banner"
          deleteBanner={vi.fn()}
          id="1"
          type="critical"
          topOffset="8px"
        />
      </SmoresThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})
