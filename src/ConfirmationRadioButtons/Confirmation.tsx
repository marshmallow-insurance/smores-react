import React, { FC, FormEvent, ReactElement } from 'react'
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
  onBlur?: (e: FormEvent<HTMLInputElement>) => void
  sublabel?: string | ReactElement
  yesLabel?: string | ReactElement
  noLabel?: string | ReactElement
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
}: ConfirmationProps) => (
  <ConfirmationWrapper>
    <TextWrapper>
      <SectionHeadingText tag="h3">{label}</SectionHeadingText>
      {sublabel && (
        <Text tag="p" typo="base-small" color={theme.colors.grey8}>
          {sublabel}
        </Text>
      )}
    </TextWrapper>
    <RadioButtonGroupWrapper>
      <RadioButtonGroup>
        <RadioButtonWrapper
          checked={checked === true}
          error={error}
          onClick={() =>
            checked === true ? onChange(undefined) : onChange(true)
          }
        >
          <RadioButton
            id={id}
            label={yesLabel}
            checked={checked === true}
            onChange={() =>
              checked === true ? onChange(undefined) : onChange(true)
            }
            value={id}
            onBlur={onBlur}
          />
        </RadioButtonWrapper>
        <RadioButtonWrapper
          checked={checked === false}
          error={error}
          onClick={() =>
            checked === false ? onChange(undefined) : onChange(false)
          }
        >
          <RadioButton
            id={`${id}-1`}
            label={noLabel}
            checked={checked === false}
            onChange={() =>
              checked === false ? onChange(undefined) : onChange(false)
            }
            value={`${id}-1`}
            onBlur={onBlur}
          />
        </RadioButtonWrapper>
      </RadioButtonGroup>
      {error && <ErrorBox>{errorMsg}</ErrorBox>}
    </RadioButtonGroupWrapper>
  </ConfirmationWrapper>
)

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
    return `2px solid ${theme.colors.red7}`
  } else if (checked) {
    return `2px solid ${theme.colors.blue7}`
  } else {
    return 'none'
  }
}

const RadioButtonWrapper = styled.div<FakeInput>`
  background-color: ${({ checked }: FakeInput) =>
    !checked && `${theme.colors.bg4}`};
  border: ${({ checked, error }: FakeInput) => getColor(checked, error)};
  margin: 0px 10px;
  width: 139px;
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 12px;
  border-radius: 5px;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`

const ErrorBox = styled.span`
  margin-top: 7px;
  margin-left: 12px;
  font-size: 12px;
  color: ${theme.colors.red7};
`

const ConfirmationWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const SectionHeadingText = styled(Text)`
  font-weight: bold;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
