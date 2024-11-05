import { darken } from 'polished'
import React, { FC, MouseEventHandler, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'
import { theme } from '../theme'
import { focusOutline } from '../utils/focusOutline'

type LinkTypo = 'regular' | 'small'

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
  iconToRender = openInNewTab ? 'new-window' : undefined,
  isTrailingIcon = true,
}) => {
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
      {iconToRender && !isTrailingIcon && (
        <Icon
          mt={{ custom: '3px' }}
          mr={{ custom: '4px' }}
          render={iconToRender}
          size={typo === 'regular' ? 14 : 12}
          color={highlight ? 'lollipop' : 'liquorice'}
        />
      )}
      {children}
      {iconToRender && isTrailingIcon && (
        <Icon
          mt={{ custom: '3px' }}
          ml="8px"
          render={iconToRender}
          size={typo === 'regular' ? 14 : 12}
          color={highlight ? 'lollipop' : 'liquorice'}
        />
      )}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.a<{ $typo: LinkTypo; $highlight: boolean }>(
  ({ $typo, $highlight }) => css`
    ${focusOutline()}
    display: inline-flex;
    flex-direction: row;

    ${$typo === 'regular' &&
    css`
      font-size: 16px;
      line-height: 20px;
    `}

    ${$typo === 'small' &&
    css`
      font-size: 14px;
      line-height: 20px;
    `}

      font-weight: ${theme.font.weight.medium};
    text-decoration: underline;
    color: ${$highlight ? theme.colors.lollipop : theme.colors.liquorice};

    background: none;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.sesame};

      path {
        fill: ${theme.colors.sesame};
      }
    }

    &:active {
      color: ${theme.colors.liquorice};

      path {
        fill: ${theme.colors.liquorice};
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
