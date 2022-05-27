import React, { FC, ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { Color, theme } from '../theme'
import { focusOutline } from '../utils/focusOutline'
import { useDeprecatedWarning } from '../utils/deprecated'
import { LegacyButton } from './LegacyButton'
import { Loader } from '../Loader'
import { Icon as IconComponent } from '../Icon'

interface IButton {
  /** disabled state */
  disabled: boolean
  /** loading state */
  isLoading: boolean
  /** primary button styling */
  primary: boolean
  /** secondary button styling */
  secondary: boolean
  /** tertiary button styling */
  tertiary: boolean
  /** icon state */
  icon: string
  /** forcedWidth styling */
  forcedWidth: string
}

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
  type?: 'button' | 'submit' | 'reset'
}

export type ButtonProps = Props &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    children,
    id,
    className = '',
    color = 'secondary',
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
    componentName: 'Button',
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
      id={id}
      className={className}
      disabled={disabled || loading}
      onClick={(e) => {
        handleClick && handleClick(e)
      }}
      isLoading={loading}
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
          <Loader color={primary ? 'white' : 'secondary'} height="16" />
        </LoaderContainer>
      )}
      <ContentContainer icon={icon} $loading={loading}>
        {icon && (
          <IconContainer
            render={icon}
            size={24}
            color={primary ? 'white' : 'secondary'}
          />
        )}
        <ChildrenContainer>{children}</ChildrenContainer>
      </ContentContainer>
    </Container>
  )
})

Button.displayName = 'Button'

const Container = styled.button<IButton>(
  ({ disabled, isLoading, primary, secondary, tertiary, forcedWidth }) => css`
    ${focusOutline()}
    position: relative;
    background-color: ${theme.colors.primary};
    border: 2px solid;
    box-shadow: none;
    color: ${theme.colors.secondary};
    padding: 0 20px;
    outline: none;
    border-radius: 8px;
    font-weight: ${theme.font.weight.medium};
    cursor: ${disabled || isLoading ? 'not-allowed' : 'pointer'};
    line-height: 100%;
    font-size: 16px;
    opacity: ${disabled ? '0.5' : '1'};
    width: ${forcedWidth ? forcedWidth : 'auto'};

    ${primary &&
    css`
      color: ${theme.colors.white};
      border-color: ${theme.colors.primary};

      &:hover {
        background-color: ${!(disabled || isLoading) &&
        darken(0.1, theme.colors.primary)};
        border-color: ${!(disabled || isLoading) &&
        darken(0.1, theme.colors.primary)};
      }
      &:active {
        background-color: ${darken(0.1, theme.colors.primary)};
        border-color: ${darken(0.1, theme.colors.primary)};
      }
    `}
    ${secondary &&
    css`
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.secondary};

      &:hover {
        background-color: ${!(disabled || isLoading) &&
        theme.colors.background};
        border: ${!(disabled || isLoading) &&
        `2px solid ${theme.colors.secondary}`};
      }
      &:active {
        background-color: ${theme.colors.background};
        border: 2px solid ${theme.colors.secondary};
      }
    `}
  ${tertiary &&
    css`
      background-color: ${theme.colors.background};
      border-color: ${theme.colors.background};

      &:hover {
        background-color: ${!(disabled || isLoading) &&
        darken(0.1, theme.colors.background)};
        border-color: ${!(disabled || isLoading) &&
        darken(0.1, theme.colors.background)};
      }
      &:active {
        background-color: ${darken(0.1, theme.colors.background)};
        border-color: ${darken(0.1, theme.colors.background)};
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
