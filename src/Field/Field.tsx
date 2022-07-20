import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Icon } from '../Icon'
import { Text } from '../Text'
import { Box } from '../Box'
import { theme } from '../theme'
import { CommonFieldTypes } from './types/commonFieldTypes'

interface FieldProps extends CommonFieldTypes {
  children: React.ReactElement
  showCaret?: boolean
  value: string
  trailingIcon?: string
  dropdownKey?: string // nb only used by dropdown component but required on content in that context
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
  ...marginProps
}: FieldProps) => {
  return (
    <Container className={className} {...marginProps}>
      {label && (
        <Box mb={{ custom: outlined ? 4 : 0 }}>
          {renderAsTitle ? (
            <Title>{label}</Title>
          ) : (
            <Text tag="label" color="subtext" typo="label" htmlFor={id}>
              {label}
              {required && <Asterisk>*</Asterisk>}
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

const Asterisk = styled.span`
  font-size: 14px;
  color: ${theme.colors.error};
`
