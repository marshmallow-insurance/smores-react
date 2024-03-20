import React, { FC } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { theme } from '../theme'
import { focusOutline } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

type Props = {
  /** unique ID */
  id?: string
  /** checked flag  */
  checked: boolean
  /** onToggle listener  */
  onToggle: () => void
} & MarginProps

export const Toggle: FC<Props> = ({
  id,
  checked,
  onToggle,
  ...marginProps
}) => {
  return (
    <Switch forwardedAs="label" id={id} {...marginProps}>
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onToggle()
          }
        }}
      />
      <Slider />
    </Switch>
  )
}

const Switch = styled(Box)`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.oatmeal};
  border: none;
  border-radius: 28px;
  transition: 0.2s background-color;
  outline: none;

  &:hover {
    background-color: ${theme.colors.marzipan};
  }

  &:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: ${theme.colors.mascarpone};
    transition: 0.2s transform;
    border-radius: 50%;
  }
`

const Checkbox = styled.input`
  ${focusOutline({ selector: `&:focus-visible + ${Slider}` })}

  &:checked + ${Slider} {
    background-color: ${theme.colors.pistachio};
    border: none;
  }

  &:checked + ${Slider}:before {
    transform: translateX(24px);
  }
`
