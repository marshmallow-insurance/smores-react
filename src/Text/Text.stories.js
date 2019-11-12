import React from 'react'
import { storiesOf } from '@storybook/react'

import { text } from '@storybook/addon-knobs'

import { Text } from './Text'
import { theme } from '../theme'

storiesOf('Text', module)
  .addWithJSX('default', () => (
    <Text>The quick brown fox jumps over the lazy dog</Text>
  ))
  .addWithJSX('tweaked', () => (
    <Text
      tag={text('Tag', 'h1')}
      color={theme.colors.pink[500]}
      align={text('Text-align', 'left')}
      cursor={text('Cursor', 'auto')}
    >
      The quick brown fox jumps over the lazy dog
    </Text>
  ))
  .addWithJSX('header-large', () => (
    <Text tag={text('Tag', 'h2')} typo="header-large">
      The quick brown fox jumps over the lazy dog
    </Text>
  ))
  .addWithJSX('desc-medium', () => (
    <Text tag={text('Tag', 'p')} typo="desc-medium">
      The quick brown fox jumps over the lazy dog
    </Text>
  ))
  .addWithJSX('label', () => (
    <Text tag={text('Tag', 'label')} typo="label">
      The quick brown fox jumps over the lazy dog
    </Text>
  ))
