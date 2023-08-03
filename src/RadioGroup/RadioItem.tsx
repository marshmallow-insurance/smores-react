import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { useUniqueId } from '../utils/id'
import { theme } from '../theme'

import { RadioElement } from './RadioElement'
import { Text } from '../Text'
import { BaseValueType, DisplayType } from './types'
import { ITEM_GAP } from './constants'
import { Box } from '../Box'

type RadioItemProps = {
  name: string
  visual?: string
  value: BaseValueType
  label: string
  checked: boolean
  onChange: (value: BaseValueType) => void
  displayType: DisplayType
  isError: boolean
  fallbackStyle?: boolean
  bodyCopy?: string
}

export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  function RadioItem(
    {
      name,
      visual,
      label,
      value,
      checked,
      onChange,
      displayType,
      isError,
      fallbackStyle,
      bodyCopy,
    },
    ref,
  ) {
    const id = useUniqueId()
    return (
      <Wrapper
        htmlFor={id}
        checked={checked}
        displayType={displayType}
        data-testid={value}
        isError={isError}
        fallbackStyle={fallbackStyle}
      >
        {visual && (
          <VisualWrapper>
            <Visual visualUrl={visual} />
          </VisualWrapper>
        )}
        <Box flex alignItems="center">
          <RadioElement
            ref={ref}
            name={name}
            id={id}
            value={value}
            checked={checked}
            onChange={onChange}
            isError={isError}
            mr="8px"
          />
          <Box>
            <RadioText isError={isError}>{label}</RadioText>
            {bodyCopy && (
              <Box>
                <Text typo="caption">{bodyCopy}</Text>
              </Box>
            )}
          </Box>
        </Box>
      </Wrapper>
    )
  },
)

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

const Wrapper = styled.label<
  Pick<RadioItemProps, 'displayType' | 'checked' | 'isError' | 'fallbackStyle'>
>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${({ displayType, checked, isError, fallbackStyle }) => css`
    ${(displayType === 'horizontal-card' || displayType === 'vertical-card') &&
    css`
      border-radius: 12px;
      background-color: ${fallbackStyle
        ? theme.colors.cream
        : theme.colors.custard};
      padding: ${checked ? '10px' : '12px'};
      border: ${checked &&
      (isError
        ? `2px solid ${theme.colors.strawberry}`
        : `2px solid ${theme.colors.liquorice}`)};

      &:hover {
        background-color: ${fallbackStyle
          ? theme.colors.coconut
          : theme.colors.oatmeal};
      }
    `}
    ${displayType === 'horizontal-card' &&
    css`
      width: 100%;
      justify-content: center;

      @media (min-width: 420px) {
        width: calc(50% - ${ITEM_GAP / 2}px);
      }

      @media (min-width: 768px) {
        width: 201px;
      }
    `}
  `}
`

const RadioText = styled.span<{ isError: boolean }>`
  line-height: 16px;
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${({ isError }) =>
    isError ? theme.colors.strawberry : theme.colors.liquorice};
  margin-top: 4px;
`
