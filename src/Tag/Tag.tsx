import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { MarginProps } from '../utils/space'

import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { Icons } from 'Icon/iconsList'
import {
  ColorTypes,
  getColorPath,
  resolveToThemeColor,
} from '../ThemeProvider/utils/colourMap'

export type TagProps = {
  label: string
  color: ColorTypes
  bgColor: ColorTypes
  borderColor?: ColorTypes
  className?: string
  icon?: Icons
  iconColor?: ColorTypes
  onClick?: () => void
} & MarginProps

export const Tag: FC<TagProps> = ({
  label,
  color,
  borderColor,
  bgColor,
  className,
  icon,
  iconColor,
  onClick,
  ...marginProps
}) => {
  const theme = useTheme()

  const resolvedBGColor = resolveToThemeColor(bgColor, theme)
  const resolvedBorderColor =
    borderColor && resolveToThemeColor(borderColor, theme)

  return (
    <Wrapper
      $bgColor={resolvedBGColor}
      className={className}
      $borderColor={resolvedBorderColor}
      {...marginProps}
      alignContent="center"
      justifyContent="center"
      onClick={onClick}
    >
      {icon && (
        <TagIcon
          render={icon}
          color={iconColor}
          size={16}
          data-testid={`tag-icon-${icon}`}
        />
      )}
      <TagText tag="span" typo="label" color={getColorPath(color)}>
        {label}
      </TagText>
    </Wrapper>
  )
}

type WrapperProps = TransientProps<{
  bgColor: string
  borderColor?: string
}>

const Wrapper = styled(Box)<WrapperProps>`
  background-color: ${({ $bgColor }) => $bgColor};
  border: ${({ $borderColor }) => $borderColor && `1px solid ${$borderColor}`};

  border-radius: 6px;
  padding: 4px 8px;

  height: 22px;

  box-sizing: border-box;
  display: inline-flex;
`

const TagText = styled(Text)`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-transform: uppercase;
`

const TagIcon = styled(Icon)`
  padding-right: 4px;
`
