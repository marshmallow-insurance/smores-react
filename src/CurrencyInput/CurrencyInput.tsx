import {
  FocusEvent,
  FormEvent,
  ForwardedRef,
  WheelEvent,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react'

import { Box } from '../Box'
import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'

import {
  Input,
  InputLeadingIconContainer,
} from '../fields/components/CommonInput'
import { useUniqueId } from '../utils/id'
import { getFieldAria } from '../fields/fieldAria'
import { faSterlingSign } from '@awesome.me/kit-46ca99185c/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

export interface Props extends CommonFieldProps {
  placeholder: string
  name?: string
  value: string
  decimalNumber?: boolean
  formatThousands?: boolean
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  min?: number
  max?: number
}

const DIGITS_DOT_OR_MINUS = /[\d.-]/

const stripFormatting = (value: string) => {
  const cleaned = value.replace(/(?!^)-|[^\d.-]/g, '')
  const [integer, ...fraction] = cleaned.split('.')
  return fraction.length ? `${integer}.${fraction.join('')}` : integer
}

const addThousandsSeparators = (value: string) => {
  if (!value) return value
  const [integer, fraction] = value.split('.')
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return fraction === undefined ? grouped : `${grouped}.${fraction}`
}

const countSignificant = (value: string) => value.replace(/[^\d.-]/g, '').length

const caretAfterSignificant = (formatted: string, count: number) => {
  let seen = 0
  for (let i = 0; i < formatted.length; i++) {
    if (seen === count) return i
    if (DIGITS_DOT_OR_MINUS.test(formatted[i])) seen++
  }
  return formatted.length
}

/** on change or on input required */
type InputProps =
  | {
      /** on change is required and on input optional */
      onChange: (e: string) => void
      onInputChange?: (e: FormEvent<HTMLInputElement>) => void
    }
  | {
      /** on input is required and on change optional */
      onChange?: (e: string) => void
      onInputChange: (e: FormEvent<HTMLInputElement>) => void
    }

export type CurrencyInputProps = Props & InputProps

export const CurrencyInput = forwardRef(function CurrencyInput(
  {
    id: idProp,
    placeholder,
    name,
    value,
    decimalNumber = true,
    formatThousands = false,
    onChange,
    onInputChange,
    onBlur,
    min,
    max,
    disabled = false,
    error = false,
    fallbackStyle,
    ...fieldProps
  }: CurrencyInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const theme = useTheme()
  const id = useUniqueId(idProp)
  const { assistiveTextId, errorMsgId, controlAria } = getFieldAria(id, {
    ...fieldProps,
    error,
  })
  const inputRef = useRef<HTMLInputElement | null>(null)
  const pendingCaret = useRef<{ value: string; position: number } | null>(null)

  const setInputRef = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node
      if (typeof ref === 'function') ref(node)
      else if (ref) ref.current = node
    },
    [ref],
  )

  const displayValue = formatThousands ? addThousandsSeparators(value) : value

  const applyPendingCaret = () => {
    const input = inputRef.current
    const pending = pendingCaret.current
    if (!input || !pending || input.value !== pending.value) return
    pendingCaret.current = null
    if (input.ownerDocument.activeElement === input) {
      input.setSelectionRange(pending.position, pending.position)
    }
  }

  useLayoutEffect(applyPendingCaret)

  const formatCurrency = (value: string) => {
    const decimalIndex = value.indexOf('.')

    if (!decimalNumber) {
      const numberValue = Number(value)
      return Number.isNaN(numberValue)
        ? value
        : Math.trunc(numberValue).toString()
    }

    if (decimalIndex >= 0 && value.length > decimalIndex + 1) {
      const fractionalString = value.substring(decimalIndex + 1).substring(0, 2)
      return `${value.substring(0, decimalIndex)}.${fractionalString}`
    } else {
      return value
    }
  }

  const applyMinMax = (value: string) => {
    const numberValue = Number(value)
    if (min && numberValue < min) return min.toString()
    if (max && numberValue > max) return max.toString()
    return value
  }

  const normalise = (value: string) => {
    const EMPTY_INPUT = ''
    if (value === EMPTY_INPUT) return value
    return applyMinMax(formatCurrency(value))
  }

  const handleChange = (value: string) => {
    if (onChange === undefined) return
    onChange(normalise(value))
  }

  return (
    <Field
      {...fieldProps}
      htmlFor={id}
      error={error}
      assistiveTextId={assistiveTextId}
      errorMsgId={errorMsgId}
    >
      <Box flex alignItems="center" justifyContent="flex-start">
        <InputLeadingIconContainer
          $size={20}
          $disabled={disabled}
          style={{ top: '-1px' }}
        >
          <FontAwesomeIcon
            icon={faSterlingSign}
            color={disabled ? theme.color.icon.subtle : theme.color.text.subtle}
          />
        </InputLeadingIconContainer>
        <Input
          ref={setInputRef}
          $error={error}
          disabled={disabled}
          type={formatThousands ? 'text' : 'number'}
          inputMode={formatThousands ? 'decimal' : undefined}
          id={id}
          name={name}
          placeholder={placeholder}
          value={displayValue}
          $frontIcon={true}
          $fallbackStyle={fallbackStyle}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            if (formatThousands) {
              const { value: typed, selectionStart } = e.currentTarget
              const raw = stripFormatting(typed)
              const nextDisplay = addThousandsSeparators(
                onChange ? normalise(raw) : raw,
              )
              const significantBeforeCaret = countSignificant(
                typed.slice(0, selectionStart ?? typed.length),
              )
              pendingCaret.current = {
                value: nextDisplay,
                position: caretAfterSignificant(
                  nextDisplay,
                  significantBeforeCaret,
                ),
              }
              queueMicrotask(applyPendingCaret)
              if (onChange) handleChange(raw)
            } else if (onChange) {
              handleChange(e.currentTarget.value)
            }
            onInputChange?.(e)
          }}
          onWheel={
            formatThousands
              ? undefined
              : (e: WheelEvent<HTMLInputElement>) => e.currentTarget.blur()
          }
          {...controlAria}
          onBlur={onBlur}
        />
      </Box>
    </Field>
  )
})
