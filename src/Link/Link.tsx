import { darken } from 'polished'
import { FC, MouseEventHandler, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@awesome.me/kit-46ca99185c/icons/classic/regular'

import { Icon, Icons } from '../Icon'
import { theme as oldTheme } from '../theme'
import { focusOutline } from '../utils/focusOutline'
import { IconContainer } from '../sharedStyles/shared.styles'

type LinkTypo = 'regular' | 'small'

const ICON_SPACING = '4px'

export type LinkProps = {
  className?: string
  href: string
  onClick?: MouseEventHandler
  openInNewTab?: boolean
  children?: ReactNode
  download?: boolean
  typo?: LinkTypo
  highlight?: boolean
  iconToRender?: Icons
  iconComponent?: ReactNode
  isTrailingIcon?: boolean
}

export const Link: FC<LinkProps> = ({
  className,
  href,
  onClick,
  openInNewTab,
  download,
  children,
  typo = 'regular',
  highlight = false,
  iconToRender: legacyIcon,
  iconComponent = !legacyIcon && openInNewTab ? (
    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
  ) : undefined,
  isTrailingIcon = true,
}) => {
  const iconToRender = iconComponent ? (
    <IconContainer
      $size={typo === 'regular' ? 16 : 12}
      style={{
        alignSelf: 'center',
        marginRight: isTrailingIcon ? '0' : ICON_SPACING,
        marginLeft: isTrailingIcon ? ICON_SPACING : '0',
      }}
    >
      {iconComponent}
    </IconContainer>
  ) : legacyIcon ? (
    <Icon
      mt={{ custom: '3px' }}
      {...(isTrailingIcon
        ? { ml: { custom: ICON_SPACING } }
        : { mr: { custom: ICON_SPACING } })}
      size={typo === 'regular' ? 14 : 12}
      render={legacyIcon}
      color={highlight ? 'color.surface.brand.400' : 'color.surface.base.900'}
    />
  ) : null

  return (
    <LinkWrapper
      href={href}
      className={className}
      onClick={onClick}
      download={download}
      $typo={typo}
      $highlight={highlight}
      {...(openInNewTab && {
        rel: 'noopener noreferrer',
        target: '_blank',
      })}
    >
      {!isTrailingIcon && iconToRender}
      {children}
      {isTrailingIcon && iconToRender}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.a<{ $typo: LinkTypo; $highlight: boolean }>(
  ({ $typo, $highlight, theme }) => css`
    ${focusOutline()}
    display: inline-flex;
    flex-direction: row;

    ${
      $typo === 'regular' &&
      css`
        font-size: 16px;
        line-height: 20px;
      `
    }

    ${
      $typo === 'small' &&
      css`
        font-size: 14px;
        line-height: 20px;
      `
    }

    font-weight: ${oldTheme.font.weight.medium};
    text-decoration: underline;
    color: ${
      $highlight ? theme.color.interactive.primary.base : theme.color.text.base
    };

    background: none;
    cursor: pointer;

    &:hover {
      color: ${theme.color.text.subtle};

      path {
        fill: ${theme.color.icon.subtle};
      }
    }

    &:active {
      color: ${theme.color.text.base};

      path {
        fill: ${theme.color.icon.subtle};
      }
    }
  `,
)

/**
 * Internal utility to override styling in other components (see Text)
 * @internal
 */
export const linkStyleOverride = ({ color }: { color: string }) => css`
  & ${LinkWrapper} {
    color: ${color};

    path {
      fill: ${color};
    }

    &:hover {
      color: ${darken(0.1, color)};

      path {
        fill: ${darken(0.1, color)};
      }
    }
  }
`
