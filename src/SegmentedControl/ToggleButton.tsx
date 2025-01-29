import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Box'

type ToggleButtonProps<Value> = {
  name: string
  value: Value
  onChange: (value: Value) => void
  isSelected: boolean
  isDisabled?: boolean
  children: ReactNode
}

export const ToggleButton = <Value,>({
  name,
  value,
  onChange,
  isSelected,
  isDisabled = false,
  children,
}: ToggleButtonProps<Value>) => {
  return (
    <Wrapper
      as="label"
      data-testId={`value-toggle-${String(value)}`}
      isDisabled={isDisabled}
    >
      <VisuallyHiddenInput
        type="radio"
        name={name}
        checked={isSelected}
        onClick={() => onChange(value)}
        onChange={() => onChange(value)}
      />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled(Box)<{ isDisabled: boolean }>`
  cursor: pointer;
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
  padding: 10px 14px;
  transition: color 0.1s linear;
  height: fit-content;
  width: 100%;
  align-content: center;
  z-index: 3;
`

const VisuallyHiddenInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
