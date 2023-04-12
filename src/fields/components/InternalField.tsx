import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Text } from '../../Text'
import { Box } from '../../Box'
import { InternalCommonFieldProps } from '../commonFieldTypes'
import { Icon } from '../../Icon'

interface InternalFieldProps extends InternalCommonFieldProps {
  children: ReactNode
  className?: string
  assistiveText?: string
  htmlFor?: string
  fieldType: 'field' | 'fieldset'
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
  completed,
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

      {/* When completed is false, whitespace is rendered */}
      {completed !== undefined && (
        <AnimationWrapper
          displayStatus={completed}
          isError={!!(error && errorMsg)}
        >
          <StatusWrapper mt={'8px'}>
            <Icon render="included" size={16} color="success" />
            <Text typo="caption" color="success">
              Complete
            </Text>
          </StatusWrapper>
        </AnimationWrapper>
      )}
    </Container>
  )
}

const AnimationWrapper = styled(Box)<{
  displayStatus: boolean
  isError: boolean
}>`
  width: 0;
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

const StatusWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  // In case, the element is a 'fieldset', we remove the border
  border: 0;
`
