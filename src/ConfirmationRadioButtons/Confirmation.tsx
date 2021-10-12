import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import { Box } from '../Box'
import { Text } from '../Text'
import { RadioButton, FakeInput } from './RadioButtonStyled'

type ConfirmationProps = {
  onChange(value?: boolean): void
  checked?: boolean
  id: string
  error?: boolean
  errorMsg?: string
  label: string
}

export const Confirmation: FC<ConfirmationProps> = ({
  checked,
  onChange,
  id,
  error,
  errorMsg,
  label,
}: ConfirmationProps) => {
  return (
    <ConfirmationWrapper>
      <SectionHeadingText tag="h3">{label}</SectionHeadingText>
      <RadioButtonGroupWrapper>
        <RadioButtonGroup>
          <RadioButtonWrapper checked={checked === true}>
            <RadioButton
              id={id}
              label="Yes"
              checked={checked === true}
              onChange={() => onChange(true)}
              value={id}
            />
          </RadioButtonWrapper>
          <RadioButtonWrapper checked={checked === false}>
            <RadioButton
              id={`${id}-1`}
              label="No"
              checked={checked === false}
              onChange={() => onChange(false)}
              value={`${id}-1`}
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

const RadioButtonWrapper = styled.div<FakeInput>`
  background-color: ${({ checked }: FakeInput) =>
    !checked && `${theme.colors.bg4}`};
  border: ${({ checked }: FakeInput) =>
    checked && `2px solid ${theme.colors.blue7}`};
  margin: 0px 10px;
  width: 139px;
  display: flex;
  align-items: center;
  height: 49px;
  padding-left: 12px;
  border-radius: 5px;
  font-weight: bold;
`

const ErrorBox = styled.span`
  margin-top: 7px;
  margin-left: 12px;
  font-size: 12px;
  color: ${theme.colors.red7};
`
const ConfirmationWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`

const SectionHeadingText = styled(Text)`
  font-weight: bold;
  padding-bottom: 8px;
`
