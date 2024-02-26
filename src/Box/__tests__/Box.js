import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {Box} from '../Box';

test('renders', () => {
  const {container} = render(
    <Box pb="16px" mt="32px" flex direction="column" />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
