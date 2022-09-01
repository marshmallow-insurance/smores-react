import React, { FC } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { MarginProps } from '../utils/space'
import { visuallyHidden } from '../utils/visuallyHidden'
import { focusOutline } from '../utils/focusOutline'

import { Box } from '../Box'

type RadioElementProps = {
  name: string
  id: string
  value: string
  checked: boolean
  onChange: (value: string) => void
  isError: boolean
} & MarginProps

export const RadioElement: FC<RadioElementProps> = ({
  name,
  id,
  value,
  checked,
  onChange,
  isError,
  ...marginProps
}) => {
  return (
    <>
      <StyledInput
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <RadioCircle isError={isError} {...marginProps} />
    </>
  )
}

const StyledInput = styled.input`
  ${visuallyHidden}
`

const RADIO_SIZE = 24

const RadioCircle = styled(Box)<{ isError: boolean }>`
  flex-shrink: 0;
  width: ${RADIO_SIZE}px;
  height: ${RADIO_SIZE}px;
  border-radius: ${RADIO_SIZE}px;
  background-color: ${theme.colors.white};
  border: 2px solid
    ${({ isError }) => (isError ? theme.colors.error : theme.colors.subtext)};

  &:hover {
    border: 2px solid ${theme.colors.secondary};
  }

  ${StyledInput}:checked + & {
    border: 8px solid
      ${({ isError }) =>
        isError ? theme.colors.error : theme.colors.secondary};
  }

  ${focusOutline({ selector: `${StyledInput}:focus-visible + &` })}
`
