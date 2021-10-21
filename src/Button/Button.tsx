import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

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
  children: ReactNode
  id: string
  className?: string
  color?: string
  block?: boolean
  inverted?: boolean
  disabled?: boolean
  outlined?: boolean
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void
  loading?: boolean
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  icon?: string
  forcedWidth?: string
  form?: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<Props> = ({
  children,
  id,
  className = '',
  color = 'blue',
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
}) => {
  return (
    <div>
      {primary || secondary || tertiary ? (
        <Container
          id={id}
          disabled={disabled || loading}
          onClick={handleClick}
          isLoading={loading}
          primary={primary}
          secondary={secondary}
          tertiary={tertiary}
          icon={icon}
          forcedWidth={forcedWidth}
          {...(form ? { form } : {})}
          type={type}
        >
          {loading ? (
            <Loader
              color={primary ? 'white' : `${theme.colors.blue7}`}
              height="16"
            />
          ) : (
            <>
              {icon && (
                <IconContainer
                  render={icon}
                  size={24}
                  color={primary ? 'white' : 'blue7'}
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
          handleClick={handleClick}
        >
          {children}
        </LegacyButton>
      )}
    </div>
  )
}

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
    background-color: ${theme.colors.pink5};
    border: 2px solid;
    box-shadow: none;
    color: ${theme.colors.blue7};
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
      border-color: ${theme.colors.pink5};

      &:hover {
        background-color: ${!(disabled || isLoading) && theme.colors.pink6};
      }
      &:active {
        background-color: ${!(disabled || isLoading) && theme.colors.pink7};
      }
    `}
    ${secondary &&
    css`
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.blue7};

      &:hover {
        background-color: ${!(disabled || isLoading) && theme.colors.bg2};
        border: ${!(disabled || isLoading) &&
        `2px solid ${theme.colors.blue6}`};
      }
      &:active {
        background-color: ${theme.colors.bg2};
        border: 2px solid ${theme.colors.blue7};
      }
    `}
  ${tertiary &&
    css`
      background-color: ${theme.colors.bg4};
      border-color: ${theme.colors.bg4};

      &:hover {
        background-color: ${!(disabled || isLoading) && theme.colors.grey2};
      }
      &:active {
        background-color: ${theme.colors.bg4};
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
