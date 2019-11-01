import React from 'react';
import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import {Button} from './Button';
import {theme} from '../theme';

storiesOf('Button', module)
  .addWithJSX('default', () => (
    <Button color={theme.colors.blue[500]}>Me Button</Button>
  ))
  .addWithJSX('coloured', () => (
    <Button color={theme.colors.green[500]}>Coloured Button</Button>
  ))
  .addWithJSX('inverted', () => <Button inverted>Me Button</Button>)
  .addWithJSX('outlined', () => <Button outlined>Outlined</Button>)
  .addWithJSX('disabled', () => (
    <Button color={theme.colors.blue[500]} disabled>
      Me Button
    </Button>
  ))
  .addWithJSX('block', () => <Button block>Me Button</Button>)
  .addWithJSX('clickable', () => (
    <Button handleSubmit={() => console.log('clicked')}>Click me</Button>
  ));
