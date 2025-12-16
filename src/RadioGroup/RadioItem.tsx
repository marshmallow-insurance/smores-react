import { FocusEvent, forwardRef, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { useUniqueId } from '../utils/id'
import { theme as oldTheme } from '../theme'

import { TransientProps } from 'utils/utilTypes'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { Icons } from '../Icon/iconsList'

import { Text } from '../Text'
import { RadioElement } from './RadioElement'
import { ITEM_GAP } from './constants'
import { BaseValueType, DisplayType, IconPosition, ItemWidth } from './types'
import { IconContainer } from 'sharedStyles/shared.styles'

type RadioItemProps = {
  name: string
  visual?: string
  icon?: Icons
  iconComponent?: ReactNode
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
  disabled?: boolean
  itemWidth?: ItemWidth
}

export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  function RadioItem(
    {
      name,
      visual,
      icon,
      iconComponent,
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
      disabled,
      itemWidth,
    },
    ref,
  ) {
    const id = useUniqueId()

    const iconToRender = iconComponent ? (
      <IconContainer
        $size={24}
        style={{
          display: 'flex',
          justifyContent: iconPosition === 'center' ? 'center' : 'flex-start',
        }}
      >
        {iconComponent}
      </IconContainer>
    ) : icon ? (
      <IconWrapper $iconPosition={iconPosition}>
        <Icon render={icon} size={24} />
      </IconWrapper>
    ) : null

    return (
      <Wrapper
        htmlFor={id}
        checked={checked}
        $displayType={displayType}
        data-testid={value}
        $isError={isError}
        $fallbackStyle={fallbackStyle}
        $disabled={disabled}
        $itemWidth={itemWidth}
      >
        {visual && !icon && (
          <VisualWrapper>
            <Visual $visualUrl={visual} />
          </VisualWrapper>
        )}
        {!visual && iconToRender}
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
            isDisabled={disabled}
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
  > & { checked: boolean; $disabled?: boolean; $itemWidth?: ItemWidth }
>`
  display: flex;
  flex-direction: column;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};
  ${({
    $displayType,
    checked,
    $isError,
    $fallbackStyle,
    $disabled,
    $itemWidth,
    theme,
  }) => css`
    ${($displayType === 'horizontal-card' ||
      $displayType === 'vertical-card') &&
    css`
      border-radius: 12px;
      background-color: ${$fallbackStyle
        ? theme.color.surface.base['000']
        : theme.color.surface.base[300]};
      padding: ${checked ? '10px' : '12px'};
      border: ${checked &&
      ($isError
        ? `2px solid ${theme.color.feedback.negative[200]}`
        : `2px solid ${theme.color.border.contrast}`)};

      &:hover {
        ${!$disabled &&
        css`
          background-color: ${$fallbackStyle
            ? theme.color.surface.base[100]
            : theme.color.surface.base[400]};
        `}
      }
    `}
    ${$displayType === 'horizontal-card' &&
    css`
      justify-content: center;
      ${!$itemWidth &&
      css`
        @media (min-width: 420px) {
          width: calc(50% - ${ITEM_GAP / 2}px);
        }

        @media (min-width: 768px) {
          width: 201px;
        }
      `}
    `}
  width: ${$itemWidth ?? '100%'};
  `}
`

const RadioText = styled.span<{ $isError: boolean }>`
  line-height: 16px;
  font-size: 16px;
  font-weight: ${oldTheme.font.weight.medium};
  color: ${({ $isError, theme }) =>
    $isError ? theme.color.feedback.negative[200] : theme.color.text.base};
  margin-top: 4px;
`
