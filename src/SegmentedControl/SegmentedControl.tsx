import styled, { useTheme } from 'styled-components'

import React from 'react'
import { Box } from '../Box'
import { Tag } from '../Tag'
import { Text } from '../Text'
import { theme as oldTheme } from '../theme'
import {
  ColorTypes,
  getColorPath,
  resolveToThemeColor,
} from '../ThemeProvider/utils/colourMap'
import { ToggleButton } from './ToggleButton'

export type SegmentedControlOption<T = string | number> = {
  label: string
  secondaryLabel?: string
  /** value needs to be number or string */
  value: T
  /** optional tag able to show in the toggle if showTag prop is passed */
  tag?: string
  isDisabled?: boolean
}

type StylingOptions = {
  toggle?: ColorTypes
  background?: ColorTypes
  text?: ColorTypes
  selectedText?: ColorTypes
  tagBg?: ColorTypes
  tagBorder?: ColorTypes
  tagText?: ColorTypes
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
    tagBorder = 'color.surface.brand.300',
    tagText = 'color.surface.base.000',
    tagBg = 'color.surface.brand.300',
    selectedText = 'color.surface.base.000',
    text = 'color.text.base',
    background = 'color.surface.base.300',
    toggle = 'color.text.base',
  } = {},
}: SegmentedControlProps<T>) => {
  const theme = useTheme()

  const resolvedBackgroundColor =
    background && resolveToThemeColor(background, theme)
  const resolvedToggleColor = toggle && resolveToThemeColor(toggle, theme)
  const resolvedSelectedTextColor = resolveToThemeColor(selectedText, theme)

  return (
    <ToggleWrapper backgroundColor={resolvedBackgroundColor}>
      <IndicatorWrapper backgroundColor={resolvedBackgroundColor}>
        {options.map((option) => {
          const isSelected = option.value === value

          return (
            <ToggleButton
              key={option.label}
              name="toggle-version-button"
              value={option.value}
              onChange={onChange}
              isSelected={isSelected}
              isDisabled={option.isDisabled}
            >
              <StyledWrapper>
                {showTag && option.tag && (
                  <StyledTag
                    bgColor={getColorPath(tagBg)}
                    borderColor={getColorPath(tagBorder)}
                    color={getColorPath(tagText)}
                    label={option.tag}
                  />
                )}
                <Box
                  flex
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <StyledText
                    isSelected={isSelected}
                    $selectedTextColor={resolvedSelectedTextColor}
                    color={text}
                  >
                    {option.label}
                  </StyledText>
                  {option.secondaryLabel && (
                    <Text
                      color={isSelected ? selectedText : text}
                      typo="caption"
                    >
                      {option.secondaryLabel}
                    </Text>
                  )}
                </Box>
              </StyledWrapper>
            </ToggleButton>
          )
        })}

        <ToggleIndicator
          selectedIndex={options.findIndex((option) => option.value === value)}
          sections={options.length}
          toggleColor={resolvedToggleColor}
        />
      </IndicatorWrapper>
    </ToggleWrapper>
  )
}

const BORDER_RADIUS = 1000

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
  $selectedTextColor: string
}>`
  font-weight: ${oldTheme.font.weight.medium};
  ${({ isSelected, $selectedTextColor }) =>
    isSelected && `color: ${$selectedTextColor};`}
  padding: 2px 0px;
`

const ToggleWrapper = styled(Box)<{ backgroundColor?: string }>`
  padding: 4px;
  background-color: ${(p) => p.backgroundColor};
  border-radius: ${BORDER_RADIUS}px;
`

const IndicatorWrapper = styled(Box)<{ backgroundColor?: string }>`
  position: relative;
  display: flex;
  background-color: ${(p) => p.backgroundColor};
  border-radius: ${BORDER_RADIUS}px;
`

const ToggleIndicator = styled(Box)<{
  selectedIndex: number
  sections: number
  toggleColor?: string
}>`
  background-color: ${(p) => p.toggleColor};
  border-radius: ${BORDER_RADIUS}px;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: ${(p) => `calc(100% / ${p.sections})`};
  transition: transform 0.4s;
  transform: ${(p) => `translateX(${p.selectedIndex * 100}%)`};
`
