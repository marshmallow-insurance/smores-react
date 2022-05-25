import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { SupportMessage } from '../SupportMessage'

describe('SupportMessage component', () => {
  it('default renders correctly', () => {
    const { container } = render(
      <SupportMessage type="info">
        Support info message for customer
      </SupportMessage>,
    )

    expect(container).toMatchSnapshot()
  })

  it('type info with general title renders correctly', () => {
    const { container } = render(
      <SupportMessage type="info" title="General info title">
        Support info message for customer
      </SupportMessage>,
    )

    expect(container).toMatchSnapshot()
  })

  it('type alert renders correctly', () => {
    const { container } = render(
      <SupportMessage type="alert">
        Support alert message for customer
      </SupportMessage>,
    )

    expect(container).toMatchSnapshot()
  })

  it('type warning renders correctly', () => {
    const { container } = render(
      <SupportMessage type="warning">
        Support alert message for customer
      </SupportMessage>,
    )

    expect(container).toMatchSnapshot()
  })
})
