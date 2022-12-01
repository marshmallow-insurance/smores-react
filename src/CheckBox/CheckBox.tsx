import React, { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'
import { focusOutline } from '../utils/focusOutline'

import { Text } from '../Text'
import { theme } from '../theme'
import { useUniqueId } from '../utils/id'

export type CheckBoxProps = {
  id?: string
  checked: boolean
  children: ReactNode
  toggle: () => void
  error?: boolean
  errorMsg?: string
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  function CheckBox(
    { id: idProp, checked, children, toggle, error, errorMsg },
    ref,
  ) {
    const id = useUniqueId(idProp)
    return (
      <>
        <BoxContainer id={id}>
          <Text tag="span" typo="base" color={error ? 'error' : 'secondary'}>
            {children}
          </Text>

          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={toggle}
          />
          <Checkmark error={error} />
        </BoxContainer>
        {error && errorMsg && <ErrorBox>{errorMsg}</ErrorBox>}
      </>
    )
  },
)

const Checkmark = styled.span<{ error?: boolean }>`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border: ${({ error }) =>
    error
      ? `solid 1px ${theme.colors.error}`
      : `solid 1px ${theme.colors.secondary}`};
  box-sizing: border-box;
  border-radius: 1px;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 3px;
    left: 7px;
    width: 5px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const BoxContainer = styled.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-left: 32px;
  user-select: none;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ ${Checkmark} {
      background-color: ${theme.colors.secondary};
      border: solid 1px ${theme.colors.secondary};
    }

    &:checked ~ ${Checkmark}:after {
      display: block;
    }

    ${focusOutline({ selector: `&:focus-visible ~ ${Checkmark}` })}
  }

  &:hover {
    ${Checkmark} {
      background-color: ${theme.colors.background};
      border: solid 1px ${theme.colors.secondary};
    }
  }

  @media (min-width: 768px) {
    padding-left: 32px;
  }
`

const ErrorBox = styled.span`
  padding-top: 8px;
  font-size: 12px;
  color: ${theme.colors.error};
`
