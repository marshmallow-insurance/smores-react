import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Color, theme } from '../theme'
import { focusOutline } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

export type Props = {
  /** unique ID */
  id?: string
  /** checked flag  */
  checked: boolean
  disabled?: boolean
  /** onToggle listener  */
  onToggle: () => void
  bgColor?: Color
} & MarginProps

export const Toggle: FC<Props> = ({
  id,
  checked,
  onToggle,
  disabled,
  bgColor,
  ...marginProps
}) => {
  return (
    <Switch forwardedAs="label" htmlFor={id} {...marginProps}>
      <Checkbox
        id={id}
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        $bgColor={bgColor}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onToggle()
          }
        }}
        aria-label="toggle"
      />
      <Slider $disabled={disabled} />
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

const Slider = styled.span<{ $disabled?: boolean }>`
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

  ${({ $disabled }) =>
    $disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          &:hover {
            background-color: ${theme.colors.marzipan};
          }
        `}
`

const Checkbox = styled.input<{ $bgColor?: Color }>`
  ${focusOutline({ selector: `&:focus-visible + ${Slider}` })}

  &:checked + ${Slider} {
    background-color: ${(props) =>
      props.$bgColor ? theme.colors[props.$bgColor] : theme.colors.pistachio};
    border: none;
  }

  &:checked + ${Slider}:before {
    transform: translateX(24px);
  }
`
