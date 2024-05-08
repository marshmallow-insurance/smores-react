import styled from 'styled-components'

import { Color, theme } from '../theme'
import { Box } from '../Box'
import { Tag } from '../Tag'
import { Text } from '../Text'
import React from 'react'
import { ToggleButton } from './ToggleButton'

export type SegmentedControlOption<T = string | number> = {
  label: string
  /** value needs to be number or string */
  value: T
  /** optional tag able to show in the toggle if showTag prop is passed */
  tag?: string
  isDisabled?: boolean
}

type StylingOptions = {
  toggle?: Color
  background?: Color
  text?: Color
  selectedText?: Color
  tagBg?: Color
  tagBorder?: Color
  tagText?: Color
}

export type SegmentedControlProps<T> = {
  /** you can pass more than 2 options */
  options: SegmentedControlOption<T>[]
  value: T
  onChange: (value: T) => void
  /**  pass this prop if you want to show the tag in the toggle */
  showTag?: boolean
  /** pass a StylingOptions object with the needed styles if you want to style the SegmentedControl */
  styles?: StylingOptions
}

/**
 * ### How do I pass state to the `SegmentedControl` component?
 * We recommend pulling the state up to at least the component that renders `SegmentedControl` up to at least the component that renders `SegmentedControl`, this should make it easier to pass state to the `SegmentedControl` component
 */
export const SegmentedControl = <T,>({
  options,
  value,
  onChange,
  showTag,
  styles: {
    tagBorder = 'marshmallowPink',
    tagText = 'cream',
    tagBg = 'marshmallowPink',
    selectedText = 'cream',
    text = 'liquorice',
    background,
    toggle,
  } = {},
}: SegmentedControlProps<T>) => {
  return (
    <ToggleWrapper backgroundColor={background}>
      <IndicatorWrapper backgroundColor={background}>
        {options.map((option) => {
          return (
            <ToggleButton
              key={option.label}
              name="toggle-version-button"
              value={option.value}
              onChange={onChange}
              isSelected={option.value === value}
              isDisabled={option.isDisabled}
            >
              <StyledWrapper>
                {showTag && option.tag && (
                  <StyledTag
                    bgColor={tagBg}
                    borderColor={tagBorder}
                    color={tagText}
                    label={option.tag}
                  />
                )}
                <StyledText
                  isSelected={option.value === value}
                  selectedTextColor={selectedText}
                  color={text}
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
          toggleColor={toggle}
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
