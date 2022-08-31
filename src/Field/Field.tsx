import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Text } from '../Text'
import { Box } from '../Box'
import { theme } from '../theme'
import { CommonFieldTypes } from './types/commonFieldTypes'

interface FieldProps extends CommonFieldTypes {
  children: ReactNode
  showCaret?: boolean
  value: string
  trailingIcon?: string
  dropdownKey?: string // nb only used by dropdown component but required on content in that context
  fullHeight?: boolean // used to make text areas full size
  assistiveText?: string
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
  errorMsg,
  dropdownKey,
  required,
  showCaret,
  fullHeight = false,
  assistiveText,
  ...marginProps
}: FieldProps) => {
  return (
    <Container className={className} {...marginProps}>
      {label && (
        <>
          {renderAsTitle ? (
            <Box mb="16px">
              <Text
                tag="label"
                typo="heading-small"
                htmlFor={id}
                mb={assistiveText ? { custom: 4 } : undefined}
              >
                {label}
              </Text>

              {assistiveText && (
                <Text tag="p" color="subtext">
                  {assistiveText}
                </Text>
              )}
            </Box>
          ) : (
            <Box mb={{ custom: outlined ? 4 : 0 }}>
              <Text tag="label" typo="label" color="subtext" htmlFor={id}>
                {label}
                {required && (
                  <Text tag="span" typo="body-small" color="error">
                    *
                  </Text>
                )}
              </Text>
            </Box>
          )}
        </>
      )}

      <Content
        fullHeight={fullHeight}
        value={value}
        outlined={outlined}
        error={error}
        key={dropdownKey ?? null}
      >
        {children}
      </Content>

      {error && (
        <Text tag="span" typo="caption" color="error" mt="8px">
          {errorMsg}
        </Text>
      )}
    </Container>
  )
}

const Container = styled(Box)<{ className: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
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
