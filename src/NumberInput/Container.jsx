import React, {useState} from 'react';

import {NumberInput} from './NumberInput';

export const Container = () => {
  const [value, setValue] = useState('');

  return (
    <form>
      <NumberInput
        id="numberInput"
        label="Amount paid"
        name="numberInput"
        onChange={setValue}
        placeholder="100.00"
        prefix="$"
        value={value}
        min={-100}
        max={180}
        strict
        roundCurrency
        required
        step={10}
      />
    </form>
  );
};
