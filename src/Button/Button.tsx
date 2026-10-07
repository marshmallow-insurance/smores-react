import {
  ButtonHTMLAttributes,
  FC,
  FormEvent,
  ReactNode,
  forwardRef,
} from 'react'
import styled, { css } from 'styled-components'

import { TransientProps } from '../utils/utilTypes'
import { Box } from '../Box'
import { Icon as IconComponent, Icons } from '../Icon'

import { Loader } from '../Loader'
import { focusOutlineStyle } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

type Props = {
  children: ReactNode
  id?: string
  className?: string
  disabled?: boolean
  handleClick?: (e: FormEvent<HTMLButtonElement>) => void
  loading?: boolean
  primary?: boolean
  secondary?: boolean
  /** Low-emphasis, text-only action, e.g. "Skip" or "Cancel" */
  tertiary?: boolean
  fallbackStyle?: boolean
  /** Legacy underlined text style. Prefer `tertiary` for new low-emphasis actions */
  textBtn?: boolean
  smallButton?: boolean
  icon?: Icons
  iconComponent?: ReactNode
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
    fallbackStyle = false,
    textBtn = false,
    smallButton = false,
    icon,
    iconComponent,
    trailingIcon = false,
    forcedWidth = '',
    form,
    type,
    ...otherProps
  } = props

  // Primary is the default type, so an untyped button gets Primary's hover and pressed states too
  const isPrimary =
    primary || !(secondary || tertiary || fallbackStyle || textBtn)

  // Icon-only buttons drop the gap so the icon stays centred
  const hasLabel =
    children !== undefined && children !== null && children !== ''

  const iconToRender = iconComponent ? (
    <CustomIconContainer>{iconComponent}</CustomIconContainer>
  ) : icon ? (
    <IconComponent
      render={icon}
      size={iconSize}
      // Matches the label, which tertiary dims by colour rather than opacity when disabled
      color={
        tertiary && disabled ? 'color.icon.nonEssential' : 'color.icon.contrast'
      }
    />
  ) : null

  return (
    <Container
      forwardedAs="button"
      id={id}
      className={className}
      disabled={disabled || loading}
      onClick={handleClick}
      $loading={loading}
      $primary={isPrimary}
      $secondary={secondary}
      $tertiary={tertiary}
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
      <ContentContainer $loading={loading} $hasLabel={hasLabel}>
        {!trailingIcon && iconToRender ? iconToRender : null}
        <ChildrenContainer className="childrenContainer">
          {children}
        </ChildrenContainer>
        {trailingIcon && iconToRender ? iconToRender : null}
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
      | 'tertiary'
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
    $tertiary,
    $forcedWidth,
    $fallbackStyle,
    $textBtn,
    $smallButton,
  }) => css`
    position: relative;
    background-color: ${({ theme }) => theme.color.interactive.primary.base};
    box-shadow: none;
    color: ${({ theme }) => theme.color.text.contrast};
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

    ${
      $primary &&
      css`
        &:hover {
          background-color: ${({ theme }) =>
            !(disabled || $loading) && theme.color.interactive.primary.hover};
        }
        &:active {
          background-color: ${({ theme }) =>
            theme.color.interactive.primary.selected};
        }
      `
    }

    ${
      $secondary &&
      css`
        background-color: ${({ theme }) =>
          theme.color.interactive.secondary.base};

        &:hover {
          background-color: ${({ theme }) =>
            !(disabled || $loading) && theme.color.interactive.secondary.hover};
        }
        &:active {
          background-color: ${({ theme }) =>
            theme.color.interactive.secondary.selected};
        }
      `
    }
  ${
    $tertiary &&
    css`
      background-color: transparent;
      opacity: 1;

      &:hover {
        background-color: ${({ theme }) =>
          !(disabled || $loading) &&
          theme.color.interactive.neutral.subtle.hover};
      }
      &:active {
        background-color: ${({ theme }) =>
          !(disabled || $loading) &&
          theme.color.interactive.neutral.subtle.selected};
      }

      ${
        disabled &&
        css`
          color: ${({ theme }) => theme.color.text.nonEssential};
        `
      }
    `
  }
  ${
    $fallbackStyle &&
    css`
      background-color: ${({ theme }) => theme.color.interactive.neutral.subtle.base};

      &:hover {
        background-color: ${({ theme }) =>
          !(disabled || $loading) &&
          theme.color.interactive.neutral.subtle.hover};
      }
      &:active {
        background-color: ${({ theme }) =>
          theme.color.interactive.neutral.subtle.selected};
      }
    `
  }
  ${
    $smallButton &&
    css`
      padding: 0 12px;
      min-width: 54px;

      .childrenContainer {
        padding: 8px 0;
      }
    `
  }
  ${
    $textBtn &&
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

      ${
        $smallButton &&
        css`
          font-size: 14px;

          .childrenContainer {
            padding: 9px 0;
          }
        `
      }
    `
  }
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

const ContentContainer = styled.div<{ $loading: boolean; $hasLabel: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $hasLabel }) => ($hasLabel ? '4px' : '0')};
  opacity: ${({ $loading }) => ($loading ? '0' : '1')};
`

const iconSize = 20

// Figma icons use Font Awesome's square bounding box, in which the glyph's em height
// takes up 80% of the box, so custom (Font Awesome) icons are drawn at that size
const CustomIconContainer = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${iconSize}px;
  height: ${iconSize}px;

  svg {
    width: 100%;
    height: 80%;
    overflow: visible;
  }
`

const ChildrenContainer = styled.div`
  padding: 16px 0;
`
