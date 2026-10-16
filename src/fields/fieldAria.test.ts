import { describe, expect, it } from 'vitest'
import { getFieldAria } from './fieldAria'

describe('getFieldAria', () => {
  it('describes the control with its assistive text and error message', () => {
    const { assistiveTextId, errorMsgId, controlAria } = getFieldAria('x', {
      label: 'Name',
      assistiveText: 'Full name',
      error: true,
      errorMsg: 'Required',
      required: true,
    })

    expect(controlAria).toEqual({
      'aria-invalid': true,
      'aria-required': true,
      'aria-describedby': `${assistiveTextId} ${errorMsgId}`,
    })
  })

  it('leaves out describedby when there is no help or error text', () => {
    const { controlAria } = getFieldAria('x', { label: 'Name' })

    expect(controlAria['aria-describedby']).toBeUndefined()
    expect(controlAria['aria-invalid']).toBeUndefined()
    expect(controlAria['aria-required']).toBeUndefined()
  })

  it('does not reference an error message unless it is shown', () => {
    const { assistiveTextId, controlAria } = getFieldAria('x', {
      label: 'Name',
      assistiveText: 'Full name',
      errorMsg: 'Required',
    })

    expect(controlAria['aria-describedby']).toBe(assistiveTextId)
  })

  it('does not reference renderAsTitle help text when there is no label', () => {
    const { controlAria } = getFieldAria('x', {
      assistiveText: 'Pick a day',
      renderAsTitle: true,
    })

    expect(controlAria['aria-describedby']).toBeUndefined()
  })

  it('references renderAsTitle help text when there is a label', () => {
    const { assistiveTextId, controlAria } = getFieldAria('x', {
      label: 'Day',
      assistiveText: 'Pick a day',
      renderAsTitle: true,
    })

    expect(controlAria['aria-describedby']).toBe(assistiveTextId)
  })
})
