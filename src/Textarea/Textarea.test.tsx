import type { Mock } from 'vitest'
import { createRef, useState } from 'react'
import { render, screen, fireEvent } from '../testUtils'
import { Textarea, TextareaProps } from './Textarea'
import { noop } from '../utils/noop'

describe('Textarea', () => {
  it('renders correctly with required props', () => {
    const { baseElement } = render(
      <Textarea value="Textarea label" onChange={noop} />,
    )

    expect(baseElement).toMatchSnapshot()

    expect(screen.getByText('Textarea label')).toBeTruthy()
  })

  it('describes the textarea with its help and error text', () => {
    render(
      <Textarea
        label="Notes"
        value=""
        onChange={noop}
        required
        error
        errorMsg="Add some notes"
        assistiveText="Keep it short"
      />,
    )
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveAttribute('aria-required', 'true')
    const describedBy =
      textarea.getAttribute('aria-describedby')?.split(' ') ?? []
    expect(
      describedBy.map((id) => document.getElementById(id)?.textContent),
    ).toEqual(['Keep it short', 'Add some notes'])
  })

  it('shows a focus ring only for keyboard focus', () => {
    render(<Textarea label="Notes" value="" onChange={noop} />)
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveStyleRule(
      'outline',
      expect.stringContaining('2px'),
      {
        modifier: ':focus-visible:not([data-pointer-focus])',
      },
    )
  })

  it('uses a grey fill when disabled, not opacity', () => {
    render(<Textarea label="Notes" value="" onChange={noop} disabled />)
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveStyleRule('background-color', expect.any(String), {
      modifier: ':disabled',
    })
    expect(textarea).toHaveStyleRule('opacity', '1', {
      modifier: ':disabled',
    })
  })

  describe('growing with content', () => {
    // jsdom has no layout, so scrollHeight (padding included, border excluded) is mocked
    let scrollHeight = 0
    let scrollHeightSpy: Mock<() => number>

    beforeEach(() => {
      scrollHeightSpy = vi.fn<() => number>(() => scrollHeight)
      Object.defineProperty(HTMLTextAreaElement.prototype, 'scrollHeight', {
        configurable: true,
        get: scrollHeightSpy,
      })
    })

    afterEach(() => {
      delete (HTMLTextAreaElement.prototype as { scrollHeight?: number })
        .scrollHeight
    })

    // rows * 20px line height + 24px padding + 4px border
    const heightOf = (rows: number) => `${rows * 20 + 28}px`

    const renderTextarea = (props: Partial<TextareaProps> = {}) =>
      render(<Textarea label="Notes" value="" onChange={noop} {...props} />)

    it('starts at exactly four lines by default', () => {
      scrollHeight = 104
      renderTextarea()
      const textarea = screen.getByRole('textbox')

      expect(heightOf(4)).toBe('108px')
      expect(textarea).toHaveStyle({ height: '108px' })
      expect(textarea).toHaveAttribute('rows', '4')
    })

    it('never shrinks below the rows height', () => {
      scrollHeight = 44
      renderTextarea({ rows: 6 })

      expect(screen.getByRole('textbox')).toHaveStyle({ height: heightOf(6) })
    })

    it('grows between the rows height and the max height', () => {
      // 6 lines of text: 120px of text plus 24px of padding
      scrollHeight = 144
      renderTextarea()
      const textarea = screen.getByRole('textbox')

      expect(textarea).toHaveStyle({ height: heightOf(6) })
      expect(textarea.style.overflowY).toBe('hidden')
    })

    it('stops growing at eight lines by default and then scrolls', () => {
      scrollHeight = 24 + 20 * 12
      renderTextarea()
      const textarea = screen.getByRole('textbox')

      expect(textarea).toHaveStyle({ height: heightOf(8) })
      expect(textarea.style.overflowY).toBe('auto')
    })

    it('does not scroll when the content exactly fills the max height', () => {
      scrollHeight = 24 + 20 * 8
      renderTextarea()
      const textarea = screen.getByRole('textbox')

      expect(textarea).toHaveStyle({ height: heightOf(8) })
      expect(textarea.style.overflowY).toBe('hidden')
    })

    it('respects maxRows', () => {
      scrollHeight = 24 + 20 * 12
      renderTextarea({ maxRows: 6 })

      expect(screen.getByRole('textbox')).toHaveStyle({ height: heightOf(6) })
    })

    it('treats a maxRows lower than rows as rows', () => {
      scrollHeight = 24 + 20 * 12
      renderTextarea({ rows: 5, maxRows: 2 })
      const textarea = screen.getByRole('textbox')

      expect(textarea).toHaveStyle({ height: heightOf(5) })
      expect(textarea.style.overflowY).toBe('auto')
    })

    it('recomputes when the value changes, including a reset from outside', () => {
      const Controlled = () => {
        const [value, setValue] = useState('')
        return (
          <>
            <Textarea label="Notes" value={value} onChange={setValue} />
            <button onClick={() => setValue('')}>Reset</button>
          </>
        )
      }
      scrollHeight = 104
      render(<Controlled />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveStyle({ height: heightOf(4) })

      scrollHeight = 24 + 20 * 6
      fireEvent.change(textarea, { target: { value: 'a\nb\nc\nd\ne\nf' } })
      expect(textarea).toHaveStyle({ height: heightOf(6) })

      scrollHeight = 104
      fireEvent.click(screen.getByText('Reset'))
      expect(textarea).toHaveStyle({ height: heightOf(4) })
    })

    describe('with a height set in CSS', () => {
      let offsetHeight = 0

      beforeEach(() => {
        Object.defineProperty(HTMLTextAreaElement.prototype, 'offsetHeight', {
          configurable: true,
          get: () => offsetHeight,
        })
      })

      afterEach(() => {
        offsetHeight = 0
        delete (HTMLTextAreaElement.prototype as { offsetHeight?: number })
          .offsetHeight
      })

      it('starts at that height rather than the rows height', () => {
        offsetHeight = 144
        // scrollHeight is never less than the visible height: 144 - 4 border
        scrollHeight = 140
        renderTextarea()

        expect(screen.getByRole('textbox')).toHaveStyle({ height: '144px' })
      })

      it('still grows up to the max height', () => {
        offsetHeight = 144
        scrollHeight = 24 + 20 * 7
        renderTextarea()
        expect(screen.getByRole('textbox')).toHaveStyle({ height: heightOf(7) })
      })

      it('stops at the max height and scrolls', () => {
        offsetHeight = 144
        scrollHeight = 24 + 20 * 12
        renderTextarea()
        const textarea = screen.getByRole('textbox')

        expect(textarea).toHaveStyle({ height: heightOf(8) })
        expect(textarea.style.overflowY).toBe('auto')
      })

      it('keeps a CSS height taller than the max height', () => {
        offsetHeight = 300
        scrollHeight = 296
        renderTextarea()
        const textarea = screen.getByRole('textbox')

        expect(textarea).toHaveStyle({ height: '300px' })
        expect(textarea.style.overflowY).toBe('hidden')
      })

      it('measures with the inline height cleared', () => {
        let heightWhenMeasured: string | undefined
        scrollHeightSpy.mockImplementation(() => {
          heightWhenMeasured = screen.getByRole('textbox').style.height
          return 104
        })
        renderTextarea()

        expect(heightWhenMeasured).toBe('')
      })
    })

    it('keeps scrolling available when the box can be resized by the user', () => {
      scrollHeight = 104
      renderTextarea({ resize: 'both' })
      const textarea = screen.getByRole('textbox')

      expect(textarea).toHaveStyle({ height: heightOf(4) })
      expect(textarea.style.overflowY).toBe('auto')
      expect(textarea).toHaveStyleRule('resize', 'both')
      // The max is applied in the calculation only, so the user can drag past it
      expect(textarea).not.toHaveStyleRule('max-height', expect.anything())
    })

    it('recomputes when the width changes', () => {
      const observers: { callback: () => void; disconnect: () => void }[] = []
      class MockResizeObserver {
        callback: () => void
        constructor(callback: () => void) {
          this.callback = callback
          observers.push(this)
        }
        observe = vi.fn()
        disconnect = vi.fn()
      }
      vi.stubGlobal('ResizeObserver', MockResizeObserver)
      const frames: FrameRequestCallback[] = []
      vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
        frames.push(cb)
        return frames.length
      })
      vi.stubGlobal('cancelAnimationFrame', vi.fn())

      try {
        scrollHeight = 104
        const { unmount } = renderTextarea()
        const textarea = screen.getByRole('textbox')
        expect(textarea).toHaveStyle({ height: heightOf(4) })

        // Narrower, so the text rewraps onto more lines
        scrollHeight = 24 + 20 * 6
        Object.defineProperty(textarea, 'offsetWidth', {
          configurable: true,
          value: 200,
        })
        observers[0].callback()
        frames.forEach((frame) => frame(0))
        expect(textarea).toHaveStyle({ height: heightOf(6) })

        unmount()
        expect(observers[0].disconnect).toHaveBeenCalled()
      } finally {
        vi.unstubAllGlobals()
      }
    })

    describe('when the user drags the resize handle', () => {
      const observers: { callback: () => void }[] = []

      beforeEach(() => {
        observers.length = 0
        class MockResizeObserver {
          callback: () => void
          constructor(callback: () => void) {
            this.callback = callback
            observers.push(this)
          }
          observe = vi.fn()
          disconnect = vi.fn()
        }
        vi.stubGlobal('ResizeObserver', MockResizeObserver)
        vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
          cb(0)
          return 1
        })
        vi.stubGlobal('cancelAnimationFrame', vi.fn())
        // With no layout in jsdom, the box is as tall as its inline height
        Object.defineProperty(HTMLTextAreaElement.prototype, 'offsetHeight', {
          configurable: true,
          get(this: HTMLTextAreaElement) {
            return parseInt(this.style.height, 10) || 0
          },
        })
      })

      afterEach(() => {
        vi.unstubAllGlobals()
        delete (HTMLTextAreaElement.prototype as { offsetHeight?: number })
          .offsetHeight
      })

      const Controlled = ({ resize }: { resize: 'none' | 'both' }) => {
        const [value, setValue] = useState('')
        return (
          <Textarea
            label="Notes"
            value={value}
            onChange={setValue}
            resize={resize}
          />
        )
      }

      it('keeps their size from then on', () => {
        scrollHeight = 104
        render(<Controlled resize="both" />)
        const textarea = screen.getByRole('textbox')
        expect(textarea).toHaveStyle({ height: heightOf(4) })

        fireEvent.pointerDown(textarea)
        // The browser writes the dragged size, then the observer fires
        textarea.style.height = '253px'
        Object.defineProperty(textarea, 'offsetWidth', {
          configurable: true,
          value: 780,
        })
        observers[0].callback()
        fireEvent.pointerUp(document)

        expect(textarea).toHaveStyle({ height: '253px' })

        scrollHeight = 24 + 20 * 6
        fireEvent.change(textarea, { target: { value: 'a\nb\nc\nd\ne\nf' } })
        expect(textarea).toHaveStyle({ height: '253px' })
      })

      it('does not treat its own size changes as a drag', () => {
        scrollHeight = 104
        render(<Controlled resize="both" />)
        const textarea = screen.getByRole('textbox')

        // A press and hold while the value changes, so our own fit changes the height
        fireEvent.pointerDown(textarea)
        scrollHeight = 24 + 20 * 6
        fireEvent.change(textarea, { target: { value: 'a\nb\nc\nd\ne\nf' } })
        expect(textarea).toHaveStyle({ height: heightOf(6) })
        observers[0].callback()
        fireEvent.pointerUp(document)

        scrollHeight = 24 + 20 * 7
        fireEvent.change(textarea, {
          target: { value: 'a\nb\nc\nd\ne\nf\ng' },
        })
        expect(textarea).toHaveStyle({ height: heightOf(7) })
      })

      it('treats a width change by the user as a drag', () => {
        scrollHeight = 104
        render(<Controlled resize="both" />)
        const textarea = screen.getByRole('textbox')

        // Only the width changes, as the height is what we last wrote
        fireEvent.pointerDown(textarea)
        Object.defineProperty(textarea, 'offsetWidth', {
          configurable: true,
          value: 700,
        })
        observers[0].callback()
        fireEvent.pointerUp(document)

        scrollHeight = 24 + 20 * 6
        fireEvent.change(textarea, { target: { value: 'a\nb\nc\nd\ne\nf' } })
        expect(textarea).toHaveStyle({ height: heightOf(4) })
      })

      it('fits again and clears the dragged width when resize is turned off', () => {
        scrollHeight = 104
        const { rerender } = render(
          <Textarea label="Notes" value="" onChange={noop} resize="both" />,
        )
        const textarea = screen.getByRole('textbox')

        fireEvent.pointerDown(textarea)
        textarea.style.height = '253px'
        textarea.style.width = '780px'
        observers[0].callback()
        fireEvent.pointerUp(document)
        expect(textarea).toHaveStyle({ height: '253px', width: '780px' })

        rerender(
          <Textarea label="Notes" value="" onChange={noop} resize="none" />,
        )

        expect(textarea).toHaveStyle({ height: heightOf(4) })
        expect(textarea.style.width).toBe('')
        expect(textarea.style.overflowY).toBe('hidden')
      })

      it('still fits when the width changes with no pointer down', () => {
        scrollHeight = 104
        render(<Controlled resize="both" />)
        const textarea = screen.getByRole('textbox')

        fireEvent.pointerDown(textarea)
        fireEvent.pointerUp(document)
        scrollHeight = 24 + 20 * 6
        Object.defineProperty(textarea, 'offsetWidth', {
          configurable: true,
          value: 200,
        })
        observers[0].callback()

        expect(textarea).toHaveStyle({ height: heightOf(6) })
      })

      it('releases the pointer outside the textarea', () => {
        scrollHeight = 104
        render(<Controlled resize="both" />)
        const textarea = screen.getByRole('textbox')

        fireEvent.pointerDown(textarea)
        fireEvent.pointerCancel(document)
        scrollHeight = 24 + 20 * 6
        Object.defineProperty(textarea, 'offsetWidth', {
          configurable: true,
          value: 200,
        })
        observers[0].callback()

        expect(textarea).toHaveStyle({ height: heightOf(6) })
      })

      it('does not track the pointer without resize="both"', () => {
        scrollHeight = 104
        render(<Controlled resize="none" />)
        const textarea = screen.getByRole('textbox')

        fireEvent.pointerDown(textarea)
        scrollHeight = 24 + 20 * 6
        Object.defineProperty(textarea, 'offsetWidth', {
          configurable: true,
          value: 200,
        })
        observers[0].callback()

        expect(textarea).toHaveStyle({ height: heightOf(6) })
      })
    })

    it('still gives a forwarded ref the textarea element', () => {
      const ref = createRef<HTMLTextAreaElement>()
      scrollHeight = 104
      renderTextarea({ ref } as Partial<TextareaProps>)

      expect(ref.current).toBe(screen.getByRole('textbox'))
    })

    it('still calls a forwarded callback ref', () => {
      const ref = vi.fn()
      scrollHeight = 104
      render(<Textarea ref={ref} label="Notes" value="" onChange={noop} />)

      expect(ref).toHaveBeenCalledWith(screen.getByRole('textbox'))
    })
  })
})
