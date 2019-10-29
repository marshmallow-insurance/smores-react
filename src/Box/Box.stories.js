import React from 'react';
import {storiesOf} from '@storybook/react';

import {text, boolean} from '@storybook/addon-knobs';

import {Box} from './Box';

storiesOf('Box', module).addWithJSX('default', () => (
  <Box
    flex={boolean('flex', true)}
    direction={text('direction', 'row')}
    justifyContent={text('justifyContent', 'space-between')}
    alignItems={text('alignItems', 'center')}
    m={text('margin', '16px')}
    p={text('padding', '16px')}
  >
    Some lovely content.
  </Box>
));
