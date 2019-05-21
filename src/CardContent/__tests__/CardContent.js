import React from 'react';
import {render} from 'react-testing-library';
import 'jest-styled-components';

import {CardContent} from '../CardContent';

test('renders', () => {
  const {container} = render(<CardContent>Text inside</CardContent>);
  expect(container.firstChild).toMatchSnapshot();
});
