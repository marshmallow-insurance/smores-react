import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { LegacyButton } from './LegacyButton'
import { Loader } from '../Loader'
import { FontStyle } from '../fontStyle'

interface IButton {
  /** disabled state */
  disabled: boolean
  /** loading state */
  loading: boolean
  /** primary button styling */
  primary: boolean
  /** secondary button styling */
  secondary: boolean
  /** tertiary button styling */
  tertiary: boolean
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
  tertiary = false
}) => {

  return (
    <div>
      {
        primary || secondary || tertiary ? (
          <Container
            id={id}
            disabled={disabled}
            onClick={handleClick}
            loading={loading}
            primary={primary}
            secondary={secondary}
            tertiary={tertiary}
          >
            {
              loading ? (
                <Loader color={primary ? 'white' : `${theme.colors.blue7}`} height="16" />
              ) : (
                children
              )
            }
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
        )
      }
      <FontStyle />
    </div>
  )
}

const Container = styled.button<IButton>`
  background-color: ${p => p.primary ? theme.colors.pink5 : p.secondary ? theme.colors.white : theme.colors.bg2};
  box-shadow: none;
  color: ${p => p.primary ? 'white' : `${theme.colors.blue7}`};
  padding: 16px 20px;
  border: ${p => p.secondary ?  `2px solid ${theme.colors.blue7}` : 'none'};
  outline: none;
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: ${theme.font.weight.medium};
  cursor: ${p => (p.disabled || p.loading) ? 'not-allowed' : 'pointer'};
  line-height: 100%;
  font-size: 16px;
  font-family: 'Circular';
  opacity: ${p => p.disabled ? '0.5' : '1'};
  &:hover {
    background-color: ${p => p.primary ? theme.colors.pink6 : 
      p.secondary ? 
        p.loading ? theme.colors.white : theme.colors.bg2 
          : p.disabled ? theme.colors.bg2 
            : theme.colors.grey2}; 
    border-color: ${p => p.secondary && theme.colors.blue6};
  }
  &:active {
    background-color: ${p => p.primary ? theme.colors.pink7 : p.secondary ? p.loading ? theme.colors.white : theme.colors.bg3 : theme.colors.grey3};
  }
`