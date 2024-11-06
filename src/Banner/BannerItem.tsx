import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { useTimeout } from '../hooks'
import { Color, theme } from '../theme'
import { Banner } from './types'

type StylesItem = {
  iconColor: Color
  backgroundColor: string
  textColor: Color
}

type BannerType = 'upsell' | 'critical' | 'general' | 'success'

const styles: Record<BannerType, StylesItem> = {
  upsell: {
    iconColor: 'liquorice',
    backgroundColor: theme.colors.marshmallowPink,
    textColor: 'liquorice',
  },
  critical: {
    iconColor: 'cream',
    backgroundColor: theme.colors.strawberry,
    textColor: 'cream',
  },
  general: {
    iconColor: 'cream',
    backgroundColor: theme.colors.liquorice,
    textColor: 'cream',
  },
  success: {
    iconColor: 'cream',
    backgroundColor: theme.colors.apple,
    textColor: 'cream',
  },
}

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
      $type={type}
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
              <UnderlinedText tag="span" typo="desc-medium" color={textColor}>
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
                  typo="desc-medium"
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

const BannerWrapper = styled(Box)<TransientProps<Pick<Banner, 'type'>>>(
  ({ $type }) => css`
    border-radius: 0px 0px 16px 16px;
    background-color: ${styles[$type].backgroundColor};
  `,
)

const GenericButton = styled.button`
  cursor: pointer;
`

const UnderlinedText = styled(Text)`
  text-decoration: underline;
`
