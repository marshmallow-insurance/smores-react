import React, { FC } from 'react'
import styled from 'styled-components'
import { MarginProps } from '../utils/space'

import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Text } from '../Text'
import { Color } from '../theme'
import { Icon } from '../Icon'
import { Icons } from 'Icon/iconsList'
import {
  ColorTypes,
  getColorPath,
  getThemeColor,
  legacyColorMap,
  NewColor,
} from '../ThemeProvider/utils/colourMap'

export type TagProps = {
  label: string
  color: ColorTypes
  bgColor: ColorTypes
  borderColor?: ColorTypes
  className?: string
  icon?: Icons
  iconColor?: Color
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
  const resolvedBGColor =
    bgColor in legacyColorMap
      ? getThemeColor(legacyColorMap[bgColor as keyof typeof legacyColorMap])
      : getThemeColor(bgColor as NewColor)

  const resolvedBorderColor =
    borderColor &&
    (borderColor in legacyColorMap
      ? getThemeColor(
          legacyColorMap[borderColor as keyof typeof legacyColorMap],
        )
      : getThemeColor(borderColor as NewColor))

  console.log(getColorPath(color))
  return (
    <Wrapper
      $bgColor={resolvedBGColor as NewColor}
      className={className}
      $borderColor={resolvedBorderColor as NewColor}
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

type WrapperProps = TransientProps<Pick<TagProps, 'bgColor' | 'borderColor'>>

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
