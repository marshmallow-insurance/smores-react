import { Box } from '../Box'
import React from 'react'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../theme'

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
      isSelected={isSelected}
      data-testId={`value-toggle-${value}`}
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

const Wrapper = styled(Box)<{ isSelected: boolean; isDisabled: boolean }>`
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
  z-index: 3;
  text-align: center;
  font-weight: ${theme.font.weight.medium};
  ${({ isSelected }) => isSelected && `color: ${theme.colors.cream};`}
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
