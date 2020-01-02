import React from 'react'
import { storiesOf } from '@storybook/react'

import { LabelledText } from './LabelledText'

storiesOf('LabelledText', module).addWithJSX('default', () => (
  <LabelledText label="Name">Hideo Kojima</LabelledText>
))
