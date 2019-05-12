import React from 'react';
import { storiesOf } from '@storybook/react';

import { text } from '@storybook/addon-knobs';

import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX('default', () => (
    <Button color='blue'>
      Me Button
    </Button>
  ))
  .addWithJSX('grey', () => (
    <Button color='grey'>
      Me Button
    </Button>
  ))
  .addWithJSX('green', () => (
    <Button color='green'>
      Green Button
    </Button>
  ))
  .addWithJSX('pink', () => (
    <Button color='pink'>
      Pink Button
    </Button>
  ))
  .addWithJSX('inverted', () => (
    <Button 
      color={text('Color', 'blue')} 
      inverted
    >
      Me Button
    </Button>
  ))
  .addWithJSX('disabled', () => (
    <Button 
      color={text('Color', 'blue')}
      disabled
    >
      Me Button
    </Button>
  ))
  .addWithJSX('block', () => (
    <Button 
      color={text('Color', 'blue')}
      block
    >
      Me Button
    </Button>
  ))