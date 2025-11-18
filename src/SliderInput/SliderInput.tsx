import { forwardRef, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { margin, MarginProps, TransientMarginProps } from '../utils/space'

type SliderProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> &
  MarginProps & {
    onChange: (value: number) => void
    value: number
    min?: number
    max?: number
    step?: number
  }

export const SliderInput = forwardRef<HTMLInputElement, SliderProps>(
  function SliderInput(
    { value, onChange, min, max, step, m, mx, my, ml, mr, mt, mb, ...rest },
    ref,
  ) {
    return (
      <StyledSlider
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => {
          onChange(event.target.valueAsNumber)
        }}
        $m={m}
        $mx={mx}
        $my={my}
        $ml={ml}
        $mr={mr}
        $mt={mt}
        $mb={mb}
        {...rest}
      />
    )
  },
)

const StyledSlider = styled.input<TransientMarginProps>`
  outline: 0;
  border: 0;
  padding: 0;
  border-radius: 500px;
  width: 100%;
  //guard rail as we have a hard coded limit on progress bar length
  max-width: 2000px;
  transition: box-shadow 0.2s ease-in-out;
  background: ${({ theme }) => theme.color.background[100]};
  ${margin};

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    overflow: hidden;
    height: 44px;
    -webkit-appearance: none;

    &::-webkit-slider-runnable-track {
      height: 44px;
      -webkit-appearance: none;
      transition: box-shadow 0.2s ease-in-out;
    }
    &::-webkit-slider-thumb {
      width: 44px;
      -webkit-appearance: none;
      height: 44px;
      cursor: ew-resize;
      background: ${({ theme }) => theme.color.background[100]};
      box-shadow:
      //handles the progress bar
        -1000px 0 0 980px ${({ theme }) => theme.color.surface.brand[300]},
        //added for the focus anim
        inset 0 0 0 44px ${({ theme }) => theme.color.surface.brand[400]};
      border-radius: 50%;
      transition: box-shadow 0.2s ease-in-out;
      position: relative;
    }
    &:active::-webkit-slider-thumb,
    &:focus::-webkit-slider-thumb {
      background: ${({ theme }) => theme.color.background[100]};
      box-shadow:
        -1000px 0 0 980px ${({ theme }) => theme.color.surface.brand[300]},
        inset 0 0 0 4px ${({ theme }) => theme.color.surface.brand[400]};
    }
  }
`
