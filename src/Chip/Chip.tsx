import {
  ButtonHTMLAttributes,
  FC,
  FormEvent,
  ReactNode,
  forwardRef,
} from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Loader } from '../Loader'
import { focusOutline } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'
import { IconContainer } from '../sharedStyles/shared.styles'

interface IButton {
  $primary: boolean
  $secondary: boolean
  $icon?: boolean
  $loading: boolean
  disabled: boolean
}

type Props = {
  children: ReactNode
  handleClick: (e: FormEvent<HTMLButtonElement>) => void
  primary?: boolean
  secondary?: boolean
  icon?: Icons
  iconComponent?: ReactNode
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
      iconComponent,
      ...props
    },
    ref,
  ) => {
    const iconToRender = iconComponent ? (
      <IconContainer
        $size={16}
        $iconColor={primary ? 'color.icon.base' : 'color.icon.inverse'}
      >
        {iconComponent}
      </IconContainer>
    ) : icon ? (
      <Icon
        render={icon}
        size={16}
        color={primary ? 'color.icon.base' : 'color.icon.inverse'}
      />
    ) : null

    return (
      <Container
        forwardedAs="button"
        $primary={primary}
        $secondary={secondary}
        disabled={disabled || loading}
        $loading={loading}
        onClick={handleClick}
        $icon={Boolean(icon || iconComponent)}
        {...props}
        ref={ref}
        aria-label="chip-button"
      >
        {loading ? (
          <Loader
            color={primary ? 'color.icon.base' : 'color.icon.inverse'}
            height="16"
          />
        ) : (
          <>
            {iconToRender}
            <ChildrenContainer>{children}</ChildrenContainer>
          </>
        )}
      </Container>
    )
  },
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
      color: ${theme.color.text.inverse};
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
