import React from 'react';
import {storiesOf} from '@storybook/react';

import {text, number} from '@storybook/addon-knobs';

import {Card} from '../Card';
import {Text} from '../Text';

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
  .addWithJSX('margins', () => (
    <>
      <Text tag="h3">Before margin</Text>
      <Card
        className="container"
        marginX={number('Margin X', 50)}
        marginY={number('Margin Y', 30)}
      >
        <Text tag="h3">Card with margin</Text>
      </Card>
      <Text tag="h3">After margin</Text>
    </>
  ));
