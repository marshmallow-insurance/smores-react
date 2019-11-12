import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import { Icon } from './Icon'

storiesOf('Icon', module).addWithJSX('default', () => (
  <Icon
    render={text('Render', 'at')}
    size={number('Size (in px)', 32)}
    color={text('Color', '#112035')}
    rotate={number('Rotate', 0)}
  />
))
