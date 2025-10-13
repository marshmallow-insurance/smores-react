import React from 'react'
import { render, screen } from '../testUtils'
import { Textarea } from './Textarea'
import { noop } from '../utils/noop'

describe('Textarea', () => {
  it('renders correctly with required props', () => {
    const { baseElement } = render(
      <Textarea value="Textarea label" onChange={noop} />,
    )

    expect(baseElement).toMatchSnapshot()

    expect(screen.getByText('Textarea label')).toBeTruthy()
  })
})
