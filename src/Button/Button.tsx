import { ButtonHTMLAttributes, FC, ReactNode, forwardRef } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components'

import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Icon as IconComponent } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Loader } from '../Loader'
import { focusOutlineStyle } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

type Props = {
  children: ReactNode
  id?: string
  className?: string
  disabled?: boolean
  handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void
  loading?: boolean
  primary?: boolean
  secondary?: boolean
  fallbackStyle?: boolean
  textBtn?: boolean
  smallButton?: boolean
  icon?: Icons
  trailingIcon?: boolean
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
    disabled = false,
    handleClick,
    loading = false,
    primary = false,
    secondary = false,
    fallbackStyle = false,
    textBtn = false,
    smallButton = false,
    icon,
    trailingIcon = false,
    forcedWidth = '',
    form,
    type,
    ...otherProps
  } = props

  return (
    <Container
      forwardedAs="button"
      id={id}
      className={className}
      disabled={disabled || loading}
      onClick={handleClick}
      $loading={loading}
      $primary={primary}
      $secondary={secondary}
      $fallbackStyle={fallbackStyle}
      $textBtn={textBtn}
      $smallButton={smallButton}
      $trailingIcon={trailingIcon}
      $forcedWidth={forcedWidth}
      {...(form ? { form } : {})}
      type={type}
      {...otherProps}
      ref={ref}
    >
      {loading && (
        <LoaderContainer>
          <Loader color="color.icon.base" height="16" />
        </LoaderContainer>
      )}
      <ContentContainer $icon={icon} $loading={loading}>
        {!trailingIcon && icon && (
          <IconContainer
            $trailingIcon={trailingIcon}
            render={icon}
            size={smallButton ? 16 : 24}
            color="color.icon.base"
          />
        )}
        <ChildrenContainer className="childrenContainer">
          {children}
        </ChildrenContainer>
        {trailingIcon && icon && textBtn && (
          <IconContainer
            $trailingIcon={trailingIcon}
            render={icon}
            size={smallButton ? 16 : 24}
            color="color.icon.base"
            className="iconContainer"
          />
        )}
      </ContentContainer>
    </Container>
  )
})

Button.displayName = 'Button'

type IButton = TransientProps<
  Required<
    Pick<
      ButtonProps,
      | 'primary'
      | 'secondary'
      | 'forcedWidth'
      | 'fallbackStyle'
      | 'textBtn'
      | 'trailingIcon'
      | 'smallButton'
    >
  >
> & {
  $loading: NonNullable<ButtonProps['loading']>
  disabled: boolean
}

const Container = styled(Box)<IButton>(
  ({
    disabled,
    $loading,
    $primary,
    $secondary,
    $forcedWidth,
    $fallbackStyle,
    $textBtn,
    $smallButton,
  }) => css`
    position: relative;
    background-color: ${({ theme }) => theme.color.interactive.primary.base};
    box-shadow: none;
    color: ${({ theme }) => theme.color.text.base};
    padding: 0 20px;
    outline: none;
    border-radius: 10000px;
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    cursor: ${disabled || $loading ? 'not-allowed' : 'pointer'};
    line-height: 100%;
    font-size: 16px;
    opacity: ${disabled ? '0.5' : '1'};
    width: ${$forcedWidth ? $forcedWidth : 'auto'};

    ${focusOutlineStyle}

    ${$primary &&
    css`
      &:hover {
        background-color: ${({ theme }) =>
          !(disabled || $loading) && theme.color.interactive.primary.hover};
      }
      &:active {
        background-color: ${({ theme }) =>
          theme.color.interactive.primary.pressed};
      }
    `}

    ${$secondary &&
    css`
      background-color: ${({ theme }) =>
        theme.color.interactive.secondary.base};

      &:hover {
        background-color: ${({ theme }) =>
          !(disabled || $loading) && theme.color.interactive.secondary.hover};
      }
      &:active {
        background-color: ${({ theme }) =>
          theme.color.interactive.secondary.pressed};
      }
    `}
  ${$fallbackStyle &&
    css`
      background-color: ${({ theme }) => theme.color.interactive.tertiary.base};

      &:hover {
        background-color: ${({ theme }) =>
          !(disabled || $loading) && theme.color.interactive.tertiary.hover};
      }
      &:active {
        background-color: ${({ theme }) =>
          theme.color.interactive.tertiary.pressed};
      }
    `}
  ${$smallButton &&
    css`
      padding: 0 10px;
      min-width: 54px;
      font-size: 14px;

      .childrenContainer {
        padding: 9px 0;
      }

      span {
        margin: 0 5px 0 0;
      }
    `}
  ${$textBtn &&
    css`
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      text-decoration: underline;

      &:hover {
        background-color: ${({ theme }) =>
          !(disabled || $loading) && theme.color.interactive.primary.hover};
      }
      &:active {
        background-color: transparent;
        color: ${({ theme }) => theme.color.text.subtle};
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

const ContentContainer = styled.div<{ $loading: boolean; $icon?: Icons }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $icon }) => ($icon ? 'space-evenly' : 'center')};
  opacity: ${({ $loading }) => ($loading ? '0' : '1')};
`

const IconContainer = styled(IconComponent)<
  TransientProps<Pick<ButtonProps, 'trailingIcon'>>
>(
  ({ $trailingIcon }) => css`
    margin: ${$trailingIcon ? '0 0 0 10px' : '0 10px 0 0'};
  `,
)

const ChildrenContainer = styled.div`
  padding: 16px 0;
  flex-grow: 1;
`
