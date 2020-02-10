import React from 'react'
import { storiesOf } from '@storybook/react'

import { Message } from './Message'

storiesOf('Message', module)
  .addWithJSX('default', () => (
    <Message>This is a general infomation message</Message>
  ))
  .addWithJSX('info', () => (
    <Message type="info">This is an explicitly set infomation message</Message>
  ))
  .addWithJSX('warning', () => (
    <Message type="warning">This is an explicitly set warning message</Message>
  ))
