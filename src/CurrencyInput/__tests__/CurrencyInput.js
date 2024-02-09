import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {CurrencyInput} from '../CurrencyInput';
import { CurrencyInput } from 'CurrencyInput/CurrencyInput';

test('renders - number', () => {
  const {container} = render(
    <CurrencyInput
      type="number"
      id="CurrencyInput"
      label="Number"
      name="CurrencyInput"
      value=""
      onChange={str => {}}
      placeholder="0.00"
      required={true}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders - error', () => {
  const {container} = render(
    <CurrencyInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value="200"
      onChange={str => {}}
      placeholder="100.00"
      prefix="$"
      strict={true}
      min={0}
      max={100}
      step={10}
      roundCurrency={false}
      error={true}
      errorMsg="Oh gosh, this is an error isn't it!"
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders - disabled', () => {
  const {container} = render(
    <CurrencyInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value=""
      onChange={str => {}}
      placeholder="100.00"
      disabled={true}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
