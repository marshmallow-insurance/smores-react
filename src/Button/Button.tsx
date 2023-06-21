import React, { FC, ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { useDeprecatedWarning } from '../utils/deprecated'
import { Box } from '../Box'
import { Loader } from '../Loader'
import { Icon as IconComponent } from '../Icon'
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
  tertiary?: boolean
  fallback?: boolean
  textBtn?: boolean
  icon?: string
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
    tertiary = false,
    fallback = false,
    textBtn = false,
    icon = '',
    trailingIcon = false,
    forcedWidth = '',
    form,
    type,
    ...otherProps
  } = props

  useDeprecatedWarning({
    enabled: tertiary,
    title: 'Tertiary prop usage',
    message:
      "You're using the tertiary prop which is now deprecated. Please use the new 'fallback' prop instead, or 'primary' or 'secondary' as appropriate.",
    componentProps: props,
  })

  return (
    <Container
      as="button"
      id={id}
      className={className}
      disabled={disabled}
      onClick={handleClick}
      $loading={loading}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      fallback={fallback}
      textBtn={textBtn}
      icon={icon}
      trailingIcon={trailingIcon}
      forcedWidth={forcedWidth}
      {...(form ? { form } : {})}
      type={type}
      {...otherProps}
      ref={ref}
    >
      {loading && (
        <LoaderContainer>
          <Loader color={'liquorice'} height="16" />
        </LoaderContainer>
      )}
      <ContentContainer icon={icon} $loading={loading}>
        {!trailingIcon && icon && (
          <IconContainer
            trailingIcon={trailingIcon}
            render={icon}
            size={24}
            color={'liquorice'}
          />
        )}
        <ChildrenContainer>{children}</ChildrenContainer>
        {trailingIcon && icon && textBtn && (
          <IconContainer
            trailingIcon={trailingIcon}
            render={icon}
            size={24}
            color={'liquorice'}
          />
        )}
      </ContentContainer>
    </Container>
  )
})

Button.displayName = 'Button'

type IButton = Required<
  Pick<
    ButtonProps,
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'icon'
    | 'forcedWidth'
    | 'fallback'
    | 'textBtn'
    | 'trailingIcon'
  >
> & {
  $loading: NonNullable<ButtonProps['loading']>
}

const Container = styled(Box)<IButton>(
  ({
    disabled,
    $loading,
    primary,
    secondary,
    tertiary,
    forcedWidth,
    fallback,
    textBtn,
  }) => css`
    position: relative;
    background-color: ${theme.colors.marshmallowPink};
    box-shadow: none;
    color: ${theme.colors.liquorice};
    padding: 0 20px;
    outline: none;
    border-radius: 10000px;
    font-weight: ${theme.font.weight.medium};
    cursor: ${disabled || $loading ? 'not-allowed' : 'pointer'};
    line-height: 100%;
    font-size: 16px;
    opacity: ${disabled ? '0.5' : '1'};
    width: ${forcedWidth ? forcedWidth : 'auto'};

    ${primary &&
    css`
      color: ${theme.colors.liquorice};

      &:hover {
        background-color: ${!(disabled || $loading) && theme.colors.bubblegum};
      }
      &:active {
        background-color: ${theme.colors.lollipop};
      }
    `}
    ${secondary &&
    css`
      background-color: ${theme.colors.oatmeal};

      &:hover {
        background-color: ${!(disabled || $loading) && theme.colors.mascarpone};
      }
      &:active {
        background-color: ${theme.colors.custard};
      }
    `}
  ${(tertiary || fallback) &&
    css`
      background-color: ${theme.colors.cream};

      &:hover {
        background-color: ${!(disabled || $loading) && theme.colors.coconut};
      }
      &:active {
        background-color: ${theme.colors.mascarpone};
      }
    `}
  ${textBtn &&
    css`
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      text-decoration: underline;

      &:hover {
        background-color: ${!(disabled || $loading) && theme.colors.fairyFloss};
      }
      &:active {
        background-color: transparent;
        color: ${theme.colors.sesame};
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

const IconContainer = styled(IconComponent)<Pick<ButtonProps, 'trailingIcon'>>(
  ({ trailingIcon }) => css`
    margin: ${trailingIcon ? '0 0 0 10px' : '0 10px 0 0'};
  `,
)

const ChildrenContainer = styled.div`
  padding: 16px 0;
  flex-grow: 1;
`
