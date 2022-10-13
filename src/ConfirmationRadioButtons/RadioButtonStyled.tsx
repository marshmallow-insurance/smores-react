import React, { FC, ChangeEvent, FocusEvent, ReactElement } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

export interface FakeInput {
  checked?: boolean
  error?: boolean
  disabled?: boolean
}

type RadioButtonProps = {
  id: string
  label: string | ReactElement
  checked?: boolean
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  disabled?: boolean
}

export const RadioButton: FC<RadioButtonProps> = ({
  id,
  label,
  checked,
  value,
  onChange,
  onBlur,
  disabled = false,
}: RadioButtonProps) => (
  <InputContainer>
    <RadioInput
      id={id}
      type="radio"
      checked={checked}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
    <RadioLabel htmlFor={id}>
      <FakeInput checked={checked} />
      <Text>{label}</Text>
    </RadioLabel>
  </InputContainer>
)

const FakeInput = styled.div<FakeInput>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  margin-right: 10px;
  border: ${({ checked }: FakeInput) =>
    checked
      ? `8px solid ${theme.colors.secondary}`
      : `1px solid ${theme.colors.secondary}`};
`

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

const InputContainer = styled.label`
  display: flex
  alignItems: center;
`

const RadioLabel = styled.label`
  font-family: 'Gordita', sans-serif;
  text-transform: none;
  font-size: 16px;
  line-height: 17px;
  color: ${theme.colors.secondary};
  margin-bottom: 0;
  display: flex;
  cursor: pointer;
`

// needed because the text is top aligned in its viewbox
const Text = styled.span`
  position: relative;
  bottom: -5px;
`
