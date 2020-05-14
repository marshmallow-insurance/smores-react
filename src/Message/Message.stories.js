import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import { Message } from './Message'

storiesOf('Message', module)
  .addWithJSX('default', () => (
    <Message>This is a general infomation message</Message>
  ))
  .addWithJSX('info', () => (
    <Message type="info" inverted={boolean('inverted', false)}>
      This is an explicitly set infomation message
    </Message>
  ))
  .addWithJSX('warning', () => (
    <Message type="warning" inverted={boolean('inverted', false)}>
      This is an explicitly set warning message
    </Message>
  ))
  .addWithJSX('icon placement', () => (
    <Message type="warning" alignIcon={text('alignIcon', 'flex-start')}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem justo,
      interdum eget condimentum ut, porttitor ac erat. Vivamus leo lectus,
      condimentum at enim in, volutpat pretium nibh. Quisque convallis lorem
      tristique magna auctor, in luctus turpis finibus. Sed vel sagittis augue.
      Morbi at erat molestie, vehicula leo sed, scelerisque quam. Integer eget
      purus vel diam elementum commodo nec nec sem. Quisque non volutpat nulla.
      Suspendisse non faucibus sem. Nullam pellentesque dui neque, eget
      pellentesque felis molestie et. Nulla mi nibh, maximus eu ultricies ut,
      tristique nec magna. Fusce consectetur urna sem, vitae ornare nulla
      laoreet vitae. Etiam a tincidunt mauris, eu tincidunt lacus. In semper
      magna est, ut congue diam lobortis ut. Sed quis nisl sed mauris ornare
      consequat. Pellentesque sit amet nulla ut urna sagittis varius. Nunc enim
      nisi, tincidunt sed nisl at, bibendum ultricies ipsum.
    </Message>
  ))
