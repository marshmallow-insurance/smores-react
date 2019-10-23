import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {Tag} from '../Tag';

test('renders', () => {
  const {container} = render(
    <Tag label="Cancelled - Refunded Manually" color="red7" />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
