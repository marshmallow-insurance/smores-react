import React, {useState} from 'react';

import {RadioButton} from './RadioButton';

export const Container = () => {
  const [checked, setChecked] = useState('');

  return (
    <form>
      <RadioButton
        id="radioButtonOne"
        label="What a lovely label"
        value={checked}
        onChange={() => setChecked('radioButtonOne')}
        checked={checked === 'radioButtonOne'}
      />

      <RadioButton
        id="radioButtonTwo"
        label="What a lovely second label"
        value={checked}
        onChange={() => setChecked('radioButtonTwo')}
        checked={checked === 'radioButtonTwo'}
      />
    </form>
  );
};
