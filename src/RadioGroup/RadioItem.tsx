import React, { FocusEvent, forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { useUniqueId } from '../utils/id'

import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Text } from '../Text'
import { RadioElement } from './RadioElement'
import { ITEM_GAP } from './constants'
import { BaseValueType, DisplayType, IconPosition } from './types'

type RadioItemProps = {
  name: string
  visual?: string
  icon?: Icons
  iconPosition?: IconPosition
  value: BaseValueType
  label: string
  checked: boolean
  onChange: (value: BaseValueType) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
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
      icon,
      iconPosition = 'center',
      label,
      value,
      checked,
      onChange,
      onBlur,
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
        $displayType={displayType}
        data-testid={value}
        $isError={isError}
        $fallbackStyle={fallbackStyle}
      >
        {visual && !icon && (
          <VisualWrapper>
            <Visual $visualUrl={visual} />
          </VisualWrapper>
        )}
        {!visual && icon && (
          <IconWrapper $iconPosition={iconPosition}>
            <Icon render={icon} size={24} />
          </IconWrapper>
        )}
        <Box flex alignItems="center">
          <RadioElement
            ref={ref}
            name={name}
            id={id}
            value={value}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
            isError={isError}
            mr="8px"
          />
          <Box>
            <RadioText $isError={isError}>{label}</RadioText>
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

const IconWrapper = styled.div<{ $iconPosition?: IconPosition }>`
  display: flex;
  padding-bottom: 12px;

  ${({ $iconPosition }) =>
    $iconPosition === 'center' &&
    css`
      justify-content: center;
    `}

  ${({ $iconPosition }) =>
    $iconPosition === 'start' &&
    css`
      justify-content: flex-start;
    `}
`

const Visual = styled.div<{ $visualUrl: string }>`
  width: 100%;
  padding-top: 100%;
  background-image: url('${(p) => p.$visualUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Wrapper = styled.label<
  TransientProps<
    Pick<RadioItemProps, 'displayType' | 'isError' | 'fallbackStyle'>
  > & { checked: boolean }
>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${({ $displayType, checked, $isError, $fallbackStyle }) => css`
    ${($displayType === 'horizontal-card' ||
      $displayType === 'vertical-card') &&
    css`
      border-radius: 12px;
      background-color: ${$fallbackStyle
        ? theme.colors.cream
        : theme.colors.custard};
      padding: ${checked ? '10px' : '12px'};
      border: ${checked &&
      ($isError
        ? `2px solid ${theme.colors.strawberry}`
        : `2px solid ${theme.colors.liquorice}`)};

      &:hover {
        background-color: ${$fallbackStyle
          ? theme.colors.coconut
          : theme.colors.oatmeal};
      }
    `}
    ${$displayType === 'horizontal-card' &&
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

const RadioText = styled.span<{ $isError: boolean }>`
  line-height: 16px;
  font-size: 16px;
  font-weight: ${theme.font.weight.medium};
  color: ${({ $isError }) =>
    $isError ? theme.colors.strawberry : theme.colors.liquorice};
  margin-top: 4px;
`
