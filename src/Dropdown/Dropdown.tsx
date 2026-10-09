import {
  FocusEvent,
  FormEvent,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useMemo,
} from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Box } from '../Box'
import { Icons } from '../Icon'

import { Field } from '../fields/Field'
import { CommonFieldProps } from '../fields/commonFieldTypes'
import {
  InputLeadingIconContainer,
  StyledFrontIcon,
} from '../fields/components/CommonInput'
import {
  fieldDisabledStyle,
  fieldFocusAttrs,
  fieldFocusRing,
} from '../fields/components/fieldStyles'
import { useUniqueId } from '../utils/id'
import { useControllableState } from '../utils/useControlledState'
import { IconContainer } from '../sharedStyles/shared.styles'
import { faChevronDown } from '@awesome.me/kit-46ca99185c/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type DropdownItem = {
  optionGroupLabel?: string
  label: string
  value: string
}

export interface Props extends CommonFieldProps {
  placeholder?: string
  showDefaultOption?: boolean
  customDefaultOption?: string
  name?: string
  value?: string | null
  defaultValue?: string
  disabled?: boolean
  list: DropdownItem[]
  frontIcon?: Icons
  iconComponent?: ReactNode
  fallbackStyle?: boolean
  /** Accessible name, for when there is no visible `label` */
  'aria-label'?: string
  /** Lets the browser autofill the field, e.g. `honorific-prefix` */
  autoComplete?: string
  onSelect?: (element: string) => void
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void
}

type TruncateProps =
  | {
      onSelect: (e: string) => void
      onInputChange?: (e: FormEvent<HTMLSelectElement>) => void
    }
  | {
      onSelect?: (e: string) => void
      onInputChange: (e: FormEvent<HTMLSelectElement>) => void
    }

export type DropdownProps = Props & TruncateProps

