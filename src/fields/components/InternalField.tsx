import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Text } from '../../Text'
import { Box } from '../../Box'
import { InternalCommonFieldProps, Status } from '../commonFieldTypes'
import { Icon } from '../../Icon'
import { Color } from 'theme'

interface InternalFieldProps extends InternalCommonFieldProps {
  children: ReactNode
  className?: string
  assistiveText?: string
  htmlFor?: string
  fieldType: 'field' | 'fieldset'
}

export const statusContents: {
  [key in Status]: {
    icon: string
    color: Color
    textContent: string
  }
} = {
  complete: { icon: 'included', color: 'success', textContent: 'Complete' },
}

export const InternalField = ({
  children,
  fieldType,
  renderAsTitle,
  htmlFor,
  className,
  label,
  assistiveText,
  outlined = false,
  error,
  errorMsg,
  required,
  status,
  ...marginProps
}: InternalFieldProps) => {
  const labelTag = fieldType === 'field' ? 'label' : 'legend'

  return (
    <Container
      as={fieldType === 'field' ? 'div' : 'fieldset'}
      className={className}
      {...marginProps}
    >
      {label && (
        <>
          {renderAsTitle ? (
            <Box mb="16px">
              <Text tag={labelTag} typo="heading-small" htmlFor={htmlFor}>
                {label}
              </Text>

              {assistiveText && (
                <Text tag="p" color="subtext" mt={{ custom: 4 }}>
                  {assistiveText}
                </Text>
              )}
            </Box>
          ) : (
            <Text
              tag={labelTag}
              typo="label"
              color="subtext"
              htmlFor={htmlFor}
              mb={{ custom: outlined ? 4 : 0 }}
            >
              {label}
              {required && (
                <Text tag="span" typo="body-small" color="error">
                  *
                </Text>
              )}
            </Text>
          )}
        </>
      )}

      <Box>{children}</Box>

      {error && errorMsg && (
        <Text tag="span" typo="caption" color="error" mt="8px">
          {errorMsg}
        </Text>
      )}

      {status && (
        <StatusWrapper
          displayStatus={status.showStatus}
          isError={!!(error && errorMsg)}
          mt="8px"
        >
          <Icon
            render={statusContents[status.type].icon}
            size={16}
            color={statusContents[status.type].color}
          />
          <Text typo="caption" color="success">
            Complete
          </Text>
        </StatusWrapper>
      )}
    </Container>
  )
}

const StatusWrapper = styled(Box)<{ displayStatus: boolean; isError: boolean }>`
  display: flex;
  align-items: center;
  width: 0;
  gap: 4px;
  overflow: hidden;

  ${({ displayStatus }) =>
    displayStatus &&
    css`
      transition: width 0.6s ease-in;
      width: 100%;
    `}

  /* This enables animation to appear when previous state is error */
  ${({ isError }) =>
    isError &&
    css`
      height: 0;
    `}
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  // In case, the element is a 'fieldset', we remove the border
  border: 0;
`
