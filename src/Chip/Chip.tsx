import React, { ButtonHTMLAttributes, FC, ReactNode, forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon as IconComponent } from '../Icon'
import { Icons } from '../Icon/iconsList'
import { Loader } from '../Loader'
import { theme } from '../theme'
import { focusOutline } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

interface IButton {
  primary: boolean
  secondary: boolean
  icon?: Icons
  $loading: boolean
  disabled: boolean
}

type Props = {
  children: ReactNode
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void
  primary?: boolean
  secondary?: boolean
  icon?: Icons
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
      icon,
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
        <Loader color={primary ? 'liquorice' : 'cream'} height="16" />
      ) : (
        <>
          {icon && (
            <IconComponent
              render={icon}
              size={20}
              color={primary ? 'liquorice' : 'cream'}
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
    background-color: ${theme.colors.oatmeal};
    border-radius: 100px;
    border: 2px solid ${theme.colors.oatmeal};
    color: ${theme.colors.liquorice};
    display: flex;
    font-size: 16px;
    justify-content: ${icon ? 'space-evenly' : 'center'};
    line-height: 100%;
    padding: 8px 16px 8px ${icon ? '8px' : '16px'};
    width: 98px;
    min-height: 40px;
    cursor: ${disabled || $loading ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '0.5' : '1'};

    ${primary &&
    css`
      &:hover {
        border: ${!(disabled || $loading) &&
        `2px solid ${theme.colors.mascarpone}`};
        background-color: ${!(disabled || $loading) && theme.colors.mascarpone};
      }
    `}
    ${secondary &&
    css`
      color: ${theme.colors.cream};
      background-color: ${theme.colors.liquorice};
      border: 2px solid ${theme.colors.liquorice};
      &:hover {
        border: ${!(disabled || $loading) &&
        `2px solid ${theme.colors.sesame}`};
        background-color: ${!(disabled || $loading) && theme.colors.sesame};
      }
    `};
  `,
)

const ChildrenContainer = styled.div`
  flex-grow: 1;
`
