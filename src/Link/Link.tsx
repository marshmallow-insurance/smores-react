import React, { FC, MouseEventHandler, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { focusOutline } from '../utils/focusOutline'
import { theme } from '../theme'
import { Icon } from '../Icon'

type LinkTypo = 'regular' | 'small'

export type LinkProps = {
  className?: string
  href: string
  onClick?: MouseEventHandler
  openInNewTab?: boolean
  children?: ReactNode
  download?: boolean
  typo?: LinkTypo
}

export const Link: FC<LinkProps> = ({
  className,
  href,
  onClick,
  openInNewTab,
  download,
  children,
  typo = 'regular',
}) => {
  return (
    <LinkWrapper
      href={href}
      className={className}
      onClick={onClick}
      download={download}
      typo={typo}
      {...(openInNewTab && {
        rel: 'noopener noreferrer',
        target: '_blank',
      })}
    >
      {children}
      {openInNewTab && (
        <StyledIcon
          render="new-window"
          size={typo === 'regular' ? 14 : 12}
          color="marshmallowPink"
        />
      )}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.a<{ typo: LinkTypo }>(
  ({ typo }) =>
    css`
      ${focusOutline()}
      display: inline-flex;
      flex-direction: row;

      ${typo === 'regular' &&
      css`
        font-size: 16px;
        line-height: 20px;
      `}

      ${typo === 'small' &&
      css`
        font-size: 14px;
        line-height: 20px;
      `}

      font-weight: ${theme.font.weight.medium};
      text-decoration: underline;
      color: ${theme.colors.marshmallowPink};

      background: none;
      cursor: pointer;

      &:hover {
        color: ${darken(0.1, theme.colors.marshmallowPink)};

        path {
          fill: ${darken(0.1, theme.colors.marshmallowPink)};
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

const StyledIcon = styled(Icon)`
  margin-left: 4px;
  margin-top: 3px;
`
