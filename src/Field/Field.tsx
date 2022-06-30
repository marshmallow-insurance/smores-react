import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Icon } from '../Icon'
import { Text } from '../Text'
import { Box } from '../Box'
import { theme } from '../theme'

type Props = {
  children: React.ReactElement
  renderAsTitle?: boolean
  id: string
  error?: boolean // nb this needs to be optional for legacy support - but we will want to enforce in  the future
  label?: string
  outlined: boolean
  value: string
  trailingIcon?: string
  errorMsg?: string
  dropdownKey?: string // nb only used by dropdown component but required on content in that context
}

export const Field = ({
  children,
  renderAsTitle,
  error,
  id,
  label,
  outlined = false,
  value,
  trailingIcon,
  errorMsg,
  dropdownKey,
}: Props) => {
  return (
    <Container>
      {label && (
        <Box mb={outlined ? '4px' : '0px'}>
          {renderAsTitle ? (
            <Title>{label}</Title>
          ) : (
            <Text tag="label" color="subtext" typo="label" htmlFor={id}>
              {label}
            </Text>
          )}
        </Box>
      )}
      <Content
        value={value}
        outlined={outlined}
        error={error}
        key={dropdownKey ?? null}
      >
        {children}
      </Content>
      {trailingIcon && <Icon render={trailingIcon} color="subtext" />}

      {error && <ErrorBox>{errorMsg}</ErrorBox>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`

const Content = styled.div<{
  error?: boolean
  outlined: boolean
  value?: string
}>`
  border-bottom: 1px solid;
  border-color: ${({ error }) =>
    theme.colors[`${error ? 'error' : 'outline'}`]};
  background-color: ${({ outlined }) =>
    outlined ? 'transparent' : theme.colors['white']};
  display: flex;
  height: 32px;

  &:hover,
  &:focus-within {
    border-color: ${({ error }) =>
      error ? theme.colors.error : darken(0.1, theme.colors.outline)};
  }

  ${({ outlined, error }) =>
    outlined &&
    `
      border: 2px solid ${error ? theme.colors.error : theme.colors.outline};
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
