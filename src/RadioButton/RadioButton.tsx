import React, {FC, ChangeEvent} from 'react';
import styled from 'styled-components';

import {Box} from '../Box';

import {theme} from '../theme';

type RadioButtonProps = {
  id: string;
  label: string;
  checked?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton: FC<RadioButtonProps> = ({
  id,
  label,
  checked,
  value,
  onChange,
}) => (
  <Box flex alignItems="center">
    <RadioInput
      id={id}
      type="radio"
      checked={checked}
      value={value}
      onChange={onChange}
    />

    <RadioLabel htmlFor={id}>
      <FakeInput checked={checked} />
      <Text>{label}</Text>
    </RadioLabel>
  </Box>
);

interface IFakeInput {
  checked?: boolean;
}

const FakeInput = styled.div<IFakeInput>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  margin-right: 10px;
  border: ${({checked}) =>
    checked
      ? `8px solid ${theme.colors.green[500]}`
      : `1px solid ${theme.colors.grey[400]}`};
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const RadioLabel = styled.label`
  font-family: 'Gordita', sans-serif;
  text-transform: none;
  font-size: 16px;
  line-height: 17px;
  color: ${theme.colors.blue[700]};
  margin-bottom: 0;
  display: flex;
  cursor: pointer;
`;

// Needed because the text is top aligned in its viewbox
const Text = styled.span`
  position: relative;
  bottom: -5px;
`;
