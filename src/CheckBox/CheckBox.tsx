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
          <Text
            tag="span"
            typo="base"
            color={error ? 'strawberry' : 'liquorice'}
          >
            {children}
          </Text>

          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={toggle}
          />
          <Checkmark $error={error} />
        </BoxContainer>
        {error && errorMsg && <ErrorBox>{errorMsg}</ErrorBox>}
      </>
    )
  },
)

const Checkmark = styled.span<{ $error?: boolean }>`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border: ${({ $error }) =>
    $error
      ? `solid 2px ${theme.colors.strawberry}`
      : `solid 2px ${theme.colors.liquorice}`};
  box-sizing: border-box;
  border-radius: 1px;

  &:before {
    content: '';
    position: absolute;
    display: none;
    top: 9px;
    left: 5px;
    width: 3px;
    height: 8px;
    border-radius: 4px;
    background-color: ${theme.colors.cream};
    -webkit-transform: rotate(316deg);
    -ms-transform: rotate(316deg);
    transform: rotate(316deg);
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 3px;
    left: 11px;
    width: 3px;
    height: 15px;
    border-radius: 4px;
    background-color: ${theme.colors.cream};
    -webkit-transform: rotate(43deg);
    -ms-transform: rotate(43deg);
    transform: rotate(43deg);
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
    background-color: ${theme.colors.cream};

    &:checked ~ ${Checkmark} {
      background-color: ${theme.colors.liquorice};
      border: solid 2px ${theme.colors.liquorice};
    }

    &:checked ~ ${Checkmark}:before {
      display: block;
    }

    &:checked ~ ${Checkmark}:after {
      display: block;
    }

    ${focusOutline({ selector: `&:focus-visible ~ ${Checkmark}` })}
  }

  &:hover {
    ${Checkmark} {
      background-color: ${theme.colors.coconut};
      border: solid 2px ${theme.colors.liquorice};
    }
  }

  @media (min-width: 768px) {
    padding-left: 32px;
  }

  span {
    border-radius: 6px;
  }
`

const ErrorBox = styled.span`
  padding-top: 8px;
  font-size: 12px;
  color: ${theme.colors.strawberry};
`
