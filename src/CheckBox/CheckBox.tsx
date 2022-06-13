import React, { FC, ReactNode } from 'react'
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
  required?: boolean
}

export const CheckBox: FC<CheckBoxProps> = ({
  id: idProp,
  checked,
  children,
  toggle,
  error,
  errorMsg,
  required = false,
}) => {
  const id = useUniqueId(idProp)

  return (
    <>
      <BoxContainer id={id}>
        <LabelWrapper>
          <Text tag="span" typo="base" color={getColor(error, required)}>
            {children}
          </Text>
          {required && (
            <Text tag="p" typo="base-small" color="error">
              *
            </Text>
          )}
        </LabelWrapper>
        <input type="checkbox" checked={checked} onChange={toggle} />
        <Checkmark error={error} required={required} />
      </BoxContainer>
      {error && errorMsg && <ErrorBox>{errorMsg}</ErrorBox>}
    </>
  )
}

const getColor = (error: boolean | undefined, required: boolean) => {
  if (required && error) {
    return 'error'
  } else if (required) {
    return 'secondary'
  } else if (error) {
    return 'error'
  } else {
    return 'secondary'
  }
}

const Checkmark = styled.span<{ error?: boolean; required: boolean }>`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border: ${({ error, required }) =>
    required && !error
      ? `solid 1px ${theme.colors.secondary}`
      : `solid 1px ${theme.colors.error}`};
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

const LabelWrapper = styled.div`
  display: flex;
`
