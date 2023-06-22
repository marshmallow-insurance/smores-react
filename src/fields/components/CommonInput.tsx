import { Icon } from '../../Icon'
import styled from 'styled-components'
import { theme } from '../../theme'

interface IInput {
  error: boolean
  disabled: boolean
  step?: number
  value?: string
  frontIcon?: string
  trailingIcon?: string
  fallback?: boolean
}

interface SIcon {
  disabled: boolean
}

export const Input = styled.input<IInput>`
  border: none;
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
      error ? theme.colors.strawberry : theme.colors.marzipan};
  }
  background-color: ${({ fallback }) =>
    fallback ? theme.colors.custard : theme.colors.cream};
  border: 2px solid
    ${({ error }) => (error ? theme.colors.strawberry : theme.colors.oatmeal)};
  border-radius: 12px;
  height: auto;

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

export const StyledFrontIcon = styled(Icon)<SIcon>`
  position: relative;
  left: 36px;
  margin-left: -24px;
  z-index: 1;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  color: ${theme.colors.liquorice};
`

export const StyledTrailingIcon = styled(Icon)<SIcon>`
  position: relative;
  right: 36px;
  margin-right: -36px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`
