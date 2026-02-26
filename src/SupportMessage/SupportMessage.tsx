import { darken } from 'polished'
import { FC, MouseEventHandler, ReactElement } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'

import { Text } from '../Text'
import { theme as oldTheme } from '../theme'
import { isReactElement } from '../utils/isReactElement'
import { MarginProps } from '../utils/space'
import { NewColor, resolveToThemeColor } from '../ThemeProvider/utils/colourMap'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faTriangleExclamation,
} from '@awesome.me/kit-46ca99185c/icons/classic/regular'
import { IconContainer } from '../sharedStyles/shared.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@awesome.me/kit-46ca99185c/icons/classic/solid'

type StylesItem = {
  iconColor: NewColor
  backgroundColor: NewColor
  icon: IconDefinition
}

const styles: Record<SupportMessageType, StylesItem> = {
  info: {
    iconColor: 'color.icon.base',
    backgroundColor: 'color.illustration.neutral.300',
    icon: faCircleInfo,
  },
  fallbackStyle: {
    iconColor: 'color.icon.base',
    backgroundColor: 'color.surface.base.100',
    icon: faCircleInfo,
  },
  alert: {
    iconColor: 'extended1.100',
    backgroundColor: 'color.feedback.notice.100',
    icon: faTriangleExclamation,
  },
  warning: {
    iconColor: 'color.feedback.negative.200',
    backgroundColor: 'color.feedback.negative.100',
    icon: faCircleExclamation,
  },
  success: {
    iconColor: 'color.feedback.positive.200',
    backgroundColor: 'color.feedback.positive.100',
    icon: faCircleCheck,
  },
}

type SupportMessageType =
  | 'info'
  | 'fallbackStyle'
  | 'alert'
  | 'warning'
  | 'success'

export type SupportMessageProps = {
  className?: string
  description: string | ReactElement<any>
  onClick?: MouseEventHandler
  /**
   * Right side content, usually an icon or a button
   */
  rightSideComponent?: ReactElement<any>
  type: SupportMessageType
  title?: string
} & MarginProps

export const SupportMessage: FC<SupportMessageProps> = ({
  className,
  description,
  onClick,
  rightSideComponent,
  type,
  title,
  ...marginProps
}) => {
  const theme = useTheme()
  const resolveBackgroundColor = resolveToThemeColor(
    styles[type].backgroundColor,
    theme,
  )

  const resolvedIconColor = resolveToThemeColor(styles[type].iconColor, theme)

  return (
    <Wrapper
      className={className}
      $backgroundColor={resolveBackgroundColor}
      onClick={onClick}
      {...marginProps}
    >
      <IconContainer $size={20} style={{ alignSelf: 'flex-start' }}>
        <FontAwesomeIcon icon={styles[type].icon} color={resolvedIconColor} />
      </IconContainer>
      <Box flex direction="column" mx="8px">
        {title && <Title>{title}</Title>}
        {isReactElement(description) ? (
          <DescriptionBox>{description}</DescriptionBox>
        ) : (
          <Description tag="p">{description}</Description>
        )}
      </Box>
      {rightSideComponent}
      {onClick && rightSideComponent === undefined && (
        <Box ml={{ custom: 'auto' }}>
          <IconContainer $size={16}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={theme.color.illustration.neutral[400]}
            />
          </IconContainer>
        </Box>
      )}
    </Wrapper>
  )
}

interface IWrapper {
  $backgroundColor: string
  onClick?: MouseEventHandler
}

const Wrapper = styled(Box)<IWrapper>(
  ({ $backgroundColor, onClick }) => css`
    align-items: center;
    background-color: ${$backgroundColor};
    border-radius: 16px;
    ${onClick && `cursor: pointer`};
    padding: 12px;
    display: flex;
    width: 100%;

    &:hover,
    &:active {
      ${onClick && `background-color: ${darken(0.1, $backgroundColor)};`};
    }
  `,
)

const Title = styled.p`
  font-size: 16px;
  font-weight: ${oldTheme.font.weight.medium};
  color: ${({ theme }) => theme.color.text.base};
  line-height: 20.8px;
  margin-bottom: 4px;
`

const DescriptionBox = styled(Box)`
  font-size: 14px;
  line-height: 20px;
`

const Description = styled(Text)`
  font-size: 14px;
  line-height: 20px;
`
