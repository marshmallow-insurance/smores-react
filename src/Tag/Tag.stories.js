import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

import {Tag} from './Tag';

storiesOf('Tag', module).addWithJSX('default', () => (
  <Tag
    label={text('Label', 'Covered')}
    bgColor={text('Background color', 'green5')}
    borderColor={text('Border color', 'green7')}
    color={text('Color', 'white')}
    className={text('Class name', '')}
  />
));
