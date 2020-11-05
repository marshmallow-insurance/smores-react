import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { theme } from '../theme'
import { LegacyButton } from './LegacyButton'
import { Loader } from '../Loader'
import { FontStyle } from '../fontStyle'

interface IButton {
  /** disabled state */
  disabled: boolean
  /** primary button styling */
  primary: boolean
  /** loading state */
  loading: boolean
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
  primary?: boolean
  loading?: boolean
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
  primary = false,
  loading = false
}) => {

  return (
    <div>
      {
        primary === true ? (
          <Container
            id={id}
            disabled={disabled}
            onClick={handleClick}
            loading={loading}
            primary={primary}
          >
            {
              loading === true ? (
                <Loader color="white" height="16" />
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
  background-color: ${theme.colors.pink5};
  box-shadow: none;
  color: white;
  padding: 16px 20px;
  border: none;
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
    background-color: ${p => p.loading ? theme.colors.pink5 : theme.colors.pink6};
  }
  &:active {
    background-color: ${theme.colors.pink7};
  }
`