import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'
import { CommonFieldTypes } from './types/commonFieldTypes'

interface FieldProps extends CommonFieldTypes {
  children: ReactNode
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
  errorMsg,
  dropdownKey,
  required,
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
        outlined={outlined}
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
  outlined: boolean
  fullHeight?: boolean
}>`
  position: relative;
  height: ${({ fullHeight }) => (fullHeight ? `100%` : `32px`)};

  ${({ outlined }) =>
    outlined &&
    `
      height: auto;
    `}
`
