import React from 'react';
import {storiesOf} from '@storybook/react';

import {text} from '@storybook/addon-knobs';

import {Icon} from './Icon';

storiesOf('Icon', module).addWithJSX('default', () => (
  <Icon
    render={text('Render', 'contact-at')}
    size={text('Size (in px)', '32')}
    color={text('Color', 'blue7')}
  />
));
