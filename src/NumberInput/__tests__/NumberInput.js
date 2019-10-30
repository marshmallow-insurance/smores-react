import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {NumberInput} from '../NumberInput';

test('renders - tel', () => {
  const {container} = render(
    <NumberInput
      type="tel"
      id="tel"
      label="Telephone number"
      name="telephoneNumber"
      value=""
      onChange={str => {}}
      placeholder="07446875876"
      prefix="+44"
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders - number', () => {
  const {container} = render(
    <NumberInput
      type="number"
      id="numberInput"
      label="Number"
      name="numberInput"
      value=""
      onChange={str => {}}
      placeholder="0.00"
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders - currency', () => {
  const {container} = render(
    <NumberInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value=""
      onChange={str => {}}
      placeholder="100.00"
      prefix="$"
      strict={true}
      min={0}
      max={100}
      step={10}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
