import React from 'react'
import styled, { css } from 'styled-components'

import { useUniqueId } from '../utils/id'
import { theme } from '../theme'

import { RadioElement } from './RadioElement'
import { BaseValueType, DisplayType } from './types'
import { ITEM_GAP } from './constants'
import { Box } from '../Box'

type RadioItemProps<Value extends BaseValueType = BaseValueType> = {
  name: string
  visual?: string
  value: Value
  label: string
  checked: boolean
  onChange: (value: Value) => void
  displayType: DisplayType
  isError: boolean
}

export const RadioItem = <Value extends BaseValueType>({
  name,
  visual,
  label,
  value,
  checked,
  onChange,
  displayType,
  isError,
}: RadioItemProps<Value>) => {
  const id = useUniqueId()
  return (
    <Wrapper htmlFor={id} checked={checked} displayType={displayType}>
      {visual && (
        <VisualWrapper>
          <Visual visualUrl={visual} />
        </VisualWrapper>
      )}
      <Box flex direction="row" alignItems="flex-start">
        <RadioElement
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          isError={isError}
          mr="8px"
        />
        <RadioText isError={isError}>{label}</RadioText>
      </Box>
    </Wrapper>
  )
}

const VisualWrapper = styled.div`
  width: 100%;
  max-width: 120px;
  margin: 0 auto 8px;
`

const Visual = styled.div<{ visualUrl: string }>`
  width: 100%;
  padding-top: 100%;
  background-image: url('${(p) => p.visualUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Wrapper = styled.label<Pick<RadioItemProps, 'displayType' | 'checked'>>`
  display: flex;
  flex-direction: column;

  ${({ displayType, checked }) =>
    css`
      ${(displayType === 'horizontal-card' ||
        displayType === 'vertical-card') &&
      css`
        border-radius: 8px;
        background-color: ${theme.colors[checked ? 'white' : 'background']};
        padding: ${checked ? '10px' : '12px'};
        ${checked && `border: 2px solid ${theme.colors.secondary};`}
      `}
      ${displayType === 'horizontal-card' &&
      css`
        width: 100%;

        @media (min-width: 420px) {
          width: calc(50% - ${ITEM_GAP / 2}px);
        }

        @media (min-width: 768px) {
          width: 200px;
        }
      `}
    `}
`

const RadioText = styled.span<{ isError: boolean }>`
  line-height: 16px;
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${({ isError }) =>
    isError ? theme.colors.error : theme.colors.secondary};
  margin-top: 4px;
`
