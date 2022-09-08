import React, { FC, ChangeEvent } from 'react'
import styled from 'styled-components'
import { focusOutline } from '../utils/focusOutline'

import { Box } from '../Box'

import { theme } from '../theme'
import { useUniqueId } from '../utils/id'
import { MarginProps } from '../utils/space'
import { useDeprecatedWarning } from '../utils/deprecated'

interface IFakeInput {
  checked?: boolean
}

export type RadioButtonProps = {
  id?: string
  label: string
  checked?: boolean
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & MarginProps

export const RadioButton: FC<RadioButtonProps> = (props) => {
  const { id: idProp, label, checked, value, onChange, ...marginProps } = props

  useDeprecatedWarning({
    title: 'RadioButton',
    message:
      'The RadioButton component has been deprecated. Please use the new RadioGroup component instead.',
    componentProps: props,
  })

  const id = useUniqueId(idProp)

  return (
    <Box flex alignItems="center" {...marginProps}>
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
  )
}

const FakeInput = styled.div<IFakeInput>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  margin-right: 10px;
  border: ${({ checked }) =>
    checked
      ? `8px solid ${theme.colors.success}`
      : `1px solid ${theme.colors.outline}`};
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

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  ${focusOutline({
    selector: `&:focus-visible ~ ${RadioLabel} ${FakeInput}`,
  })}
`

// needed because the text is top aligned in its viewbox
const Text = styled.span`
  position: relative;
  bottom: -5px;
`