export const Dropdown = forwardRef(function Dropdown(
  {
    id: idProp,
    placeholder,
    showDefaultOption = false,
    customDefaultOption,
    name,
    value: valueProp,
    defaultValue,
    disabled = false,
    list,
    onSelect,
    error = false,
    onInputChange,
    onBlur,
    frontIcon,
    iconComponent,
    fallbackStyle,
    required,
    'aria-label': ariaLabel,
    autoComplete,
    ...fieldProps
  }: DropdownProps,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  const theme = useTheme()
  const [value, setValue] = useControllableState({
    initialState: defaultValue,
    stateProp: valueProp,
  })
  const id = useUniqueId(idProp)
  const assistiveTextId = `${id}-assistive-text`
  const errorMsgId = `${id}-error`
  const hasOptGroups = list.findIndex((item) => !!item.optionGroupLabel) !== -1

  const dropdownItemsGroups = useMemo(() => {
    const itemsPerGroupLabel = new Map<string, DropdownItem[]>()

    list.forEach((item) => {
      const key = item.optionGroupLabel ?? ''
      const group = itemsPerGroupLabel.get(key) ?? []

      group.push(item)
      itemsPerGroupLabel.set(key, group)
    })

    return Array.from(itemsPerGroupLabel.values())
  }, [list])

  const defaultOptionLabel = () => {
    if (!showDefaultOption) {
      return placeholder
    }
    return customDefaultOption ?? 'Select an option'
  }

  // Only reference messages that the field actually renders.
  const describedBy =
    [
      fieldProps.assistiveText &&
        (!fieldProps.renderAsTitle || fieldProps.label) &&
        assistiveTextId,
      error && fieldProps.errorMsg && errorMsgId,
    ]
      .filter(Boolean)
      .join(' ') || undefined

  const iconToRender = iconComponent ? (
    <InputLeadingIconContainer $size={16} $iconColor={theme.color.text.base}>
      {iconComponent}
    </InputLeadingIconContainer>
  ) : frontIcon ? (
    <StyledFrontIcon render={frontIcon} color="color.icon.subtle" />
  ) : null

  return (
    <Field
      {...fieldProps}
      htmlFor={id}
      error={error}
      required={required}
      assistiveTextId={assistiveTextId}
      errorMsgId={errorMsgId}
    >
      <Box flex alignItems="center" style={{ position: 'relative' }}>
        {iconToRender}
        <StyledSelect
          id={id}
          disabled={disabled || list.length < 1}
          onChange={(event) => {
            const value = event.currentTarget.value

            onSelect?.(value)
            onInputChange?.(event)
            setValue(value)
          }}
          $error={error}
          ref={ref}
          onBlur={onBlur}
          name={name}
          autoComplete={autoComplete}
          aria-label={ariaLabel}
          aria-invalid={error || undefined}
          aria-required={required || undefined}
          aria-describedby={describedBy}
          $frontIcon={!!iconToRender}
          $fallbackStyle={fallbackStyle}
          value={value ?? ''}
        >
          <option value="" hidden={!showDefaultOption} disabled>
            {defaultOptionLabel()}
          </option>

          {dropdownItemsGroups.map((groupItems, i) =>
            hasOptGroups ? (
              <optgroup
                key={i}
                label={groupItems[0].optionGroupLabel ?? 'Other'}
              >
                {groupItems.map((el, j) => (
                  <option key={`${i}-${j}`} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </optgroup>
            ) : (
              groupItems.map((el, j) => (
                <option key={j} value={el.value}>
                  {el.label}
                </option>
              ))
            ),
          )}
        </StyledSelect>
        <Caret>
          <IconContainer $size={CHEVRON_SIZE}>
            <FontAwesomeIcon
              icon={faChevronDown}
              color={theme.color.icon.subtle}
            />
          </IconContainer>
        </Caret>
      </Box>
    </Field>
  )
})

interface SSelect {
  $error: boolean
  $frontIcon: boolean
  $fallbackStyle?: boolean
  value?: string | null
}

const CHEVRON_SIZE = 16
const CHEVRON_INSET = 16
const CHEVRON_TEXT_GAP = 4
const TEXT_PADDING_RIGHT = CHEVRON_INSET + CHEVRON_SIZE + CHEVRON_TEXT_GAP

const StyledSelect = styled.select.attrs(fieldFocusAttrs)<SSelect>(
  ({ theme, $error, $frontIcon, $fallbackStyle, value }) => {
    const borderColor = (color: string) =>
      $error ? theme.color.feedback.negative[200] : color

    return css`
      appearance: none;
      width: 100%;
      height: 48px;
      margin: 0;
      padding: 12px ${TEXT_PADDING_RIGHT}px 12px ${$frontIcon ? '42px' : '12px'};
      border: 2px solid ${borderColor(theme.color.border.subtle)};
      border-radius: 12px;
      background-color: ${
        $fallbackStyle
          ? theme.color.surface.base[300]
          : theme.color.background['000']
      };
      color: ${value === '' ? theme.color.text.subtle : theme.color.text.base};
      font-family: inherit;
      font-size: 16px;
      line-height: 20px;
      /* Not an ellipsis: consumers clamp narrow selects (e.g. a country code
         showing "(+44)" from "(+44) United Kingdom"), and the ellipsis takes
         room from the code. The text is clipped before the chevron instead. */
      text-overflow: clip;
      cursor: pointer;
      outline: none;

      option,
      optgroup {
        color: ${theme.color.text.base};
      }

      // Hover mustn't override the focus border while the pointer is over a
      // focused field.
      &:hover:not(:disabled):not(:focus) {
        border-color: ${borderColor(theme.color.border.base)};
      }

      &:focus {
        border-color: ${borderColor(theme.color.border.contrast)};
      }

      ${fieldFocusRing}
      ${fieldDisabledStyle}
    `
  },
)

const Caret = styled.div`
  position: absolute;
  z-index: 1;
  right: ${CHEVRON_INSET}px;
  display: flex;
  pointer-events: none;
`
