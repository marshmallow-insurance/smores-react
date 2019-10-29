import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {NumberInput} from '../NumberInput';

test('renders', () => {
  const {container} = render(
    <NumberInput
      id="numberInput"
      label="Amount paid"
      name="numberInput"
      value=""
      onChange={str => {}}
      placeholder="100.00"
      prefix="$"
      prefix="km"
      min={-100}
      max={180}
      strict
      roundCurrency
      required
      step={10}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
