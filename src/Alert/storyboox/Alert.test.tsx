import React from 'react'
import { expect, it } from 'vitest'
import { render } from '../../testUtils'
import { Alert } from '../Alert'
import { noop } from '../../utils/noop'

describe('Alert Component', () => {
  it('should render Info alert correctly', () => {
    const { container } = render(
      <Alert type="info" title="Info Alert" message="This is an info alert." />,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with button cta', () => {
    const { container } = render(
      <Alert
        type="fallback"
        ctaType="button"
        ctaAction={noop}
        ctaLabel="Click Me"
        title="Test Alert"
        message="This is a test alert."
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with link cta', () => {
    const { container } = render(
      <Alert
        type="notice"
        ctaType="link"
        ctaAction=""
        ctaLabel="Learn More"
        title="Test Alert"
        message="This is a test alert."
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
