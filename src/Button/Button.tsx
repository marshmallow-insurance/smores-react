import React, { FC, ButtonHTMLAttributes, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { theme } from '../theme'
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
  id?: string
  className?: string
  color?: string
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

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
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
      ...props
    },
    ref,
  ) => (
    <div>
      {primary || secondary || tertiary ? (
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
          {...props}
          ref={ref}
        >
          {loading ? (
            <Loader
              color={primary ? 'white' : `${theme.colors.secondary}`}
              height="16"
            />
          ) : (
            <>
              {icon && (
                <IconContainer
                  render={icon}
                  size={24}
                  color={primary ? 'white' : 'secondary'}
                />
              )}
              <ChildrenContainer>{children}</ChildrenContainer>
            </>
          )}
        </Container>
      ) : (
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
      )}
    </div>
  ),
)

Button.displayName = 'Button'

const Container = styled.button<IButton>(
  ({
    disabled,
    isLoading,
    primary,
    secondary,
    tertiary,
    icon,
    forcedWidth,
  }) => css`
    background-color: ${theme.colors.primary};
    border: 2px solid;
    box-shadow: none;
    color: ${theme.colors.secondary};
    padding: 16px 20px;
    outline: none;
    border-radius: 8px;
    align-items: center;
    display: flex;
    justify-content: ${icon ? 'space-evenly' : 'center'};
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

const IconContainer = styled(IconComponent)`
  margin-right: 10px;
`

const ChildrenContainer = styled.div`
  flex-grow: 1;
`
