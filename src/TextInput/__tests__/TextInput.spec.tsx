import { render } from '@testing-library/react'
import React from 'react'

import { TextInput } from '../TextInput'

test('renders', () => {
  const { container } = render(
    <TextInput
      id="textInput"
      name="textInput"
      placeholder="Placeholder"
      value=""
      onChange={(str) => console.log(str)}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
