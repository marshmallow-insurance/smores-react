import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from '../Text'
import { Box } from '../Box'
import { Dropdown, DropdownProps } from './Dropdown'
import { noop } from '../utils/noop'

const days = [
  {
    label: 'Monday',
    value: 'MONDAY',
  },
  {
    label: 'Tuesday',
    value: 'TUESDAY',
  },
  {
    label: 'Wednesday',
    value: 'WEDNESDAY',
  },
  {
    label: 'Thursday',
    value: 'THURSDAY',
  },
  {
    label: 'Friday',
    value: 'FRIDAY',
  },
  {
    label: 'Saturday',
    value: 'SATURDAY',
  },
  {
    label: 'Sunday',
    value: 'SUNDAY',
  },
]

const variationList: DropdownProps[] = [
  {
    id: 'days',
    list: days,
    placeholder: 'Placeholder',
    errorMsg: 'This field is required',
    label: 'Days of the week',
    onSelect: noop,
  },
]

export const CollectionPage: FC = () => {
  return (
    <Box flex direction="column">
      {variationList.map(
        ({ id, list, placeholder, errorMsg, label, onSelect }) => {
          return (
            <Box key={id} flex direction="column" mb="32px">
              <Title tag="span" typo="header-medium">
                Dropdown variations
              </Title>
              <Row label="Generic">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  list={list}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="Fallback">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  list={list}
                  fallbackStyle={true}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="Disabled">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  list={list}
                  disabled={true}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="Disabled Fallback">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  list={list}
                  disabled={true}
                  onSelect={onSelect}
                  fallbackStyle
                />
              </Row>
              <Row label="Placeholder">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  list={list}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="No placeholder">
                <Dropdown
                  id={id}
                  label={label}
                  list={list}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="show default option">
                <Dropdown
                  id={id}
                  label={label}
                  list={list}
                  placeholder={placeholder}
                  showDefaultOption
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="show default option with custom option label">
                <Dropdown
                  id={id}
                  label={label}
                  list={list}
                  placeholder={placeholder}
                  showDefaultOption
                  customDefaultOption="Select a day"
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>

              <Row label="Leading Icon">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  frontIcon="iphone"
                  list={list}
                  fallbackStyle={true}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="Required">
                <Dropdown
                  id={id}
                  label={label}
                  required={true}
                  placeholder={placeholder}
                  list={list}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="Assistive text">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  assistiveText="Some assistive text"
                  list={list}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="Completed">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  list={list}
                  error={false}
                  completed={true}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="As title">
                <Dropdown
                  id={id}
                  label={label}
                  renderAsTitle={true}
                  placeholder={placeholder}
                  list={list}
                  error={false}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="Error">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  assistiveText="Some assistive text"
                  list={list}
                  error={true}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
                />
              </Row>
              <Row label="Fallback Error">
                <Dropdown
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  assistiveText="Some assistive text"
                  list={list}
                  fallbackStyle={true}
                  error={true}
                  errorMsg={errorMsg}
                  onSelect={onSelect}
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
