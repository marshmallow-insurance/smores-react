import React from 'react';
import { storiesOf } from '@storybook/react';

import { text } from '@storybook/addon-knobs';

import Card from '../Card';
import Text from '../Text';
import CardContent from './CardContent';

storiesOf('CardContent', module)
  .addWithJSX('default', () => (
    <Card>
      <CardContent>
        <Text tag='h1' weight='bold'>Default padding</Text>
      </CardContent>
    </Card>
  ))
  .addWithJSX('narrow', () => (
    <Card>
      <CardContent narrow>
        <Text tag='h3' weight='bold'>Narrow padding</Text>
      </CardContent>
    </Card>
  ))