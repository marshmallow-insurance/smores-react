import React, {SFC, useState} from 'react';
import {TextInput} from './TextInput';

type Props = {};

const BasicForm: SFC<Props> = () => {
  const [value, setValue] = useState('');

  return (
    <form>
      <TextInput
        id="textInput"
        label="label"
        name="textInput"
        onChange={(str: string) => setValue(str)}
        placeholder="Placeholder"
        error={value.length > 7}
        errorMsg="Value is over 7 characters!"
        trailingIcon="contact-at"
        value={value}
      />
    </form>
  );
};

export default BasicForm;
