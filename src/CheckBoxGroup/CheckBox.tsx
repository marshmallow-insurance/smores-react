import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { theme } from '../theme'

type Props = {
  id: string
  checked: boolean
  children: ReactNode
  toggle: () => void
}

export const CheckBox: FC<Props> = ({ id, checked, children, toggle }) => (
  <BoxContainer id={id}>
    <Text tag="span" typo="base">
      {children}
    </Text>

    <input type="checkbox" checked={checked} onChange={toggle} />
    <Checkmark />
  </BoxContainer>
)

const Checkmark = styled.span`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border: solid 1px ${theme.colors.secondary};
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
