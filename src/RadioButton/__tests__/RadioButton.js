import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {RadioButton} from '../RadioButton';

test('renders - checked', () => {
  const {container} = render(
    <RadioButton
      id="radioButtonOne"
      label="What a lovely label"
      value={true}
      checked={true}
      onChange={str => {}}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders - unchecked', () => {
  const {container} = render(
    <RadioButton
      id="radioButtonOne"
      label="What a lovely label"
      value={false}
      checked={false}
      onChange={str => {}}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
