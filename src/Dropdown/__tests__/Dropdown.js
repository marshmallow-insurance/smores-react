import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {Dropdown} from '../Dropdown';

const days = [
  {
    label: 'Monday',
    value: 'Monday',
  },
  {
    label: 'Tuesday',
    value: 'Tuesday',
  },
  {
    label: 'Wednesday',
    value: 'Wednesday',
  },
  {
    label: 'Thursday',
    value: 'Thursday',
  },
  {
    label: 'Friday',
    value: 'Friday',
  },
  {
    label: 'Saturday',
    value: 'Saturday',
  },
  {
    label: 'Sunday',
    value: 'Sunday',
  },
];

test('renders', () => {
  const {container} = render(<Dropdown list={days} />);
  expect(container.firstChild).toMatchSnapshot();
});
