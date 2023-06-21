import { Icon } from '../../Icon'
import { darken } from 'polished'
import styled from 'styled-components'
import { theme } from '../../theme'

interface IInput {
  error: boolean
  disabled: boolean
  step?: number
  value?: string
  frontIcon?: string
  trailingIcon?: string
}

export const Input = styled.input<IInput>`
  border: none;
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'strawberry' : 'chia'}`]};
  background-color: transparent;
  color: ${({ error }) =>
    theme.colors[`${error ? 'strawberry' : 'liquorice'}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  padding: 18px 14px;
  &:hover,
  &:focus-within {
    border-color: ${({ error }) =>
      error ? theme.colors.strawberry : darken(0.1, theme.colors.chia)};
  }
  background-color: ${theme.colors.cream};
  border: 2px solid
    ${({ error }) => (error ? theme.colors.strawberry : theme.colors.chia)};
  border-radius: 12px;
  height: auto;

  ${({ value }) =>
    value &&
    value != '' &&
    `
      border-color: ${theme.colors.chia};
    `}

  ${({ frontIcon }) =>
    frontIcon &&
    frontIcon != '' &&
    `
      padding-left: 42px;
    `}

  ${({ trailingIcon }) =>
    trailingIcon &&
    trailingIcon != '' &&
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
    color: ${theme.colors.sesame};
  }
`

export const StyledFrontIcon = styled(Icon)`
  position: relative;
  left: 36px;
  margin-left: -24px;
  z-index: 1;
`

export const StyledTrailingIcon = styled(Icon)`
  position: relative;
  right: 36px;
  margin-right: -36px;
`
