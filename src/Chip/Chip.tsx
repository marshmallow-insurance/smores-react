import {
  ButtonHTMLAttributes,
  FC,
  FormEvent,
  ReactNode,
  forwardRef,
} from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon as IconComponent } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Loader } from '../Loader'
import { focusOutline } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

interface IButton {
  $primary: boolean
  $secondary: boolean
  $icon?: Icons
  $loading: boolean
  disabled: boolean
}

type Props = {
  children: ReactNode
  handleClick: (e: FormEvent<HTMLButtonElement>) => void
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
      forwardedAs="button"
      $primary={primary}
      $secondary={secondary}
      disabled={disabled || loading}
      $loading={loading}
      onClick={handleClick}
      $icon={icon}
      {...props}
      ref={ref}
      aria-label="chip-button"
    >
      {loading ? (
        <Loader
          color={primary ? 'color.icon.base' : 'color.icon.on-dark'}
          height="16"
        />
      ) : (
        <>
          {icon && (
            <IconComponent
              render={icon}
              size={16}
              color={primary ? 'color.icon.base' : 'color.icon.on-dark'}
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
  ({ $primary, $secondary, $icon, $loading, disabled, theme }) => css`
    ${focusOutline()}

    align-items: center;
    background-color: ${theme.color.surface.base[300]};
    border-radius: 100px;
    border: 2px solid ${theme.color.surface.base[300]};
    color: ${theme.color.text.base};
    display: flex;
    font-size: 16px;
    justify-content: ${$icon ? 'space-evenly' : 'center'};
    line-height: 100%;
    padding: 8px 16px 8px ${$icon ? '8px' : '16px'};
    min-width: 98px;
    min-height: 40px;
    cursor: ${disabled || $loading ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '0.5' : '1'};

    ${$primary &&
    css`
      &:hover {
        border: ${!(disabled || $loading) &&
        `2px solid ${theme.color.background[200]}`};
        background-color: ${!(disabled || $loading) &&
        theme.color.background[200]};
      }
    `}
    ${$secondary &&
    css`
      color: ${theme.color.text['on-dark']};
      background-color: ${theme.color.surface.base[900]};
      border: 2px solid ${theme.color.surface.base[900]};
      &:hover {
        border: ${!(disabled || $loading) &&
        `2px solid ${theme.color.text.subtle}`};
        background-color: ${!(disabled || $loading) && theme.color.text.subtle};
      }
    `};
  `,
)

const ChildrenContainer = styled.div`
  flex-grow: 1;
`
