import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../../Box'
import { Icon } from '../../Icon'
import { Text } from '../../Text'
import { CommonFieldProps } from '../commonFieldTypes'
import { markPointerFocus } from './fieldStyles'

interface InternalFieldProps extends CommonFieldProps {
  children: ReactNode
  className?: string
  htmlFor?: string
  fieldType: 'field' | 'fieldset'
  /** id for the assistive text, so a control can reference it with `aria-describedby` */
  assistiveTextId?: string
  /** id for the error message, so a control can reference it with `aria-describedby` */
  errorMsgId?: string
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
  assistiveTextId,
  errorMsgId,
  ...marginProps
}: InternalFieldProps) => {
  const labelTag = fieldType === 'field' ? 'label' : 'legend'
  // Clicking a label focuses its field, which shouldn't show the focus ring.
  const handleLabelPointerDown = htmlFor
    ? () => markPointerFocus(document.getElementById(htmlFor))
    : undefined

  const textColor = error ? 'color.feedback.negative.200' : 'color.text.subtle'
  return (
    <Container
      forwardedAs={fieldType === 'field' ? 'div' : 'fieldset'}
      className={className}
      {...marginProps}
    >
      {label && (
        <>
          {renderAsTitle ? (
            <Box mb="space.200">
              <Text
                tag={labelTag}
                typo="heading-small"
                htmlFor={htmlFor}
                onPointerDown={handleLabelPointerDown}
              >
                {label}
              </Text>

              {assistiveText && (
                <Text
                  tag="p"
                  color="color.text.subtle"
                  mt="space.050"
                  id={assistiveTextId}
                >
                  {assistiveText}
                </Text>
              )}
            </Box>
          ) : (
            <Text
              tag={labelTag}
              typo="label"
              color={textColor}
              htmlFor={htmlFor}
              onPointerDown={handleLabelPointerDown}
              mb="space.050"
            >
              {label}
              {required && (
                <Text
                  tag="span"
                  typo="body-small"
                  color="color.feedback.negative.200"
                >
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
          color={textColor}
          mt="space.050"
          id={assistiveTextId}
        >
          {assistiveText}
        </Text>
      )}

      {error &&
        errorMsg &&
        (typeof errorMsg === 'string' ? (
          <Box
            flex
            alignItems="center"
            mt="space.100"
            gap="space.050"
            id={errorMsgId}
          >
            <Icon
              render="warning"
              size={16}
              color="color.feedback.negative.200"
            />
            <Text tag="span" typo="caption" color="color.feedback.negative.200">
              {errorMsg}
            </Text>
          </Box>
        ) : (
          <Box mt="space.100" id={errorMsgId}>
            {errorMsg}
          </Box>
        ))}

      {/* When completed is false, whitespace is rendered */}
      {completed !== undefined && (
        <AnimationWrapper
          $displayStatus={completed}
          $isError={!!(error && errorMsg)}
        >
          <StatusWrapper mt={'space.100'}>
            <Icon
              render="included"
              size={16}
              color="color.feedback.positive.200"
            />
            <Text typo="caption" color="color.feedback.positive.200">
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
  gap: ${({ theme }) => theme.space['050']};
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  // In case, the element is a 'fieldset', we remove the border
  border: 0;
`
