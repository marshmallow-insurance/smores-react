import styled from 'styled-components'

import { Color, theme } from '../theme'
import { Box } from '../Box'
import { Tag } from '../Tag'
import { Text } from '../Text'
import React from 'react'
import { ToggleButton } from './ToggleButton'

export type SegmentedControlOption<T> = {
  label: string
  value: T
  /** optional tag able to show in the toggle if showTag prop is passed */
  tag?: string
  isDisabled?: boolean
}

export type SegmentedControlProps<T> = {
  /** you can pass more than 2 options */
  options: SegmentedControlOption<T>[]
  value: T
  onChange: (value: T) => void
  /**  pass this prop if you want to show the tag in the toggle */
  showTag?: boolean
  toggleColor?: Color
  backgroundColor?: Color
  textColor?: Color
  selectedTextColor?: Color
  tagColor?: Color
  tagTextColor?: Color
  tagBorderColor?: Color
}

/**recommend to use a useState to store the selected value above the component */
export const SegmentedControl = <T,>({
  options,
  value,
  onChange,
  showTag,
  toggleColor: toggleColor,
  backgroundColor,
  textColor = 'liquorice',
  selectedTextColor = 'cream',
  tagColor = 'marshmallowPink',
  tagBorderColor = 'marshmallowPink',
  tagTextColor = 'cream',
}: SegmentedControlProps<T>) => {
  return (
    <ToggleWrapper backgroundColor={backgroundColor}>
      <IndicatorWrapper backgroundColor={backgroundColor}>
        {options.map((option) => {
          return (
            <ToggleButton
              key={option.value as string}
              name="toggle-version-button"
              value={option.value}
              onChange={onChange}
              isSelected={option.value === value}
              isDisabled={option.isDisabled}
            >
              <StyledWrapper>
                {showTag && option.tag && (
                  <StyledTag
                    bgColor={tagColor}
                    borderColor={tagBorderColor}
                    color={tagTextColor}
                    label={option.tag}
                  />
                )}
                <StyledText
                  isSelected={option.value === value}
                  selectedTextColor={selectedTextColor}
                  color={textColor}
                >
                  {option.label}
                </StyledText>
              </StyledWrapper>
            </ToggleButton>
          )
        })}

        <ToggleIndicator
          selectedIndex={options.findIndex((option) => option.value === value)}
          sections={options.length}
          toggleColor={toggleColor}
        />
      </IndicatorWrapper>
    </ToggleWrapper>
  )
}

const BORDER_RADIUS = 25

const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

const StyledTag = styled(Tag)`
  border-radius: 100px;
`

const StyledText = styled(Text)<{
  isSelected: boolean
  selectedTextColor: Color
}>`
  font-weight: ${theme.font.weight.medium};
  ${({ isSelected, selectedTextColor }) =>
    isSelected && `color: ${theme.colors[selectedTextColor]};`}
  padding: 2px 0px;
`

const ToggleWrapper = styled(Box)<{ backgroundColor?: Color }>`
  padding: 4px;
  background-color: ${(p) => theme.colors[p.backgroundColor ?? 'custard']};
  border-radius: ${BORDER_RADIUS}px;
`

const IndicatorWrapper = styled(Box)<{ backgroundColor?: Color }>`
  position: relative;
  display: flex;
  background-color: ${(p) => theme.colors[p.backgroundColor ?? 'custard']};
  border-radius: ${BORDER_RADIUS}px;
`

const ToggleIndicator = styled(Box)<{
  selectedIndex: number
  sections: number
  toggleColor?: Color
}>`
  background-color: ${(p) => theme.colors[p.toggleColor ?? 'liquorice']};
  border-radius: ${BORDER_RADIUS}px;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: ${(p) => `calc(100% / ${p.sections})`};
  transition: transform 0.4s;
  transform: ${(p) => `translateX(${p.selectedIndex * 100}%)`};
`
