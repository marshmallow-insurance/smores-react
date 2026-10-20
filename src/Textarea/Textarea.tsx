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
  /** Number of lines the textarea shows before it has any content to grow with. Defaults to 4. */
  rows?: number
  /**
   * The most lines the textarea grows to as the content gets longer. Past this it scrolls.
   * Defaults to 8. A value lower than `rows` is treated as `rows`.
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
  const { assistiveTextId, errorMsgId, controlAria } = getFieldAria(id, {
    ...fieldProps,
    error,
  })

  const fitHeightToContent = useCallback(() => {
    const el = innerRef.current
    if (!el) return

    const minHeight = rows * LINE_HEIGHT + CHROME_HEIGHT
    const maxHeight = Math.max(rows, maxRows) * LINE_HEIGHT + CHROME_HEIGHT

    // Measure from the natural height, without a scrollbar taking up width.
    el.style.overflowY = 'hidden'
    el.style.height = 'auto'
    // scrollHeight includes the padding but not the border.
    const contentHeight = el.scrollHeight + 2 * BORDER

    el.style.height = `${Math.min(Math.max(contentHeight, minHeight), maxHeight)}px`
    // A box the user has dragged smaller than its content still needs to scroll.
    el.style.overflowY =
      contentHeight > maxHeight || resize === 'both' ? 'auto' : 'hidden'
  }, [rows, maxRows, resize])

  // Runs for typing and for the value being reset from outside.
  useLayoutEffect(() => {
    fitHeightToContent()
  }, [fitHeightToContent, value])

  // A change in width rewraps the text. Height changes are ignored so that
  // resizing the box ourselves, or the user dragging it taller, doesn't loop.
  useLayoutEffect(() => {
    const el = innerRef.current
    if (!el || typeof ResizeObserver === 'undefined') return

    let width = el.offsetWidth
    let frame = 0
    const observer = new ResizeObserver(() => {
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
