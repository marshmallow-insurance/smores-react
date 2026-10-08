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
import { useDeprecatedWarning } from '../utils/deprecated'

export type ButtonVariant = 'primary' | 'secondary' | 'neutral' | 'tertiary'
export type ButtonSize = 'regular' | 'small'

type Props = {
  children: ReactNode
  id?: string
  className?: string
  disabled?: boolean
  handleClick?: (e: FormEvent<HTMLButtonElement>) => void
  loading?: boolean
  /**
   * Visual style of the button:
   * - `primary`: the main action on a screen
   * - `secondary`: supporting or alternative actions
   * - `neutral`: as secondary, for when it lacks contrast with the background
   * - `tertiary`: low-emphasis, text-only actions, e.g. "Skip" or "Cancel"
   */
  variant?: ButtonVariant
  size?: ButtonSize
  /** @deprecated Use `variant="primary"` */
  primary?: boolean
  /** @deprecated Use `variant="secondary"` */
  secondary?: boolean
  /** @deprecated Use `variant="tertiary"` */
  tertiary?: boolean
  /** @deprecated Use `variant="neutral"` */
  fallbackStyle?: boolean
  /** Legacy underlined text style. Prefer `variant="tertiary"` for new low-emphasis actions */
  textBtn?: boolean
  /** @deprecated Use `size="small"` */
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
    variant,
    size,
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

  useDeprecatedWarning({
    enabled: primary || secondary || tertiary || fallbackStyle || smallButton,
    title: 'Button',
    message:
      'The primary, secondary, tertiary, fallbackStyle and smallButton props are deprecated. Use variant="primary" | "secondary" | "neutral" | "tertiary" and size="regular" | "small" instead.',
  })

  // Legacy props resolve in the order their styles used to override each other.
  // Primary is the default, except for the legacy text button which has no variant
  const resolvedVariant: ButtonVariant | undefined =
    variant ??
    (fallbackStyle
      ? 'neutral'
      : tertiary
        ? 'tertiary'
        : secondary
          ? 'secondary'
          : primary || !textBtn
            ? 'primary'
            : undefined)
  const isSmall = size ? size === 'small' : smallButton
  const isTertiary = resolvedVariant === 'tertiary'

  // Icon-only buttons drop the gap so the icon stays centred
  // React renders nothing for null, undefined, booleans and empty strings
  const hasLabel =
    children != null && typeof children !== 'boolean' && children !== ''

  const iconToRender = iconComponent ? (
    <CustomIconContainer>{iconComponent}</CustomIconContainer>
  ) : icon ? (
    <IconComponent
      render={icon}
      size={iconSize}
      // Matches the label, which tertiary dims by colour rather than opacity when disabled
      color={
        isTertiary && disabled
          ? 'color.icon.nonEssential'
          : 'color.icon.contrast'
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
      $primary={resolvedVariant === 'primary'}
      $secondary={resolvedVariant === 'secondary'}
      $tertiary={isTertiary}
      $neutral={resolvedVariant === 'neutral'}
      $textBtn={textBtn}
      $smallButton={isSmall}
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
      | 'textBtn'
      | 'trailingIcon'
      | 'smallButton'
    >
  >
> & {
  $neutral: boolean
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
    $neutral,
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
    $neutral &&
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
