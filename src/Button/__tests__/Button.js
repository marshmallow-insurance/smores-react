import React from 'react';
import {render} from 'react-testing-library';
import 'jest-styled-components';

import {Button} from '../Button';

test('renders', () => {
  const {container} = render(<Button color="green" />);
  expect(container.firstChild).toMatchSnapshot();
});
