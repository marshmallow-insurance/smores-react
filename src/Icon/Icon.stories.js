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
    mt={text('Margin-top', '0')}
    mr={text('Margin-right', '0')}
    mb={text('Margin-bottom', '0')}
    ml={text('Margin-left', '0')}
  />
))
