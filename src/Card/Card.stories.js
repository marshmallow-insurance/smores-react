import React from 'react';
import {storiesOf} from '@storybook/react';

import {Card} from '../Card';
import {Text} from '../Text';

storiesOf('Card', module)
  .addWithJSX('default', () => (
    <Card>
      <Text tag="h1" weight="bold">
        Default padding
      </Text>
    </Card>
  ))
  .addWithJSX('max width', () => (
    <>
      <Card>
        <Text tag="h3" weight="bold">
          Very very very very long card without max width
        </Text>
      </Card>
      <Card maxWidth="250px">
        <Text tag="h3" weight="bold">
          Very very very very long card with max width
        </Text>
      </Card>
    </>
  ))
  .addWithJSX('margins', () => (
    <>
      <Text tag="h3" weight="bold">
        Before margin
      </Text>
      <Card className="container" marginX="50px" marginY="30px">
        <Text tag="h3" weight="bold">
          Card with margin
        </Text>
      </Card>
      <Text tag="h3" weight="bold">
        After margin
      </Text>
    </>
  ));
