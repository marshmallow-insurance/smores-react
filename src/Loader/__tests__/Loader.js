import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {Loader} from '../Loader';

test('renders', () => {
  const {container} = render(<Loader color="pink4" />);
  expect(container.firstChild).toMatchSnapshot();
});
