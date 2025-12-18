import styled, { css } from 'styled-components'
import { Icon, Icons } from '../../Icon'
import { IconContainer } from '../../sharedStyles/shared.styles'

interface IInput {
  $error?: boolean
  disabled?: boolean
  selected?: boolean
  step?: number
  value?: string
  $frontIcon?: Icons
  $trailingIcon?: Icons
  $fallbackStyle?: boolean
}

interface SIcon {
  $disabled?: boolean
}

export const Input = styled.input<IInput>`
  border: none;
  color: ${({ $error, theme }) =>
    $error ? theme.color.feedback.negative[200] : theme.color.text.base};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  padding: 18px 14px;
  background-color: ${({ $fallbackStyle, theme }) =>
    $fallbackStyle
      ? theme.color.surface.base[300]
      : theme.color.background['000']};
  border: 2px solid
    ${({ $error, theme }) =>
      $error ? theme.color.feedback.negative[200] : theme.color.border.subtle};

  ${({ disabled, $error, theme }) =>
    !disabled &&
    !$error &&
    css`
      &:hover,
      &:focus-within {
        border-color: ${theme.color.border.base};
      }
    `}

  border-radius: 12px;
  height: auto;

  ${({ $frontIcon }) =>
    $frontIcon &&
    `
      padding-left: 42px;
    `}

  ${({ $trailingIcon }) =>
    $trailingIcon &&
    `
      padding-right: 42px;
    `}

  /* Remove the spinner on Firefox and Webkit browsers */
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.text.subtle};
  }

  &:-webkit-autofill {
    animation-name: onAutoFillStart;
    animation-duration: 2s;
  }

  @keyframes onAutoFillStart {
    from {
      background-color: inherit;
    }
    to {
      background-color: inherit;
    }
  }
`

export const InputLeadingIconContainer = styled(IconContainer)<SIcon>`
  position: relative;
  left: 36px;
  margin-left: -24px;
  z-index: 1;
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  color: ${({ theme }) => theme.color.text.base};
`

export const StyledFrontIcon = styled(Icon)<SIcon>`
  position: relative;
  left: 36px;
  margin-left: -24px;
  z-index: 1;
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  color: ${({ theme }) => theme.color.text.base};
`

export const StyledTrailingIcon = styled(Icon)<SIcon>`
  position: relative;
  right: 36px;
  margin-right: -36px;
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  color: ${({ theme }) => theme.color.text.base};
`

export const InputTrailingIconContainer = styled(IconContainer)<SIcon>`
  position: relative;
  right: 36px;
  margin-right: -36px;
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  color: ${({ theme }) => theme.color.text.base};
`
