import React from 'react'
import { storiesOf } from '@storybook/react'

import { boolean } from '@storybook/addon-knobs'

import { RadioButton } from './RadioButton'
import { Container } from './Container'

storiesOf('RadioButton', module)
  .addWithJSX('default', () => (
    <RadioButton
      id="radioButton"
      label="What a lovely label"
      value="radioButton"
      onChange={str => {}}
      checked={boolean('checked', false)}
    />
  ))
  .addWithJSX('checked', () => (
    <RadioButton
      id="radioButton"
      label="What a lovely label"
      value="radioButton"
      onChange={str => {}}
      checked={boolean('checked', true)}
    />
  ))
  .addWithJSX('functional', () => <Container />)
