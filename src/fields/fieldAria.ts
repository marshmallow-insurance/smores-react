import { CommonFieldProps } from './commonFieldTypes'

type FieldAriaInput = Pick<
  CommonFieldProps,
  | 'assistiveText'
  | 'label'
  | 'renderAsTitle'
  | 'error'
  | 'errorMsg'
  | 'required'
>

/**
 * Ids for a field's help and error text, and the ARIA attributes for its control.
 * `aria-describedby` only references messages that the Field actually renders.
 */
export const getFieldAria = (id: string, field: FieldAriaInput) => {
  const assistiveTextId = `${id}-assistive-text`
  const errorMsgId = `${id}-error`

  const showsAssistiveText =
    !!field.assistiveText && (!field.renderAsTitle || !!field.label)
  const showsErrorMsg = !!field.error && !!field.errorMsg

  const describedBy =
    [showsAssistiveText && assistiveTextId, showsErrorMsg && errorMsgId]
      .filter(Boolean)
      .join(' ') || undefined

  return {
    assistiveTextId,
    errorMsgId,
    controlAria: {
      'aria-invalid': field.error || undefined,
      'aria-required': field.required || undefined,
      'aria-describedby': describedBy,
    },
  }
}
