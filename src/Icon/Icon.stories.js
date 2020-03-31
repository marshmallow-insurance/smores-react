import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, number } from '@storybook/addon-knobs'

import { Icon } from './Icon'

storiesOf('Icon', module).addWithJSX('default', () => (
  <Icon
    render={text('Render', 'info')}
    size={number('Size (in px)', 32)}
    color={text('Color', 'blue7')}
    rotate={number('Rotate', 0)}
    mt={text('margin-top', '0')}
    mr={text('margin-right', '0')}
    mb={text('margin-bottom', '0')}
    ml={text('margin-left', '0')}
  />
))
