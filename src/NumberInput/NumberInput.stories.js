import React from 'react';
import {storiesOf} from '@storybook/react';

import {text, boolean} from '@storybook/addon-knobs';

import {NumberInput} from './NumberInput';
import {Container} from './Container.jsx';

storiesOf('NumberInput', module)
  .addWithJSX('default', () => (
    <NumberInput
      label="Number"
      id="total_amount"
      placeholder="0.00"
      onChange={str => {}}
    />
  ))
  .addWithJSX('number', () => (
    <NumberInput
      label="Number"
      type="number"
      placeholder="0.00"
      onChange={str => {}}
    />
  ))
  .addWithJSX('required', () => (
    <NumberInput
      label="Number"
      type="number"
      placeholder="0.00"
      required
      onChange={str => {}}
    />
  ))
  .addWithJSX('currency', () => (
    <NumberInput
      label="Total amount"
      type="number"
      placeholder="100.00"
      prefix={text('prefix', '£')}
      onChange={str => {}}
    />
  ))
  .addWithJSX('distance', () => (
    <NumberInput
      label="Total distance driven"
      type="number"
      placeholder="100.00"
      suffix={text('suffix', 'km')}
      onChange={str => {}}
    />
  ))
  .addWithJSX('telephone', () => (
    <NumberInput
      label="Telephone number"
      type="tel"
      placeholder="+44 7345 678910"
      onChange={str => {}}
    />
  ))
  .addWithJSX('functional', () => <Container />);
