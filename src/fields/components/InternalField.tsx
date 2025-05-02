import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../../Box'
import { Icon } from '../../Icon'
import { Text } from '../../Text'
import { CommonFieldProps } from '../commonFieldTypes'

interface InternalFieldProps extends CommonFieldProps {
  children: ReactNode
  className?: string
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
  error,
  errorMsg,
  required,
  completed,
  ...marginProps
}: InternalFieldProps) => {
  const labelTag = fieldType === 'field' ? 'label' : 'legend'

  return (
    <Container
      forwardedAs={fieldType === 'field' ? 'div' : 'fieldset'}
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
                <Text tag="p" color="sesame" mt={{ custom: 4 }}>
                  {assistiveText}
                </Text>
              )}
            </Box>
          ) : (
            <Text
              tag={labelTag}
              typo="label"
              color={error ? 'strawberry' : 'sesame'}
              htmlFor={htmlFor}
              mb={{ custom: 4 }}
            >
              {label}
              {required && (
                <Text tag="span" typo="body-small" color="strawberry">
                  *
                </Text>
              )}
            </Text>
          )}
        </>
      )}

      <Box>{children}</Box>
      {fieldType === 'field' && assistiveText && !renderAsTitle && (
        <Text
          tag={labelTag}
          typo="caption"
          color={error ? 'strawberry' : 'sesame'}
          mt={{ custom: 4 }}
        >
          {assistiveText}
        </Text>
      )}

      {error &&
        errorMsg &&
        (typeof errorMsg === 'string' ? (
          <Box flex alignItems="center" mt="8px" gap={{ custom: 4 }}>
            <Icon render="warning" size={16} color="strawberry" />
            <Text tag="span" typo="caption" color="strawberry">
              {errorMsg}
            </Text>
          </Box>
        ) : (
          <Box mt="8px">{errorMsg}</Box>
        ))}

      {/* When completed is false, whitespace is rendered */}
      {completed !== undefined && (
        <AnimationWrapper
          $displayStatus={completed}
          $isError={!!(error && errorMsg)}
        >
          <StatusWrapper mt={'8px'}>
            <Icon render="included" size={16} color="apple" />
            <Text typo="caption" color="apple">
              Complete
            </Text>
          </StatusWrapper>
        </AnimationWrapper>
      )}
    </Container>
  )
}

const AnimationWrapper = styled(Box)<{
  $displayStatus: boolean
  $isError: boolean
}>`
  width: 0;
  overflow: hidden;

  ${({ $displayStatus }) =>
    $displayStatus &&
    css`
      transition: width 0.6s ease-in;
      width: 100%;
    `}

  /* This enables animation to appear when previous state is error */
  ${({ $isError }) =>
    $isError &&
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
