import React, { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'

import { Box } from '../../Box'
import { SupportMessage } from '../../SupportMessage'
import { Text } from '../../Text'
import { noop } from '../../utils/noop'
import { CurrencyInput, CurrencyInputProps } from '../CurrencyInput'

const variationList: CurrencyInputProps[] = [
  {
    id: 'days',
    placeholder: '200',
    errorMsg: 'This field is required',
    label: 'Amount',
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
              CurrencyInput variations
            </Title>
            <Row label="Generic">
              <CurrencyInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                onChange={setValue}
              />
            </Row>
            <Row label="Fallback">
              <CurrencyInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                fallbackStyle={true}
                error={false}
                errorMsg={errorMsg}
                onChange={setValue}
              />
            </Row>
            <Row label="Disabled">
              <CurrencyInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                disabled={true}
                error={false}
                errorMsg={errorMsg}
                onChange={setValue}
              />
            </Row>
            <Row label="Required">
              <CurrencyInput
                id={id}
                label={label}
                value=""
                required={true}
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                onChange={setValue}
              />
            </Row>
            <Row label="Assistive text">
              <CurrencyInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                assistiveText="Some assistive text"
                error={false}
                errorMsg={errorMsg}
                onChange={setValue}
              />
            </Row>
            <Row label="Completed">
              <CurrencyInput
                id={id}
                label={label}
                value=""
                placeholder={placeholder}
                error={false}
                completed={true}
                errorMsg={errorMsg}
                onChange={setValue}
              />
            </Row>
            <Row label="As title">
              <CurrencyInput
                id={id}
                label={label}
                value=""
                renderAsTitle={true}
                placeholder={placeholder}
                error={false}
                errorMsg={errorMsg}
                onChange={setValue}
              />
            </Row>
            <Row label="Error">
              <CurrencyInput
                id={id}
                label={label}
                value=""
                required={true}
                placeholder={placeholder}
                assistiveText="Some assistive text"
                error={true}
                errorMsg={errorMsg}
                onChange={setValue}
              />
            </Row>
            <Row label="React element error">
              <CurrencyInput
                id={id}
                label={label}
                required={true}
                value=""
                placeholder={placeholder}
                error={true}
                errorMsg={
                  <SupportMessage type="warning" description="error!!" />
                }
                onChange={setValue}
              />
            </Row>
            <Row label="Fallback Error">
              <CurrencyInput
                id={id}
                label={label}
                required={true}
                value=""
                placeholder={placeholder}
                fallbackStyle={true}
                error={true}
                errorMsg={errorMsg}
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
