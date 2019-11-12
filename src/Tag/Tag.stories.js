import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Tag } from './Tag'
import { theme } from '../theme'

storiesOf('Tag', module).addWithJSX('default', () => (
  <Tag
    label={text('Label', 'Covered')}
    bgColor={theme.colors.green[500]}
    borderColor={theme.colors.green[700]}
    color={text('Color', 'white')}
    className={text('Class name', '')}
  />
))
