import React, { FC, MouseEventHandler, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { focusOutline } from '../utils/focusOutline'
import { theme } from '../theme'
import { Icon } from '../Icon'

export type LinkProps = {
  className?: string
  href: string
  onClick?: MouseEventHandler
  openInNewTab?: boolean
  children?: ReactNode
  download?: boolean
}

export const Link: FC<LinkProps> = ({
  className,
  href,
  onClick,
  openInNewTab,
  download,
  children,
}) => {
  return (
    <LinkWrapper
      href={href}
      className={className}
      onClick={onClick}
      download={download}
      {...(openInNewTab && {
        rel: 'noopener noreferrer',
        target: '_blank',
      })}
    >
      {children}
      {openInNewTab && (
        <StyledIcon render="new-window" size={12} color="primary" />
      )}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.a`
  ${focusOutline()}
  display: inline-flex;
  flex-direction: row;

  font-size: 14px;
  font-weight: ${theme.font.weight.medium};
  line-height: 14px;
  text-decoration: underline;
  color: ${theme.colors.primary};

  background: none;
  cursor: pointer;

  &:hover {
    color: ${darken(0.1, theme.colors.primary)};

    path {
      fill: ${darken(0.1, theme.colors.primary)};
    }
  }

  &:active {
    color: ${theme.colors.secondary};

    path {
      fill: ${theme.colors.secondary};
    }
  }
`

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

const StyledIcon = styled(Icon)`
  margin-left: 4px;
  margin-top: 3px;
`
