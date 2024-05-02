import styled from 'styled-components'

import { Color, theme } from '../theme'
import { Box } from '../Box'
import { Tag } from '../Tag'
import React from 'react'
import { ToggleButton } from './ToggleButton'

//TODO: add ability to set text separately color and type and text arrange to center

export type ValueToggleOption<T> = {
  label: string
  value: T
  tag?: string // optional tag able to show in the toggle if showTag prop is passed
}

export type ValueToggleProps<T> = {
  options: ValueToggleOption<T>[] // you can pass more than 2 options
  value: T
  onChange: (value: T) => void
  showTag?: boolean // pass this prop if you want to show the tag in the toggle
  toggleColor?: Color
  backgroundColor?: Color
}

// recommend to use a useState to store the selected value above the component
export const ValueToggle = <T,>({
  options,
  value,
  onChange,
  showTag,
  toggleColor: toggleColor,
  backgroundColor,
}: ValueToggleProps<T>) => {
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
            >
              <StyledWrapper>
                {showTag && option.tag && (
                  <StyledTag
                    bgColor="marshmallowPink"
                    borderColor="marshmallowPink"
                    color="cream"
                    label={option.tag}
                  />
                )}
                {option.label}
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
