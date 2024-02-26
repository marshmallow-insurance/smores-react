import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { SupportMessage, SupportMessageProps } from './SupportMessage'
import { Link } from '../Link'

const supportMessageProps: SupportMessageProps = {
  description: 'Type info support message',
  type: 'info',
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

  it('Renders a Link within the description', () => {
    const { container } = render(
      <>
        Some text rendered with a <Link href={''}>Link</Link>{' '}
      </>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
