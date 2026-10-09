import {
  FocusEvent,
  FocusEventHandler,
  PointerEvent,
  PointerEventHandler,
} from 'react'
import { css, DefaultTheme } from 'styled-components'

/**
 * Browsers treat text fields as `:focus-visible` even when they are clicked,
 * so fields flag focus that comes from a pointer and only show the focus ring
 * for keyboard focus.
 */
export const markPointerFocus = (element: HTMLElement | null) => {
  if (element) element.dataset.pointerFocus = ''
}

/** Pass to styled-components `.attrs`. Callers' own handlers still run. */
export const fieldFocusAttrs = <T extends HTMLElement>({
  onPointerDown,
  onBlurCapture,
}: {
  onPointerDown?: PointerEventHandler<T>
  onBlurCapture?: FocusEventHandler<T>
}) => ({
  onPointerDown: (event: PointerEvent<T>) => {
    markPointerFocus(event.currentTarget)
    onPointerDown?.(event)
  },
  onBlurCapture: (event: FocusEvent<T>) => {
    delete event.currentTarget.dataset.pointerFocus
    onBlurCapture?.(event)
  },
})

export const fieldFocusRing = css`
  &:focus-visible:not([data-pointer-focus]) {
    outline: 2px solid ${({ theme }) => theme.color.focus.onLight};
    outline-offset: 2px;
  }
`

export const fieldDisabledStyle = css`
  &:disabled {
    border-color: ${({ theme }) => theme.color.feedback.inactive[100]};
    background-color: ${({ theme }) => theme.color.feedback.inactive[50]};
    color: ${({ theme }) => theme.color.text.subtle};
    cursor: not-allowed;
    /* Safari fades disabled fields on top of these colours */
    opacity: 1;
    -webkit-text-fill-color: currentColor;
  }
`

export const fieldHoverBorderColor = (theme: DefaultTheme, error?: boolean) =>
  error ? theme.color.feedback.negative[300] : theme.color.border.base
