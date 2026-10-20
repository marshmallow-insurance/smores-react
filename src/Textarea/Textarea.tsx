import {
  FocusEvent,
  FormEvent,
  ForwardedRef,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react'
import styled from 'styled-components'
import { useMergeRefs } from '@floating-ui/react'

import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import { useUniqueId } from '../utils/id'
import { getFieldAria } from '../fields/fieldAria'
import {
  fieldDisabledStyle,
  fieldFocusAttrs,
  fieldFocusRing,
  fieldHoverBorderColor,
} from '../fields/components/fieldStyles'
import { MarginProps } from '../utils/space'

type BaseProps = {
  id?: string
  placeholder?: string
  name?: string
  value: string
  error?: boolean
  errorMsg?: string
  resize?: 'none' | 'both'
  disabled?: boolean
  maxLength?: number
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
  /**
   * Number of lines the textarea shows before it has any content to grow with. Defaults to 4.
   * A `height` set in CSS on the textarea becomes the starting height instead.
   */
  rows?: number
  /**
   * The most lines the textarea grows to as the content gets longer. Past this it scrolls.
   * Defaults to 8. A value lower than `rows` is treated as `rows`. A taller
   * `height` set in CSS on the textarea raises the cap to match it.
   */
  maxRows?: number
  fallbackStyle?: boolean
} & CommonFieldProps &
  MarginProps

type TruncateProps =
  | {
      onChange: (e: string) => void
      onInputChange?: (e: FormEvent<HTMLTextAreaElement>) => void
    }
  | {
      onChange?: (e: string) => void
      onInputChange: (e: FormEvent<HTMLTextAreaElement>) => void
    }

export type TextareaProps = BaseProps & TruncateProps

const LINE_HEIGHT = 20
const PADDING = 12
const BORDER = 2
// Padding and border (top and bottom) around the lines of text
const CHROME_HEIGHT = 2 * (PADDING + BORDER)
const DEFAULT_ROWS = 4
const DEFAULT_MAX_ROWS = 8

export const Textarea = forwardRef(function Textarea(
  {
    id: idProp,
    name,
    value,
    onChange,
    onInputChange,
    resize = 'none',
    error = false,
    placeholder,
    disabled = false,
    maxLength,
    onBlur,
    rows = DEFAULT_ROWS,
    maxRows = DEFAULT_MAX_ROWS,
    fallbackStyle,
    ...fieldProps
  }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const id = useUniqueId(idProp)
  const innerRef = useRef<HTMLTextAreaElement | null>(null)
  const mergedRef = useMergeRefs([ref, innerRef])
  // Set once the user drags the resize handle. From then on their size wins
  // and the height is no longer fitted to the content.
  const userSizedRef = useRef(false)
  const pointerDownRef = useRef(false)
  // The height we last wrote, to tell our own size changes from the user's
  const lastFitHeightRef = useRef<number | null>(null)
  const { assistiveTextId, errorMsgId, controlAria } = getFieldAria(id, {
    ...fieldProps,
    error,
  })

  const fitHeightToContent = useCallback(() => {
    const el = innerRef.current
    if (!el || userSizedRef.current) return

    // Measure from the height the stylesheet gives the textarea, which is a
    // height set in CSS if there is one, otherwise the `rows` height. Hide the
    // scrollbar so it doesn't take up width and change how the text wraps.
    el.style.overflowY = 'hidden'
    el.style.height = ''
    const minHeight = Math.max(
      el.offsetHeight,
      rows * LINE_HEIGHT + CHROME_HEIGHT,
    )
    const maxHeight = Math.max(
      Math.max(rows, maxRows) * LINE_HEIGHT + CHROME_HEIGHT,
      minHeight,
    )
    // scrollHeight is never less than the visible height, and includes the
    // padding but not the border.
    const contentHeight = el.scrollHeight + 2 * BORDER

    const height = Math.min(Math.max(contentHeight, minHeight), maxHeight)
    lastFitHeightRef.current = height
    el.style.height = `${height}px`
    // A box the user has dragged smaller than its content still needs to scroll.
    el.style.overflowY =
      contentHeight > maxHeight || resize === 'both' ? 'auto' : 'hidden'
  }, [rows, maxRows, resize])

  // Dragging the resize handle is only possible with resize="both". Track
  // whether a pointer is down so the observer below can tell a drag from the
  // container changing width. This is declared before the effect that fits the
  // height, so that leaving "both" forgets the dragged size first and the fit
  // that follows (its callback changes with `resize`) is not skipped.
  useLayoutEffect(() => {
    const el = innerRef.current
    if (!el || resize !== 'both') {
      userSizedRef.current = false
      // Drop the width a drag left behind
      if (el) el.style.width = ''
      return
    }

    const onDown = () => {
      pointerDownRef.current = true
    }
    const onUp = () => {
      pointerDownRef.current = false
    }
    el.addEventListener('pointerdown', onDown)
    // The pointer can be released outside the textarea
    document.addEventListener('pointerup', onUp)
    document.addEventListener('pointercancel', onUp)
    return () => {
      pointerDownRef.current = false
      el.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointercancel', onUp)
    }
  }, [resize])

  // Runs for typing and for the value being reset from outside.
  useLayoutEffect(() => {
    fitHeightToContent()
  }, [fitHeightToContent, value])

  // A change in width rewraps the text, so the height is fitted again. Height
  // changes are ignored so that resizing the box ourselves doesn't loop. A size
  // we didn't write, while the pointer is down, is the user dragging the resize
  // handle, so fitting stops for good.
  useLayoutEffect(() => {
    const el = innerRef.current
    if (!el || typeof ResizeObserver === 'undefined') return

    let width = el.offsetWidth
    let frame = 0
    const observer = new ResizeObserver(() => {
      if (
        pointerDownRef.current &&
        (el.offsetHeight !== lastFitHeightRef.current ||
          el.offsetWidth !== width)
      ) {
        userSizedRef.current = true
        cancelAnimationFrame(frame)
        width = el.offsetWidth
        return
      }
      if (el.offsetWidth === width) return
      width = el.offsetWidth
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(fitHeightToContent)
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [fitHeightToContent])

  return (
    <Field
      {...fieldProps}
      htmlFor={id}
      error={error}
      assistiveTextId={assistiveTextId}
      errorMsgId={errorMsgId}
    >
      <StyledTextArea
        ref={mergedRef}
        $error={error}
        id={id}
        name={name}
        disabled={disabled}
        $resize={resize}
        $fallbackStyle={fallbackStyle}
        placeholder={placeholder}
        value={value}
        onChange={(e: FormEvent<HTMLTextAreaElement>) => {
          onChange?.(e.currentTarget.value)
          onInputChange?.(e)
        }}
        maxLength={maxLength}
        onBlur={onBlur}
        rows={rows}
        {...controlAria}
      />
    </Field>
  )
})

interface TextArea {
  $resize: 'none' | 'both'
  disabled: boolean
  $error: boolean
  $fallbackStyle?: boolean
}

const StyledTextArea = styled.textarea.attrs(fieldFocusAttrs)<TextArea>`
  display: block;
  font-size: 16px;
  font: inherit;
  line-height: ${LINE_HEIGHT}px;
  background: ${({ $fallbackStyle, theme }) =>
    $fallbackStyle
      ? theme.color.surface.base[300]
      : theme.color.background['000']};
  border: ${BORDER}px solid ${({ theme }) => theme.color.border.subtle};
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
  padding: ${PADDING}px;
  color: ${({ theme }) => theme.color.text.base};
  resize: ${({ $resize }) => $resize};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  border-color: ${({ $error, theme }) =>
    $error ? theme.color.feedback.negative[200] : theme.color.border.subtle};
  outline: none;

  &:hover:not(:disabled):not(:focus) {
    border-color: ${({ $error, theme }) => fieldHoverBorderColor(theme, $error)};
  }

  &:focus {
    border-color: ${({ $error, theme }) =>
      $error
        ? theme.color.feedback.negative[200]
        : theme.color.border.contrast};
  }

  ${fieldFocusRing}
  ${fieldDisabledStyle}

  &::placeholder {
    color: ${({ theme }) => theme.color.text.subtle};
  }
`
