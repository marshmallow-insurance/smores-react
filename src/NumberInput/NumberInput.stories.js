import React from 'react';
import {storiesOf} from '@storybook/react';

import {text, boolean, number} from '@storybook/addon-knobs';

import {NumberInput} from './NumberInput';
import {Container} from './Container.jsx';

storiesOf('NumberInput', module)
  .addWithJSX('default', () => (
    <NumberInput
      id={text('id', 'total_amount')}
      label={text('label', 'Number')}
      name={text('name', 'numberInput')}
      placeholder={text('placeholder', '0')}
      onChange={str => {}}
    />
  ))
  .addWithJSX('required', () => (
    <NumberInput
      id={text('id', 'total_amount')}
      label={text('label', 'Number')}
      name={text('name', 'numberInput')}
      placeholder={text('placeholder', '0')}
      required={boolean('required', true)}
      onChange={str => {}}
    />
  ))
  .addWithJSX('currency', () => (
    <NumberInput
      id={text('id', 'currency')}
      label={text('label', 'Currency')}
      name={text('name', 'currencyAmount')}
      placeholder={text('placeholder', '0.00')}
      prefix={text('prefix', '$')}
      roundCurrency={boolean('roundCurrency', true)}
      required={boolean('required', true)}
      step={number('step', 10)}
      onChange={str => {}}
    />
  ))
  .addWithJSX('strict currency', () => (
    <NumberInput
      id={text('id', 'currency')}
      label={text('label', 'Currency')}
      name={text('name', 'currencyAmount')}
      placeholder={text('placeholder', '0.00')}
      prefix={text('prefix', '$')}
      min={number('min', -100)}
      max={number('max', 1000)}
      strict={boolean('strict', true)}
      roundCurrency={boolean('roundCurrency', true)}
      required={boolean('required', true)}
      step={number('step', 10)}
      onChange={str => {}}
    />
  ))
  .addWithJSX('distance', () => (
    <NumberInput
      id={text('id', 'distance')}
      label={text('label', 'Distance')}
      name={text('name', 'distanceNumber')}
      placeholder={text('placeholder', '0')}
      suffix={text('suffix', 'km')}
      required={boolean('required', true)}
      step={number('step', 100)}
      onChange={str => {}}
    />
  ))
  .addWithJSX('telephone', () => (
    <NumberInput
      id={text('id', 'telephone')}
      label={text('label', 'Telephone number')}
      name={text('name', 'telephoneNumber')}
      placeholder={text('placeholder', ' 7123 456789')}
      prefix={text('prefix', '+44')}
      required={boolean('required', true)}
      onChange={str => {}}
    />
  ))
  .addWithJSX('functional', () => <Container />);
