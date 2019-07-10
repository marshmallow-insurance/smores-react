import React from 'react';
import {storiesOf} from '@storybook/react';

import {number, text} from '@storybook/addon-knobs';

import {Loader} from '../Loader';

storiesOf('Loader', module)
  .addWithJSX('default', () => (
    <Loader height={`${number('height', '32')}px`} />
  ))
  .addWithJSX('big and blue', () => (
    <Loader
      height={`${number('height', '54')}px`}
      color={text('color', 'blue6')}
    />
  ));
