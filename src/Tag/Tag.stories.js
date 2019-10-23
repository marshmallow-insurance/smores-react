import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

import {Tag} from './Tag';

storiesOf('Tag', module).addWithJSX('default', () => (
  <Tag
    label={text('Label', 'Cancelled - Refund Due')}
    color={text('Color', 'red7')}
  />
));
