import React from 'react'
import { storiesOf } from '@storybook/react'

import { Datepicker } from './Datepicker'

storiesOf('Datepicker', module).addWithJSX('default', () => (
  <Datepicker onDateSelect={() => {}} />
))
