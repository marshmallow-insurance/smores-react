import React, { FC, useState } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { MarginProps } from 'utils/space'
import { NewColor, resolveToThemeColor } from '../ThemeProvider/utils/colourMap'

import { Box } from '../Box'
import { IconStrict } from '../IconStrict'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { Icons } from '../Icon/iconsList'
import { Button } from '../Button'
import { Link } from '../Link'

type AlertType = 'info' | 'fallback' | 'notice' | 'negative' | 'positive'

type AlertProps = {
  type?: AlertType
  title: string
  message: string
  showCloseIcon?: boolean
  ctaType?: 'button' | 'link'
  ctaTypeAction?: (() => void) | string
} & MarginProps

type AlertTypeConfig = {
  backgroundColor: NewColor
  accentColor: NewColor
  icon: Icons
}

const typeConfig: Record<AlertType, AlertTypeConfig> = {
  info: {
    backgroundColor: 'color.feedback.informative.100',
    accentColor: 'color.feedback.informative.200',
    icon: 'circle-info-filled',
  },
  fallback: {
    backgroundColor: 'color.surface.base.100',
    accentColor: 'color.surface.base.400',
    icon: 'circle-info-filled',
  },
  notice: {
    backgroundColor: 'color.feedback.notice.100',
    accentColor: 'color.feedback.notice.200',
    icon: 'triangle-exclamation-solid',
  },
  negative: {
    backgroundColor: 'color.feedback.negative.100',
    accentColor: 'color.feedback.negative.200',
    icon: 'warning-circle',
  },
  positive: {
    backgroundColor: 'color.feedback.positive.100',
    accentColor: 'color.feedback.positive.200',
    icon: 'included',
  },
}

export const Alert: FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  showCloseIcon = false,
  ctaType,
  ctaTypeAction,
  ...marginProps
}) => {
  const theme = useTheme()

  const backgroundColor = resolveToThemeColor(
    typeConfig[type].backgroundColor,
    theme,
  )
  const accentColor = resolveToThemeColor(typeConfig[type].accentColor, theme)
  const [alertClosed, setAlertClosed] = useState(false)

  return (
    <StyledAlert
      $backgroundColor={backgroundColor}
      $accentColor={accentColor}
      $alertClosed={alertClosed}
      {...marginProps}
    >
      <Icon
        render={typeConfig[type].icon}
        size={16}
        m={{ custom: 2 }}
        color="liquorice"
      />
      <Box
        flex
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
        gap="8px"
      >
        <Box>
          <Text typo="headline-regular">{title}</Text>
          <Text mb={ctaType && '8px'}>{message}</Text>
          {ctaType === 'button' && typeof ctaTypeAction === 'function' && (
            <Button smallButton fallbackStyle onClick={() => ctaTypeAction()}>
              Learn more
            </Button>
          )}
          {ctaType === 'link' && typeof ctaTypeAction === 'string' && (
            <Link href={ctaTypeAction}>Marshmallow website</Link>
          )}
        </Box>
        {showCloseIcon && (
          <IconStrict
            render="cross"
            size={16}
            color="liquorice"
            onClick={() => setAlertClosed(true)}
          />
        )}
      </Box>
    </StyledAlert>
  )
}

interface IStyledAlert {
  $backgroundColor: string
  $accentColor: string
  $alertClosed: boolean
}

const StyledAlert = styled.div<IStyledAlert>(
  ({ $backgroundColor, $accentColor, $alertClosed }) => css`
    display: flex;
    max-width: 512px;
    min-width: min-content;
    padding: 12px 12px 12px 20px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 8px 16px 16px 8px;
    background: ${$backgroundColor};
    position: relative;
    display: ${$alertClosed ? 'none' : 'flex'};

    &:before {
      width: 8px;
      height: 100%;
      position: absolute;
      background: ${$accentColor};
      content: '';
      top: 0;
      left: 0;
      border-radius: 16px 0 0 16px;
    }
  `,
)
