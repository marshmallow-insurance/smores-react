import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, number, boolean } from '@storybook/addon-knobs'

import { Card } from '../Card'
import { Text } from '../Text'

storiesOf('Card', module)
  .addWithJSX('default', () => (
    <Card>
      <Text tag="h1">Default padding</Text>
    </Card>
  ))
  .addWithJSX('max width', () => (
    <>
      <Card>
        <Text tag="h3">Very very very very long card without max width</Text>
      </Card>
      <Card maxWidth={text('Max Width', '250px')}>
        <Text tag="h3">Very very very very long card with max width</Text>
      </Card>
    </>
  ))
  .addWithJSX('narrow/wide padding', () => (
    <Card narrow={boolean('Narrow', false)} wide={boolean('Wide', true)}>
      <Text tag="h3">Narrow or Wide padding</Text>
    </Card>
  ))
  .addWithJSX('margins', () => (
    <>
      <Text tag="h3">Before margin</Text>
      <Card
        className="container"
        marginX={number('Margin X', '50px')}
        marginY={number('Margin Y', '30px')}
      >
        <Text tag="h3">Card with margin</Text>
      </Card>
      <Text tag="h3">After margin</Text>
    </>
  ))
