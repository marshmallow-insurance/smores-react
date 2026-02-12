import { FC, ReactElement, useState } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { MarginProps } from 'utils/space'
import { NewColor, resolveToThemeColor } from '../ThemeProvider/utils/colourMap'

import { Box } from '../Box'
import { Text } from '../Text'
import { Button } from '../Button'
import { Link } from '../Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleInfo,
  faTriangleExclamation,
  faCircleExclamation,
  faCircleCheck,
  faXmark,
} from '@awesome.me/kit-46ca99185c/icons/classic/regular'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { IconContainer } from '../sharedStyles/shared.styles'

type AlertType = 'info' | 'fallback' | 'notice' | 'negative' | 'positive'

type CtaProps =
  | {
      ctaType: 'button'
      ctaAction: () => void
      ctaLabel: string
    }
  | {
      ctaType: 'link'
      ctaAction: string
      ctaLabel: string
    }
  | {
      ctaType?: undefined
      ctaAction?: undefined
      ctaLabel?: undefined
    }

export type AlertProps = {
  type?: AlertType
  title?: string
  message: string | ReactElement<unknown>
  isDismissible?: boolean
  maxWidth?: string
} & CtaProps &
  MarginProps

type AlertTypeConfig = {
  backgroundColor: NewColor
  accentColor: NewColor
  icon: IconDefinition
}

const typeConfig: Record<AlertType, AlertTypeConfig> = {
  info: {
    backgroundColor: 'color.feedback.informative.100',
    accentColor: 'color.feedback.informative.200',
    icon: faCircleInfo,
  },
  fallback: {
    backgroundColor: 'color.surface.base.100',
    accentColor: 'color.surface.base.400',
    icon: faCircleInfo,
  },
  notice: {
    backgroundColor: 'color.feedback.notice.100',
    accentColor: 'color.feedback.notice.200',
    icon: faTriangleExclamation,
  },
  negative: {
    backgroundColor: 'color.feedback.negative.100',
    accentColor: 'color.feedback.negative.200',
    icon: faCircleExclamation,
  },
  positive: {
    backgroundColor: 'color.feedback.positive.100',
    accentColor: 'color.feedback.positive.200',
    icon: faCircleCheck,
  },
}

export const Alert: FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  isDismissible = false,
  ctaType,
  ctaAction,
  ctaLabel,
  maxWidth = '512px',
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
      $maxWidth={maxWidth}
      {...marginProps}
    >
      <IconContainer $size={16} style={{ margin: '2px' }}>
        <FontAwesomeIcon
          icon={typeConfig[type].icon}
          color={theme.color.icon.base}
        />
      </IconContainer>
      <Box
        flex
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
        gap="8px"
      >
        <Box maxWidth="512px">
          {title && (
            <Text mb={{ custom: '4px' }} typo="headline-regular">
              {title}
            </Text>
          )}
          {typeof message === 'string' ? (
            <Text typo="body-small" mb={ctaType && '8px'}>
              {message}
            </Text>
          ) : (
            message
          )}
          {ctaType === 'button' && typeof ctaAction === 'function' && (
            <Button smallButton fallbackStyle onClick={() => ctaAction()}>
              {ctaLabel}
            </Button>
          )}
          {ctaType === 'link' && typeof ctaAction === 'string' && (
            <Link href={ctaAction}>{ctaLabel}</Link>
          )}
        </Box>
        {isDismissible && (
          <IconContainer
            as="button"
            type="button"
            title="icon-button"
            $size={16}
            style={{ cursor: 'pointer' }}
            onClick={() => setAlertClosed(true)}
          >
            <FontAwesomeIcon icon={faXmark} color={theme.color.icon.base} />
          </IconContainer>
        )}
      </Box>
    </StyledAlert>
  )
}

interface IStyledAlert {
  $backgroundColor: string
  $accentColor: string
  $alertClosed: boolean
  $maxWidth?: string
}

const StyledAlert = styled(Box)<IStyledAlert>(
  ({ $backgroundColor, $accentColor, $alertClosed, $maxWidth }) => css`
    display: flex;
    width: 100%;
    max-width: ${$maxWidth};
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
