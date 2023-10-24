import React, { FC, ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
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
  fallbackStyle?: boolean
  textBtn?: boolean
  smallButton?: boolean
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
    fallbackStyle = false,
    textBtn = false,
    smallButton = false,
    icon = '',
    trailingIcon = false,
    forcedWidth = '',
    form,
    type,
    ...otherProps
  } = props

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
      fallbackStyle={fallbackStyle}
      textBtn={textBtn}
      smallButton={smallButton}
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
            size={smallButton ? 16 : 24}
            color={'liquorice'}
          />
        )}
        <ChildrenContainer className="childrenContainer">
          {children}
        </ChildrenContainer>
        {trailingIcon && icon && textBtn && (
          <IconContainer
            trailingIcon={trailingIcon}
            render={icon}
            size={smallButton ? 16 : 24}
            color={'liquorice'}
            className="iconContainer"
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
    | 'icon'
    | 'forcedWidth'
    | 'fallbackStyle'
    | 'textBtn'
    | 'trailingIcon'
    | 'smallButton'
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
    forcedWidth,
    fallbackStyle,
    textBtn,
    smallButton,
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
  ${fallbackStyle &&
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
  ${smallButton &&
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
