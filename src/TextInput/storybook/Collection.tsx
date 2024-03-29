import React, { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'

import { Box } from '../../Box'
import { SupportMessage } from '../../SupportMessage'
import { Text } from '../../Text'
import { noop } from '../../utils/noop'
import { TextInput, TextInputProps } from '../TextInput'

const variationList: TextInputProps[] = [
  {
    id: 'days',
    placeholder: 'Enter name...',
    errorMsg: 'This field is required',
    assistiveText: (
      <>
        This is a description with a{' '}
        <a href="marshmallow.com" rel="noopener noreferrer" target="_blank">
          link
        </a>
        .
      </>
    ),
    label: 'First name',
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
      {variationList.map(
        ({ placeholder, errorMsg, label, assistiveText }, index) => {
          return (
            <Box key={index} flex direction="column" mb="32px">
              <Title tag="span" typo="header-medium">
                TextInput variations
              </Title>
              <Row label="Generic">
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  value=""
                  placeholder={placeholder}
                  error={false}
                  errorMsg={errorMsg}
                  onChange={setValue}
                />
              </Row>
              <Row label="With label as title">
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  value=""
                  renderAsTitle
                  placeholder={placeholder}
                  error={false}
                  errorMsg={errorMsg}
                  onChange={setValue}
                />
              </Row>
              <Row label="Fallback">
                <TextInput
                  id={Math.random() * 30 + ''}
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
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  value=""
                  placeholder={placeholder}
                  disabled={true}
                  error={false}
                  errorMsg={errorMsg}
                  onChange={setValue}
                />
              </Row>
              <Row label="Disabled Fallback">
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  value=""
                  placeholder={placeholder}
                  disabled={true}
                  onChange={setValue}
                  fallbackStyle
                />
              </Row>
              <Row label="Required">
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  value=""
                  required={true}
                  placeholder={placeholder}
                  error={false}
                  errorMsg={errorMsg}
                  onChange={setValue}
                />
              </Row>
              <Row label="Leading Icon">
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  frontIcon="search"
                  value=""
                  placeholder={placeholder}
                  error={false}
                  errorMsg={errorMsg}
                  onChange={setValue}
                />
              </Row>
              <Row label="Trailing Icon">
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  trailingIcon="car"
                  value=""
                  placeholder={placeholder}
                  error={false}
                  errorMsg={errorMsg}
                  onChange={setValue}
                />
              </Row>
              <Row label="Assistive text">
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  value=""
                  placeholder={placeholder}
                  assistiveText="Some assistive text"
                  error={false}
                  errorMsg={errorMsg}
                  onChange={setValue}
                />
              </Row>
              <Row label="With label as title and assistive text with link">
                <TextInput
                  id={Math.random() * 30 + ''}
                  label={label}
                  value=""
                  renderAsTitle
                  assistiveText={assistiveText}
                  placeholder={placeholder}
                  error={false}
                  completed={true}
                  errorMsg={errorMsg}
                  onChange={setValue}
                />
              </Row>
              <Row label="Completed">
                <TextInput
                  id={Math.random() * 30 + ''}
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
                <TextInput
                  id={Math.random() * 30 + ''}
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
                <TextInput
                  id={Math.random() * 30 + ''}
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
                <TextInput
                  id={Math.random() * 30 + ''}
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
                <TextInput
                  id={Math.random() * 30 + ''}
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
        },
      )}
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
