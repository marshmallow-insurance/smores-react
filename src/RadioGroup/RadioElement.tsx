import React, { FocusEvent, forwardRef } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { focusOutline } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'
import { visuallyHidden } from '../utils/visuallyHidden'

import { Box } from '../Box'
import { BaseValueType } from './types'

type RadioElementProps = {
  name: string
  id: string
  value: BaseValueType
  checked: boolean
  onChange: (value: BaseValueType) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  isError: boolean
  isDisabled?: boolean
} & MarginProps

export const RadioElement = forwardRef<HTMLInputElement, RadioElementProps>(
  function RadioElement(
    {
      name,
      id,
      value,
      isDisabled,
      checked,
      onChange,
      onBlur,
      isError,
      ...marginProps
    },
    ref,
  ) {
    return (
      <>
        <StyledInput
          ref={ref}
          type="radio"
          name={name}
          id={id}
          value={`${value}`}
          checked={checked}
          onChange={() => onChange(value)}
          onBlur={onBlur}
          disabled={isDisabled}
        />
        <RadioCircle $isError={isError} $checked={checked} {...marginProps} />
      </>
    )
  },
)

const StyledInput = styled.input`
  ${visuallyHidden}
`

const RADIO_SIZE = 24

const RadioCircle = styled(Box)<{ $isError: boolean; $checked: boolean }>`
  flex-shrink: 0;
  width: ${RADIO_SIZE}px;
  height: ${RADIO_SIZE}px;
  border-radius: ${RADIO_SIZE}px;
  background-color: ${theme.colors.cream};
  border: 2px solid
    ${({ $isError }) =>
      $isError ? theme.colors.strawberry : theme.colors.sesame};

  ${({ $checked, $isError }) =>
    !$checked &&
    !$isError &&
    `
    &:hover {
      border: 2px solid ${theme.colors.liquorice};
    }
  `}

  ${({ $checked, $isError }) =>
    $checked &&
    `border: 8px solid ${
      $isError ? theme.colors.strawberry : theme.colors.liquorice
    };`}

  ${focusOutline({ selector: `${StyledInput}:focus-visible + &` })}
`
