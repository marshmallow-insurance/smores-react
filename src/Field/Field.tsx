import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Icon } from '../Icon'
import { Text } from '../Text'
import { Box } from '../Box'
import { theme } from '../theme'

type Props = {
  children: React.ReactElement
  showCaret?: boolean
  renderAsTitle?: boolean
  className?: string
  id: string
  error?: boolean // nb this needs to be optional for legacy support - but we will want to enforce in  the future
  label?: string
  outlined?: boolean
  value: string
  trailingIcon?: string
  errorMsg?: string
  dropdownKey?: string // nb only used by dropdown component but required on content in that context
  required?: boolean // also optional for now to maintain backwards compaibility
  fullHeight?: boolean // used to make text areas full size
}

export const Field = ({
  children,
  renderAsTitle,
  className = '',
  error,
  id,
  label,
  outlined = false,
  value,
  trailingIcon,
  errorMsg,
  dropdownKey,
  required,
  showCaret,
  fullHeight = false,
}: Props) => {
  return (
    <Container className={className}>
      {label && (
        <Box mb={outlined ? '4px' : '0px'}>
          {renderAsTitle ? (
            <Title>{label}</Title>
          ) : (
            <Text tag="label" color="subtext" typo="label" htmlFor={id}>
              {label}
            </Text>
          )}
          {required && (
            <Text tag="label" color="error" typo="label">
              *
            </Text>
          )}
        </Box>
      )}
      <Content
        fullHeight={fullHeight}
        value={value}
        outlined={outlined}
        error={error}
        key={dropdownKey ?? null}
      >
        {children}
        {showCaret && (
          <Caret outlined={outlined}>
            <Icon render="caret" color="subtext" size={24} />
          </Caret>
        )}
      </Content>
      {trailingIcon && <Icon render={trailingIcon} color="subtext" />}

      {error && <ErrorBox>{errorMsg}</ErrorBox>}
    </Container>
  )
}

const Container = styled(Box)<{ className: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Content = styled.div<{
  error?: boolean
  outlined: boolean
  value?: string
  fullHeight?: boolean
}>`
  position: relative;
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'error' : 'outline'}`]};
  background-color: ${({ outlined }) =>
    !outlined ? 'transparent' : theme.colors['white']};
  display: flex;
  height: ${({ fullHeight }) => (fullHeight ? `100%` : `32px`)};

  &:hover,
  &:focus-within {
    border-color: ${({ error }) =>
      error ? theme.colors.error : darken(0.1, theme.colors.outline)};
  }

  ${({ outlined }) =>
    outlined &&
    `
      border-radius: 8px;
      height: auto;
    `}

  ${({ value }) =>
    value &&
    value != '' &&
    `
    border-color: ${theme.colors.outline};
    `}
`

const ErrorBox = styled.span`
  margin-top: 7px;
  color: ${theme.colors.error};
  font-size: 12px;
`

const Title = styled.h3`
  font-weight: bold;
  padding-bottom: 8px;
`

const Caret = styled.div<{ outlined: boolean }>`
  position: absolute;
  top: 50%;
  z-index: 1;
  right: ${({ outlined }) => (outlined ? '15px' : '0')};
  pointer-events: none;
  transform: translateY(-50%);
`
