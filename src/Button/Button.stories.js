import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './Button'

storiesOf('Button', module)
  .addWithJSX('default', () => <Button color="blue">Me Button</Button>)
  .addWithJSX('coloured', () => <Button color="green">Coloured Button</Button>)
  .addWithJSX('inverted', () => <Button inverted>Me Button</Button>)
  .addWithJSX('outlined', () => <Button outlined>Outlined</Button>)
  .addWithJSX('disabled', () => (
    <Button color="blue" disabled>
      Me Button
    </Button>
  ))
  .addWithJSX('block', () => <Button block>Me Button</Button>)
  .addWithJSX('clickable', () => (
    <Button handleSubmit={() => console.log('clicked')}>Click me</Button>
  ))
