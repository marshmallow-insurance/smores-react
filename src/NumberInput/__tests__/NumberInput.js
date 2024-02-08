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
      required={false}
      disabled={false}
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
      required={true}
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
      value="50"
      onChange={str => {}}
      placeholder="100.00"
      prefix="$"
      min={0}
      max={100}
      step={10}
      roundCurrency={true}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders - error', () => {
  const {container} = render(
    <NumberInput
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

test('renders - with trailing icon', () => {
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
      trailingIcon="at"
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders - with suffix', () => {
  const {container} = render(
    <NumberInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value=""
      onChange={str => {}}
      placeholder="100.00"
      suffix="miles"
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders - disabled', () => {
  const {container} = render(
    <NumberInput
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
