import React, { FC, FocusEvent, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../theme'
import { Box } from '../Box'
import { Text } from '../Text'
import { RadioButton, FakeInput } from './RadioButtonStyled'
import { useUniqueId } from '../utils/id'
import { MarginProps } from '../utils/space'
import { useDeprecatedWarning } from '../utils/deprecated'

export type ConfirmationProps = {
  onChange(value?: boolean): void
  checked?: boolean
  id?: string
  error?: boolean
  errorMsg?: string
  label?: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  sublabel?: string | ReactElement
  yesLabel?: string | ReactElement
  noLabel?: string | ReactElement
  required?: boolean
  disabled?: boolean
} & MarginProps

export const Confirmation: FC<ConfirmationProps> = (props) => {
  const {
    checked,
    onChange,
    id: idProp,
    error = false,
    errorMsg = '',
    label,
    onBlur,
    sublabel,
    yesLabel = 'Yes',
    noLabel = 'No',
    required = false,
    disabled = false,
    ...marginProps
  } = props

  useDeprecatedWarning({
    title: 'Confirmation',
    message:
      'The Confirmation component has been deprecated. Please use the new RadioGroup component instead.',
    componentProps: props,
  })

  const id = useUniqueId(idProp)
  return (
    <ConfirmationWrapper {...marginProps}>
      {(label || sublabel) && (
        <TextWrapper>
          {label && (
            <SectionHeadingText tag="h3">
              {label}
              {required && <Asterisk>*</Asterisk>}
            </SectionHeadingText>
          )}
          {sublabel && (
            <Text tag="p" typo="base-small" color="subtext">
              {sublabel}
            </Text>
          )}
        </TextWrapper>
      )}
      <RadioButtonGroupWrapper>
        <RadioButtonGroup>
          <RadioButtonWrapper
            checked={checked === true}
            error={error}
            disabled={disabled}
          >
            <RadioButton
              id={id}
              label={yesLabel}
              checked={checked === true}
              onChange={() => onChange(true)}
              value={id}
              onBlur={onBlur}
              disabled={disabled}
            />
          </RadioButtonWrapper>
          <RadioButtonWrapper
            checked={checked === false}
            error={error}
            disabled={disabled}
          >
            <RadioButton
              id={`${id}-1`}
              label={noLabel}
              checked={checked === false}
              onChange={() => onChange(false)}
              value={`${id}-1`}
              onBlur={onBlur}
              disabled={disabled}
            />
          </RadioButtonWrapper>
        </RadioButtonGroup>
        {error && <ErrorBox>{errorMsg}</ErrorBox>}
      </RadioButtonGroupWrapper>
    </ConfirmationWrapper>
  )
}

const RadioButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const getColor = (checked?: boolean, error?: boolean) => {
  if (error) {
    return `2px solid ${theme.colors.error}`
  } else if (checked) {
    return `2px solid ${theme.colors.secondary}`
  } else {
    return 'none'
  }
}

const RadioButtonWrapper = styled.div<FakeInput>`
  background-color: ${({ checked }: FakeInput) =>
    !checked && `${theme.colors.background}`};
  border: ${({ checked, error }: FakeInput) => getColor(checked, error)};
  margin-right: 10px;
  width: 139px;
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 12px;
  border-radius: 5px;
  font-weight: bold;
  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${theme.colors.secondary};
      opacity: 0.5;
    `}
`

const ErrorBox = styled.span`
  margin-top: 7px;
  margin-left: 12px;
  font-size: 12px;
  color: ${theme.colors.error};
`

const ConfirmationWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`

const SectionHeadingText = styled(Text)`
  font-weight: bold;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

const Asterisk = styled.span`
  font-size: 14px;
  color: ${theme.colors.error};
`
