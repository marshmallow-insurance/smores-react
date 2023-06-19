import React, { FC, ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { Box } from '../Box'
import { Icon as IconComponent } from '../Icon'
import { Loader } from '../Loader'
import { focusOutline } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

interface IButton {
  primary: boolean
  secondary: boolean
  icon: string
  $loading: boolean
  disabled: boolean
}

type Props = {
  children: ReactNode
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void
  primary?: boolean
  secondary?: boolean
  icon?: string
  disabled?: boolean
  loading?: boolean
} & MarginProps

export type ChipProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

export const Chip: FC<ChipProps> = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      children,
      handleClick,
      primary = false,
      secondary = false,
      disabled = false,
      loading = false,
      icon = '',
      ...props
    },
    ref,
  ) => (
    <Container
      as="button"
      primary={primary}
      secondary={secondary}
      disabled={disabled || loading}
      $loading={loading}
      onClick={handleClick}
      icon={icon}
      {...props}
      ref={ref}
    >
      {loading ? (
        <Loader color={primary ? 'cream' : 'marshmallowPink'} height="16" />
      ) : (
        <>
          {icon && (
            <IconComponent
              render={icon}
              size={20}
              color={primary ? 'cream' : 'marshmallowPink'}
            />
          )}
          <ChildrenContainer>{children}</ChildrenContainer>
        </>
      )}
    </Container>
  ),
)

Chip.displayName = 'Chip'

const Container = styled(Box)<IButton>(
  ({ primary, secondary, icon, $loading, disabled }) => css`
    ${focusOutline()}

    align-items: center;
    background-color: ${theme.colors.marshmallowPink};
    border-radius: 100px;
    border: 2px solid ${theme.colors.marshmallowPink};
    color: ${theme.colors.cream};
    display: flex;
    font-size: 16px;
    justify-content: ${icon ? 'space-evenly' : 'center'};
    line-height: 100%;
    padding: 8px 16px 8px ${icon ? '8px' : '16px'};
    width: 98px;
    cursor: ${disabled || $loading ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '0.5' : '1'};

    ${primary &&
    css`
      &:hover {
        background-color: ${(disabled || $loading) &&
        theme.colors.marshmallowPink};
      }
    `}
    ${secondary &&
    css`
      color: ${theme.colors.marshmallowPink};
      background-color: ${theme.colors.cream};
      &:hover {
        background-color: ${!(disabled || $loading) && theme.colors.coconut};
      }
    `};
  `,
)

const ChildrenContainer = styled.div`
  flex-grow: 1;
`
