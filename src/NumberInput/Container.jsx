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
        // error={value.length > 7}
        // errorMsg="Value is over 7 characters!"
        prefix="£"
        value={value}
        min={-10}
        max={100}
        strict
        roundCurrency
        required
      />
    </form>
  );
};
