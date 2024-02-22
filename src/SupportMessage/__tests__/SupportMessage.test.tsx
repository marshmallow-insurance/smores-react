import { render, screen } from '@testing-library/react'

import React from 'react'
import { Link } from '../../Link'
import { SupportMessage, SupportMessageProps } from '../SupportMessage'

const supportMessageProps: SupportMessageProps = {
  description: 'Type info support message',
  type: 'info',
}

describe('SupportMessage component', () => {
  const { findByText } = screen
  it('renders the correct content for type info', async () => {
    render(<SupportMessage {...supportMessageProps} />)

    expect(await findByText('Type info support message')).toBeTruthy()
  })

  it('renders the correct content for type info with title', async () => {
    render(<SupportMessage {...supportMessageProps} title="Info title" />)

    expect(await findByText('Type info support message')).toBeTruthy()
    expect(await findByText('Info title')).toBeTruthy()
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
