import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, number } from '@storybook/addon-knobs';

import { Text } from './Text';

storiesOf('Text', module)
  .addWithJSX('default', () => (
    <Text>The quick brown fox jumps over the lazy dog</Text>
  ))
  .addWithJSX('tweaked', () => (
    <Text
      tag={text('Tag', 'h1')}
      color={text('Color', 'pink5')}
      wSize={number('Font-size', 28)}
      weight={text('Font-weight', 'normal')}
      align={text('Text-align', 'left')}
      cursor={text('Cursor', 'auto')}
      >
      The quick brown fox jumps over the lazy dog
    </Text>
  ))
  .addWithJSX('header-large', () => (
    <Text
      tag={text('Tag', 'h2')}
      typo="header-large"
      >
      The quick brown fox jumps over the lazy dog
    </Text>
  ))
  .addWithJSX('desc-medium', () => (
    <Text
      tag={text('Tag', 'p')}
      typo="desc-medium"
      >
      The quick brown fox jumps over the lazy dog
    </Text>
  ))
  .addWithJSX('label', () => (
    <Text
      tag={text('Tag', 'label')}
      typo="label"
      >
      The quick brown fox jumps over the lazy dog
    </Text>
  ))