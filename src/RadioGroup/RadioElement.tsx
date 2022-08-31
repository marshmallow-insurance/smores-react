import React, { FC } from 'react'
import styled from 'styled-components'
import { MarginProps } from '../utils/space'
import { theme } from '../theme'
import { Box } from '../Box'
import { visuallyHidden } from '../utils/visuallyHidden'
import { focusOutline } from '../utils/focusOutline'

type RadioElementProps = {
  name: string
  id: string
  value: string
  checked: boolean
  onChange: (value: string) => void
} & MarginProps

export const RadioElement: FC<RadioElementProps> = ({
  name,
  id,
  value,
  checked,
  onChange,
  ...marginProps
}) => {
  return (
    <>
      <StyledInput
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <RadioCircle {...marginProps} />
    </>
  )
}

const StyledInput = styled.input`
  ${visuallyHidden}
`

const RADIO_SIZE = 24

const RadioCircle = styled(Box)`
  flex-shrink: 0;
  width: ${RADIO_SIZE}px;
  height: ${RADIO_SIZE}px;
  border-radius: ${RADIO_SIZE}px;
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.subtext};

  &:hover {
    border: 2px solid ${theme.colors.secondary};
  }

  ${StyledInput}:checked + & {
    border: 8px solid ${theme.colors.secondary};
  }

  ${focusOutline({ selector: `${StyledInput}:focus-visible + &` })}
`
