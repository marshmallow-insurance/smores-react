import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { MarginProps } from '../utils/space'
import { visuallyHidden } from '../utils/visuallyHidden'
import { focusOutline } from '../utils/focusOutline'

import { Box } from '../Box'
import { BaseValueType } from './types'

type RadioElementProps = {
  name: string
  id: string
  value: BaseValueType
  checked: boolean
  onChange: (value: BaseValueType) => void
  isError: boolean
} & MarginProps

export const RadioElement = forwardRef<HTMLInputElement, RadioElementProps>(
  function RadioElement({
    name,
    id,
    value,
    checked,
    onChange,
    isError,
    ...marginProps
  }) {
    return (
      <>
        <StyledInput
          type="radio"
          name={name}
          id={id}
          value={`${value}`}
          checked={checked}
          onChange={() => onChange(value)}
        />
        <RadioCircle isError={isError} checked={checked} {...marginProps} />
      </>
    )
  },
)

const StyledInput = styled.input`
  ${visuallyHidden}
`

const RADIO_SIZE = 24

const RadioCircle = styled(Box)<{ isError: boolean; checked: boolean }>`
  flex-shrink: 0;
  width: ${RADIO_SIZE}px;
  height: ${RADIO_SIZE}px;
  border-radius: ${RADIO_SIZE}px;
  background-color: ${theme.colors.white};
  border: 2px solid
    ${({ isError }) => (isError ? theme.colors.error : theme.colors.subtext)};

  ${({ checked, isError }) =>
    !checked &&
    !isError &&
    `
    &:hover {
      border: 2px solid ${theme.colors.secondary};
    }
  `}

  ${({ checked, isError }) =>
    checked &&
    `border: 8px solid ${
      isError ? theme.colors.error : theme.colors.secondary
    };`}

  ${focusOutline({ selector: `${StyledInput}:focus-visible + &` })}
`
