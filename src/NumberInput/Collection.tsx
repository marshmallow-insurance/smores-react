import React, { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'
import { NumberInput, NumberInputProps } from './NumberInput'
import { noop } from '../utils/noop'
import { SupportMessage } from '../SupportMessage'

const variationList: NumberInputProps[] = [
  {
    id: 'days',
    placeholder: '+44 7123 456789',
    errorMsg: 'This field is required',
    label: 'Phone number',
    onChange: noop,
    onInputChange: noop,
    onBlur: noop,
    value: '',
  },
]

export const CollectionPage: FC = () => {
  const [, setValue] = useState('')

  return (
    <Box flex direction="column">
      {variationList.map(({ id, placeholder, errorMsg, label }) => {
        return (
          <Box key={id} flex direction="column" mb="32px">
            <Title tag="span" typo="header-medium">
              NumberInput variations
            </Title>
            <Row label="Generic">
              <NumberInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Fallback">
              <NumberInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                fallback={true}
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Disabled">
              <NumberInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                disabled={true}
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Required">
              <NumberInput
                id={id}
                label={label}
                value=""
                required={true}
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Leading Icon">
              <NumberInput
                id={id}
                label={label}
                frontIcon="iphone"
                value=""
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Trailing Icon">
              <NumberInput
                id={id}
                label={label}
                trailingIcon="iphone"
                value=""
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Stepper">
              <NumberInput
                id={id}
                label={label}
                step={10}
                value=""
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Assistive text">
              <NumberInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                assistiveText="Some assistive text"
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Completed">
              <NumberInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                error={false}
                completed={true}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="As title">
              <NumberInput
                id={id}
                label={label}
                value=""
                renderAsTitle={true}
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Error">
              <NumberInput
                id={id}
                label={label}
                value=""
                required={true}
                placeholder={placeholder}
                assistiveText="Some assistive text"
                error={true}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="React element error">
              <NumberInput
                id={id}
                label={label}
                required={true}
                value=""
                placeholder={placeholder}
                error={true}
                errorMsg={
                  <SupportMessage type="warning" description="error!!" />
                }
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
            <Row label="Fallback Error">
              <NumberInput
                id={id}
                label={label}
                required={true}
                value=""
                placeholder={placeholder}
                fallback={true}
                error={true}
                errorMsg={errorMsg}
                // @ts-expect-error onChange type is too broad and should be handled differently
                onChange={setValue}
              />
            </Row>
          </Box>
        )
      })}
    </Box>
  )
}

const Row: FC<{ label: string; children?: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <RowWrapper mt="32px">
      <Box width="140px">
        <Text tag="span" typo="label-large">
          {label}
        </Text>
      </Box>
      {children}
    </RowWrapper>
  )
}

const RowWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const LABEL_WIDTH = '140px'

const Title = styled(Text)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${LABEL_WIDTH};
`
