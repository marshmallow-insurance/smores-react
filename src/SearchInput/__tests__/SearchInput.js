import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {SearchInput} from '../SearchInput';

const list = [
  {
    label: 'Monday',
  },
  {
    label: 'Tuesday',
  },
  {
    label: 'Wednesday',
  },
  {
    label: 'Thursday',
  },
  {
    label: 'Friday',
  },
  {
    label: 'Saturday',
  },
  {
    label: 'Sunday',
  },
];

test('renders', () => {
  const {container} = render(
    <SearchInput id="days" label="Days" searchList={list} onFound={() => {}} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
