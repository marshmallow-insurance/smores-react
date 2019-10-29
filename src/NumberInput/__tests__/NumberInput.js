import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {NumberInput} from '../NumberInput';

test('renders', () => {
  const {container} = render(<NumberInput />);
  expect(container.firstChild).toMatchSnapshot();
});
