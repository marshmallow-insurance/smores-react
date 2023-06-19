import React, { FC, ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { Color, theme } from '../theme'
import { focusOutline } from '../utils/focusOutline'
import { useDeprecatedWarning } from '../utils/deprecated'
import { LegacyButton } from './LegacyButton'
import { Box } from '../Box'
import { Loader } from '../Loader'
import { Icon as IconComponent } from '../Icon'
import { MarginProps } from '../utils/space'

type Props = {
  children: ReactNode
  id?: string
  className?: string
  color?: Color
  block?: boolean
  inverted?: boolean
  disabled?: boolean
  outlined?: boolean
  handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void
  loading?: boolean
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  icon?: string
  forcedWidth?: string
  form?: string
}

export type ButtonProps = Props &
  MarginProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    children,
    id,
    className = '',
    color = 'liquorice',
    block = false,
    inverted = false,
    disabled = false,
    outlined = false,
    handleClick,
    loading = false,
    primary = false,
    secondary = false,
    tertiary = false,
    icon = '',
    forcedWidth = '',
    form,
    type,
    ...otherProps
  } = props

  const isLegacyButton = !primary && !secondary && !tertiary

  useDeprecatedWarning({
    enabled: isLegacyButton,
    title: 'Legacy Button',
    message:
      "You're using the legacy Button component. Please use the new Button by providing one of the following props: 'primary', 'secondary', 'tertiary'.",
    componentProps: props,
  })

  if (isLegacyButton) {
    return (
      <LegacyButton
        id={id}
        className={className}
        color={color}
        block={block}
        inverted={inverted}
        disabled={disabled}
        outlined={outlined}
        handleClick={(e) => {
          handleClick && handleClick(e)
        }}
      >
        {children}
      </LegacyButton>
    )
  }

  return (
    <Container
      as="button"
      id={id}
      className={className}
      disabled={disabled || loading}
      onClick={handleClick}
      $loading={loading}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      icon={icon}
      forcedWidth={forcedWidth}
      {...(form ? { form } : {})}
      type={type}
      {...otherProps}
      ref={ref}
    >
      {loading && (
        <LoaderContainer>
          <Loader color={primary ? 'cream' : 'liquorice'} height="16" />
        </LoaderContainer>
      )}
      <ContentContainer icon={icon} $loading={loading}>
        {icon && (
          <IconContainer
            render={icon}
            size={24}
            color={primary ? 'cream' : 'liquorice'}
          />
        )}
        <ChildrenContainer>{children}</ChildrenContainer>
      </ContentContainer>
    </Container>
  )
})

Button.displayName = 'Button'

type IButton = Required<
  Pick<
    ButtonProps,
    'disabled' | 'primary' | 'secondary' | 'tertiary' | 'icon' | 'forcedWidth'
  >
> & {
  $loading: NonNullable<ButtonProps['loading']>
}

const Container = styled(Box)<IButton>(
  ({ disabled, $loading, primary, secondary, tertiary, forcedWidth }) => css`
    ${focusOutline()}
    position: relative;
    background-color: ${theme.colors.marshmallowPink};
    border: 2px solid;
    box-shadow: none;
    color: ${theme.colors.liquorice};
    padding: 0 20px;
    outline: none;
    border-radius: 8px;
    font-weight: ${theme.font.weight.medium};
    cursor: ${disabled || $loading ? 'not-allowed' : 'pointer'};
    line-height: 100%;
    font-size: 16px;
    opacity: ${disabled ? '0.5' : '1'};
    width: ${forcedWidth ? forcedWidth : 'auto'};

    ${primary &&
    css`
      color: ${theme.colors.cream};
      border-color: ${theme.colors.marshmallowPink};

      &:hover {
        background-color: ${!(disabled || $loading) &&
        darken(0.1, theme.colors.marshmallowPink)};
        border-color: ${!(disabled || $loading) &&
        darken(0.1, theme.colors.marshmallowPink)};
      }
      &:active {
        background-color: ${darken(0.1, theme.colors.marshmallowPink)};
        border-color: ${darken(0.1, theme.colors.marshmallowPink)};
      }
    `}
    ${secondary &&
    css`
      background-color: ${theme.colors.cream};
      border-color: ${theme.colors.liquorice};

      &:hover {
        background-color: ${!(disabled || $loading) && theme.colors.coconut};
        border: ${!(disabled || $loading) &&
        `2px solid ${theme.colors.liquorice}`};
      }
      &:active {
        background-color: ${theme.colors.coconut};
        border: 2px solid ${theme.colors.liquorice};
      }
    `}
  ${tertiary &&
    css`
      background-color: ${theme.colors.coconut};
      border-color: ${theme.colors.coconut};

      &:hover {
        background-color: ${!(disabled || $loading) &&
        darken(0.1, theme.colors.coconut)};
        border-color: ${!(disabled || $loading) &&
        darken(0.1, theme.colors.coconut)};
      }
      &:active {
        background-color: ${darken(0.1, theme.colors.coconut)};
        border-color: ${darken(0.1, theme.colors.coconut)};
      }
    `}
  `,
)

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentContainer = styled.div<
  Pick<ButtonProps, 'icon'> & { $loading: boolean }
>`
  display: flex;
  align-items: center;
  justify-content: ${({ icon }) => (icon ? 'space-evenly' : 'center')};
  opacity: ${({ $loading }) => ($loading ? '0' : '1')};
`

const IconContainer = styled(IconComponent)`
  margin-right: 10px;
`

const ChildrenContainer = styled.div`
  padding: 16px 0;
  flex-grow: 1;
`
