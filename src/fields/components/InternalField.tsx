import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../../Text'
import { Box } from '../../Box'
import { InternalCommonFieldProps } from '../commonFieldTypes'

interface InternalFieldProps extends InternalCommonFieldProps {
  children: ReactNode
  className?: string
  assistiveText?: string
  htmlFor?: string
  fieldType?: 'field' | 'fieldset'
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
  ...marginProps
}: InternalFieldProps) => {
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
              <Text
                tag={fieldType === 'field' ? 'label' : 'legend'}
                typo="heading-small"
                htmlFor={htmlFor}
              >
                {label}
              </Text>

              {assistiveText && (
                <Text tag="p" color="subtext" mt={{ custom: 4 }}>
                  {assistiveText}
                </Text>
              )}
            </Box>
          ) : (
            <Box mb={{ custom: outlined ? 4 : 0 }}>
              <Text tag="label" typo="label" color="subtext" htmlFor={htmlFor}>
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

      <Box>{children}</Box>

      {error && (
        <Text tag="span" typo="caption" color="error" mt="8px">
          {errorMsg}
        </Text>
      )}
    </Container>
  )
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  // In case, the element is a 'fieldset', we remove the border
  border: 0;
`
