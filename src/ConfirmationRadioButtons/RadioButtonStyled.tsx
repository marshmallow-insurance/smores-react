import React, { FC, ChangeEvent, FormEvent, ReactElement } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import { Box } from '../Box'

export interface FakeInput {
  checked?: boolean
  error?: boolean
}

type RadioButtonProps = {
  id: string
  label: string | ReactElement
  checked?: boolean
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FormEvent<HTMLInputElement>) => void
}

export const RadioButton: FC<RadioButtonProps> = ({
  id,
  label,
  checked,
  value,
  onChange,
  onBlur,
}: RadioButtonProps) => (
  <Box flex alignItems="center">
    <RadioInput
      id={id}
      type="radio"
      checked={checked}
      value={value}
      onChange={onChange}
      onBlur={(e: FormEvent<HTMLInputElement>) => {
        onBlur && onBlur(e)
      }}
    />
    <RadioLabel htmlFor={id}>
      <FakeInput checked={checked} />
      <Text>{label}</Text>
    </RadioLabel>
  </Box>
)

const FakeInput = styled.div<FakeInput>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  margin-right: 10px;
  border: ${({ checked }: FakeInput) =>
    checked
      ? `8px solid ${theme.colors.blue7}`
      : `1px solid ${theme.colors.blue7}`};
`

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

const RadioLabel = styled.label`
  font-family: 'Gordita', sans-serif;
  text-transform: none;
  font-size: 16px;
  line-height: 17px;
  color: ${theme.colors.blue7};
  margin-bottom: 0;
  display: flex;
  cursor: pointer;
`

// needed because the text is top aligned in its viewbox
const Text = styled.span`
  position: relative;
  bottom: -5px;
`
