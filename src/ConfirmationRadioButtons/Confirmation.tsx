import React, { FC, FormEvent, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../theme'
import { Box } from '../Box'
import { Text } from '../Text'
import { RadioButton, FakeInput } from './RadioButtonStyled'

export type ConfirmationProps = {
  onChange(value?: boolean): void
  checked?: boolean
  id: string
  error?: boolean
  errorMsg?: string
  label?: string
  onBlur?: (e: FormEvent<HTMLInputElement>) => void
  sublabel?: string | ReactElement
  yesLabel?: string | ReactElement
  noLabel?: string | ReactElement
  labelHidden?: boolean
}

export const Confirmation: FC<ConfirmationProps> = ({
  checked,
  onChange,
  id,
  error = false,
  errorMsg = '',
  label,
  onBlur,
  sublabel,
  yesLabel = 'Yes',
  noLabel = 'No',
  labelHidden = false,
}: ConfirmationProps) => {
  return (
    <ConfirmationWrapper>
      {!labelHidden && (
        <TextWrapper>
          {label && (
            <SectionHeadingText tag="h3" labelHidden={labelHidden}>
              {label}
            </SectionHeadingText>
          )}
          {sublabel && (
            <Text tag="p" typo="base-small" color={theme.colors.subtext}>
              {sublabel}
            </Text>
          )}
        </TextWrapper>
      )}
      <RadioButtonGroupWrapper>
        <RadioButtonGroup>
          <RadioButtonWrapper checked={checked === true} error={error}>
            <RadioButton
              id={id}
              label={yesLabel}
              checked={checked === true}
              onChange={() => onChange(true)}
              value={id}
              onBlur={onBlur}
            />
          </RadioButtonWrapper>
          <RadioButtonWrapper checked={checked === false} error={error}>
            <RadioButton
              id={`${id}-1`}
              label={noLabel}
              checked={checked === false}
              onChange={() => onChange(false)}
              value={`${id}-1`}
              onBlur={onBlur}
            />
          </RadioButtonWrapper>
        </RadioButtonGroup>
        {error && <ErrorBox>{errorMsg}</ErrorBox>}
      </RadioButtonGroupWrapper>
    </ConfirmationWrapper>
  )
}

interface ILabelHidden {
  labelHidden?: boolean
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
  margin: 0px 10px;
  width: 139px;
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 12px;
  border-radius: 5px;
  font-weight: bold;
`

const ErrorBox = styled.span`
  margin-top: 7px;
  margin-left: 12px;
  font-size: 12px;
  color: ${theme.colors.error};
`

const ConfirmationWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const SectionHeadingText = styled(Text)<ILabelHidden>(
  ({ labelHidden }) => css`
    font-weight: bold;
    ${labelHidden &&
    `
      clip: rect(1, 1, 1, 1);
      clipPath: inset(50%);
      height: 1;
      margin: -1;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1;
    `}
  `,
)

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
