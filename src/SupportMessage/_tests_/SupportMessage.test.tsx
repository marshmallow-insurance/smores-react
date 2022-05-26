import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { SupportMessage, SupportMessageProps } from '../SupportMessage'

const supportMessageProps: SupportMessageProps = {
  description: 'Type info support message',
  state: 'info',
}

describe('SupportMessage component', () => {
  const { findByText } = screen
  it('renders the correct content for type info', async () => {
    render(<SupportMessage {...supportMessageProps} />)

    expect(await findByText('Type info support message')).toBeInTheDocument()
  })

  it('renders the correct content for type info with title', async () => {
    render(<SupportMessage {...supportMessageProps} title="Info title" />)

    expect(await findByText('Type info support message')).toBeInTheDocument()
    expect(await findByText('Info title')).toBeInTheDocument()
  })
})
