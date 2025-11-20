import { FC } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { focusOutline } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'
import {
  ColorTypes,
  resolveToThemeColor,
} from '../ThemeProvider/utils/colourMap'

export type Props = {
  /** unique ID */
  id?: string
  /** checked flag  */
  checked: boolean
  disabled?: boolean
  /** onToggle listener  */
  onToggle: () => void
  bgColor?: ColorTypes
} & MarginProps

export const Toggle: FC<Props> = ({
  id,
  checked,
  onToggle,
  disabled,
  bgColor,
  ...marginProps
}) => {
  const theme = useTheme()

  const resolvedBgColor = bgColor
    ? resolveToThemeColor(bgColor, theme)
    : undefined

  return (
    <Switch forwardedAs="label" htmlFor={id} {...marginProps}>
      <Checkbox
        id={id}
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        $bgColor={resolvedBgColor}
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
  background-color: ${({ theme }) => theme.color.feedback.inactive[100]};
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
    background-color: ${({ theme }) => theme.color.surface.base[100]};
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
            background-color: ${({ theme }) =>
              theme.color.illustration.neutral[400]};
          }
        `}
`

const Checkbox = styled.input<{ $bgColor?: string }>`
  ${focusOutline({ selector: `&:focus-visible + ${Slider}` })}

  &:checked + ${Slider} {
    background-color: ${({ $bgColor, theme }) =>
      $bgColor ? $bgColor : theme.color.feedback.positive[200]};
    border: none;
  }

  &:checked + ${Slider}:before {
    transform: translateX(24px);
  }
`
