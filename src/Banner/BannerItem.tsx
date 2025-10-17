import React, { FC } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { useTimeout } from '../hooks'
import { Banner } from './types'
import { NewColor } from 'ThemeProvider/utils/colourMap'

type StylesItem = {
  iconColor: NewColor
  backgroundColor: string
  textColor: NewColor
}

type BannerType = 'upsell' | 'critical' | 'general' | 'success'

interface Props extends Banner {
  deleteBanner: (id: string) => void
}

export const BannerItem: FC<Props> = ({
  type,
  autoCloseTime = 4,
  id,
  message,
  topOffset,
  exploreAction,
  showExploreText,
  showExploreIcon,
  leadingIcon,
  canManuallyClose,
  showCloseIcon,
  deleteBanner,
  noTimeout,
}) => {
  const theme = useTheme()

  const styles: Record<BannerType, StylesItem> = {
    upsell: {
      iconColor: 'color.icon.base',
      backgroundColor: theme.color.surface.brand[300],
      textColor: 'color.text.base',
    },
    critical: {
      iconColor: 'color.surface.base.000',
      backgroundColor: theme.color.feedback.negative[200],
      textColor: 'color.surface.base.000',
    },
    general: {
      iconColor: 'color.surface.base.000',
      backgroundColor: theme.color.surface.base[900],
      textColor: 'color.surface.base.000',
    },
    success: {
      iconColor: 'color.surface.base.000',
      backgroundColor: theme.color.feedback.positive[200],
      textColor: 'color.surface.base.000',
    },
  }
  const autoCloseBaner = () => {
    if (noTimeout) return
    if (type !== 'critical') return deleteBanner(id)
    else {
      return
    }
  }
  useTimeout(() => autoCloseBaner(), autoCloseTime * 1000)

  const textColor = styles[type].textColor
  const iconColor = styles[type].iconColor

  return (
    <BannerWrapper
      p="24px"
      mt={{ custom: topOffset }}
      key={id}
      flex
      justifyContent="space-between"
      $backgroundColour={styles[type].backgroundColor}
    >
      <Box flex alignItems="center">
        {leadingIcon && (
          <Icon mr="12px" render={leadingIcon} size={24} color={iconColor} />
        )}
        <Text typo="headline-small" color={textColor}>
          {message}
        </Text>
      </Box>
      <Box flex alignItems="center">
        {canManuallyClose && (
          <GenericButton
            onClick={() => deleteBanner(id)}
            aria-label={`close banner ${message}`}
          >
            {showCloseIcon ? (
              <Icon render="cross" size={16} color={iconColor} />
            ) : (
              <UnderlinedText
                tag="span"
                typo="headline-small"
                color={textColor}
              >
                Dismiss
              </UnderlinedText>
            )}
          </GenericButton>
        )}
        {exploreAction && (
          <GenericButton onClick={exploreAction} aria-label={`cta ${message}`}>
            <Box flex alignItems="center">
              {showExploreText && (
                <UnderlinedText
                  ml="12px"
                  tag="span"
                  typo="headline-small"
                  color={textColor}
                >
                  Explore
                </UnderlinedText>
              )}
              {showExploreIcon && (
                <Icon
                  render="arrow"
                  ml="12px"
                  size={24}
                  color={iconColor}
                  rotate={180}
                />
              )}
            </Box>
          </GenericButton>
        )}
      </Box>
    </BannerWrapper>
  )
}

const BannerWrapper = styled(Box)<{ $backgroundColour: string }>(
  ({ $backgroundColour }) => css`
    border-radius: 0px 0px 16px 16px;
    background-color: ${$backgroundColour};
  `,
)

const GenericButton = styled.button`
  cursor: pointer;
`

const UnderlinedText = styled(Text)`
  text-decoration: underline;
`
