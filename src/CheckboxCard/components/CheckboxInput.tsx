import { InputHTMLAttributes, forwardRef } from 'react'
import styled, { DefaultTheme, css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@awesome.me/kit-46ca99185c/icons/classic/solid'

import { visuallyHidden } from '../../utils/visuallyHidden'

export type CheckboxState = 'base' | 'invalid' | 'valid'

type CheckboxInputProps = {
  state?: CheckboxState
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

/**
 * The native checkbox (visually hidden) and the box that shows its state.
 * Render it inside a `label`: the box takes its hover state from the label.
 */
export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  function CheckboxInput({ state = 'base', ...inputProps }, ref) {
    return (
      <>
        <HiddenInput ref={ref} type="checkbox" {...inputProps} />
        <CheckboxBox $state={state} aria-hidden="true">
          <FontAwesomeIcon icon={faCheck} />
        </CheckboxBox>
      </>
    )
  },
)

export const HiddenInput = styled.input`
  ${visuallyHidden}
  margin: 0;
`

const boxColors = (theme: DefaultTheme, state: CheckboxState) => {
  const { feedback, interactive, border } = theme.color

  if (state === 'invalid') {
    return {
      border: feedback.negative[200],
      hover: feedback.negative[100],
      checked: feedback.negative[200],
      checkedHover: feedback.negative[300],
    }
  }

  if (state === 'valid') {
    return {
      border: feedback.positive[200],
      hover: feedback.positive[100],
      checked: feedback.positive[200],
      checkedHover: feedback.positive[300],
    }
  }

  return {
    border: border.contrast,
    hover: interactive.neutral.subtle.hover,
    checked: interactive.neutral.strong.selected,
    checkedHover: interactive.neutral.strong.selectedHover,
  }
}

const BOX_SIZE = 24

export const CheckboxBox = styled.span<{ $state: CheckboxState }>(
  ({ theme, $state }) => {
    const colors = boxColors(theme, $state)

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-sizing: border-box;
      width: ${BOX_SIZE}px;
      height: ${BOX_SIZE}px;
      border: 2px solid ${colors.border};
      border-radius: ${theme.radius['050']};
      background-color: ${theme.color.interactive.neutral.subtle.base};
      color: ${theme.color.icon.inverse};

      // Figma icons use Font Awesome's square bounding box, in which the
      // glyph's em height is 80% of the box. The tick sits in a 20px box.
      svg {
        display: none;
        height: 16px;
        overflow: visible;
      }

      ${HiddenInput}:checked + & {
        border-color: ${colors.checked};
        background-color: ${colors.checked};

        svg {
          display: block;
        }
      }

      ${HiddenInput}:focus-visible + & {
        outline: 2px solid ${theme.color.focus.onLight};
        outline-offset: 2px;
      }

      // Touch screens keep :hover after a tap, so only use it with a pointer
      @media (hover: hover) {
        label:hover & {
          background-color: ${colors.hover};
        }

        label:hover ${HiddenInput}:checked + & {
          border-color: ${colors.checkedHover};
          background-color: ${colors.checkedHover};
        }
      }
    `
  },
)
