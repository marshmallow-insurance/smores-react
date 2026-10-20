import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { noop } from '../utils/noop'
import { SearchInput } from './SearchInput'
import { Modal } from '../Modal'

const searchList = Array.from({ length: 30 }, (_, i) => ({
  label: `Option ${i}`,
  value: `option-${i}`,
}))

let scrollIntoViewMock: ReturnType<typeof vi.fn>

beforeEach(() => {
  scrollIntoViewMock = vi.fn()
  Element.prototype.scrollIntoView =
    scrollIntoViewMock as unknown as Element['scrollIntoView']
})

afterEach(() => {
  vi.restoreAllMocks()
})

const openResults = (container: HTMLElement) => {
  const input = container.querySelector('input')!
  fireEvent.click(input)
  return input
}

describe('SearchInput when searchList changes', () => {
  const fruits = [
    { label: 'Apple', value: 'apple', tags: ['red'] },
    { label: 'Banana', value: 'banana', tags: ['yellow'] },
  ]
  const vegetables = [
    { label: 'Carrot', value: 'carrot', tags: ['orange'] },
    { label: 'Courgette', value: 'courgette', tags: ['green'] },
  ]

  it('shows the new options when the query is empty', () => {
    const { container, rerender } = render(
      <SearchInput searchList={fruits} onFound={noop} />,
    )
    rerender(<SearchInput searchList={vegetables} onFound={noop} />)
    openResults(container)

    expect(screen.getByText('Carrot')).toBeInTheDocument()
    expect(screen.getByText('Courgette')).toBeInTheDocument()
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
  })

  it('filters the new options when the query is unchanged', () => {
    const { container, rerender } = render(
      <SearchInput searchList={fruits} onFound={noop} />,
    )
    const input = openResults(container)
    fireEvent.change(input, { target: { value: 'C' } })

    rerender(<SearchInput searchList={vegetables} onFound={noop} />)

    expect(screen.getByText('Carrot')).toBeInTheDocument()
    expect(screen.getByText('Courgette')).toBeInTheDocument()
  })

  it('fuzzy searches the new options when the query is unchanged', () => {
    const { container, rerender } = render(
      <SearchInput searchList={fruits} onFound={noop} enableFuzzySearch />,
    )
    const input = openResults(container)
    fireEvent.change(input, { target: { value: 'Carrot' } })

    rerender(
      <SearchInput searchList={vegetables} onFound={noop} enableFuzzySearch />,
    )

    expect(screen.getByText('Carrot')).toBeInTheDocument()
  })

  it('fuzzy searches with the new fuzzySearchOptions', () => {
    const { container, rerender } = render(
      <SearchInput
        searchList={fruits}
        onFound={noop}
        fuzzySearchOptions={{ keys: ['label'] }}
      />,
    )
    const input = openResults(container)
    fireEvent.change(input, { target: { value: 'yellow' } })
    expect(screen.queryByText('Banana')).not.toBeInTheDocument()

    rerender(
      <SearchInput
        searchList={fruits}
        onFound={noop}
        fuzzySearchOptions={{ keys: ['tags'] }}
      />,
    )

    expect(screen.getByText('Banana')).toBeInTheDocument()
  })

  it('stops fuzzy searching when enableFuzzySearch is turned off', () => {
    const { container, rerender } = render(
      <SearchInput searchList={fruits} onFound={noop} enableFuzzySearch />,
    )
    const input = openResults(container)
    fireEvent.change(input, { target: { value: 'Bnana' } })
    expect(screen.getByText('Banana')).toBeInTheDocument()

    rerender(<SearchInput searchList={fruits} onFound={noop} />)

    expect(screen.queryByText('Banana')).not.toBeInTheDocument()
  })

  it('does not select anything on Enter when the highlighted option was removed', () => {
    const onFound = vi.fn()
    const { container, rerender } = render(
      <SearchInput searchList={vegetables} onFound={onFound} />,
    )
    const input = openResults(container)
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'ArrowDown' })

    rerender(<SearchInput searchList={fruits.slice(0, 1)} onFound={onFound} />)

    expect(() => fireEvent.keyDown(input, { key: 'Enter' })).not.toThrow()
    expect(onFound).not.toHaveBeenCalled()
  })

  it('does not select a different option on Enter when the list is swapped at the same length', () => {
    const onFound = vi.fn()
    const { container, rerender } = render(
      <SearchInput searchList={vegetables} onFound={onFound} />,
    )
    const input = openResults(container)
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'ArrowDown' })

    rerender(<SearchInput searchList={fruits} onFound={onFound} />)
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(onFound).not.toHaveBeenCalled()
  })

  it('keeps the highlight when the same options are passed as a new array', () => {
    const onFound = vi.fn()
    const { container, rerender } = render(
      <SearchInput searchList={vegetables} onFound={onFound} />,
    )
    const input = openResults(container)
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'ArrowDown' })

    rerender(<SearchInput searchList={[...vegetables]} onFound={onFound} />)
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(onFound).toHaveBeenCalledWith('courgette')
  })
})

describe('SearchInput', () => {
  it('cancels the leading icon width so the input aligns with its container', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} showIcon />,
    )
    const icon = container.querySelector('input')!
      .previousElementSibling as HTMLElement
    const style = getComputedStyle(icon)
    expect(style.width).toBe('20px')
    expect(style.marginLeft).toBe('-20px')
  })

  it('resets the results list scroll position to the top when the search query changes', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)

    const resultsList = container.querySelector('ul')!
    resultsList.scrollTop = 150

    fireEvent.change(input, { target: { value: 'Option 2' } })

    expect(container.querySelector('ul')?.scrollTop).toBe(0)
  })

  it('still scrolls the highlighted item into view on arrow key navigation', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)

    fireEvent.keyDown(input, { key: 'ArrowDown' })

    expect(scrollIntoViewMock).toHaveBeenCalled()
  })

  it('highlights a hovered option without scrolling the list', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    openResults(container)

    const option = screen.getByRole('option', { name: 'Option 3' })
    fireEvent.mouseMove(option)

    expect(option).toHaveAttribute('aria-selected', 'true')
    expect(scrollIntoViewMock).not.toHaveBeenCalled()
  })

  it('does not highlight an option that scrolls under a still cursor', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    openResults(container)

    const option = screen.getByRole('option', { name: 'Option 3' })
    fireEvent.mouseEnter(option)

    expect(option).toHaveAttribute('aria-selected', 'false')
  })

  it('does not highlight a hovered option that is scrolled out of the list', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    openResults(container)

    // Four 48px options fit; the list's bottom edge hit-tests to the fifth
    const list = screen.getByRole('listbox')
    vi.spyOn(list, 'clientHeight', 'get').mockReturnValue(192)
    const hidden = screen.getByRole('option', { name: 'Option 4' })
    vi.spyOn(hidden, 'offsetTop', 'get').mockReturnValue(192)
    vi.spyOn(hidden, 'offsetHeight', 'get').mockReturnValue(48)

    fireEvent.mouseMove(hidden)

    expect(hidden).toHaveAttribute('aria-selected', 'false')
  })

  it('scrolls on arrow key navigation after a hover', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)

    fireEvent.mouseMove(screen.getByRole('option', { name: 'Option 3' }))
    fireEvent.keyDown(input, { key: 'ArrowDown' })

    const next = screen.getByRole('option', { name: 'Option 4' })
    expect(next).toHaveAttribute('aria-selected', 'true')
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1)
    expect(scrollIntoViewMock.mock.contexts[0]).toBe(next)
  })

  it('still closes the results list and selects the option when an item is clicked', () => {
    const onFound = vi.fn()
    const { container } = render(
      <SearchInput searchList={searchList} onFound={onFound} />,
    )
    openResults(container)

    fireEvent.click(screen.getByText('Option 0'))

    expect(onFound).toHaveBeenCalledWith('option-0')
    expect(container.querySelector('ul')).not.toBeInTheDocument()
  })
  it('shows the full list again when clicking back into a field with a selection', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)
    fireEvent.click(screen.getByText('Option 3'))
    expect(input).toHaveValue('Option 3')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    fireEvent.click(input)

    expect(input).toHaveValue('Option 3')
    expect(screen.getAllByRole('option')).toHaveLength(searchList.length)
  })

  it('shows the full list again after clicking outside with a selection', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)
    fireEvent.click(screen.getByText('Option 3'))
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: 'Option 1' } })

    fireEvent.click(document.body)
    expect(input).toHaveValue('Option 3')

    fireEvent.click(input)
    expect(screen.getAllByRole('option')).toHaveLength(searchList.length)
  })

  it('selects the label when reopening a field with a selection, so typing replaces it', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)
    fireEvent.click(screen.getByText('Option 3'))

    fireEvent.click(input)
    expect(input.selectionStart).toBe(0)
    expect(input.selectionEnd).toBe('Option 3'.length)

    // Once the list is open, clicking places the caret as normal
    input.setSelectionRange(2, 2)
    fireEvent.click(input)
    expect(input.selectionStart).toBe(2)
    expect(input.selectionEnd).toBe(2)
  })

  it('selects the label when tabbing into a field with a selection', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)
    fireEvent.click(screen.getByText('Option 3'))
    input.setSelectionRange(2, 2)

    fireEvent.focus(input)

    expect(input.selectionStart).toBe(0)
    expect(input.selectionEnd).toBe('Option 3'.length)
  })

  it('selects the label when reopening with ArrowDown', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)
    fireEvent.click(screen.getByText('Option 3'))
    input.setSelectionRange(2, 2)

    fireEvent.keyDown(input, { key: 'ArrowDown' })

    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(input.selectionStart).toBe(0)
    expect(input.selectionEnd).toBe('Option 3'.length)
  })

  it('takes over the mousedown only when focusing a field with a selection', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = container.querySelector('input')!
    // No selection yet, so the browser handles the click as normal
    expect(fireEvent.mouseDown(input)).toBe(true)

    openResults(container)
    fireEvent.click(screen.getByText('Option 3'))
    input.blur()

    expect(fireEvent.mouseDown(input)).toBe(false)
    expect(input).toHaveFocus()
    expect(input.selectionStart).toBe(0)
    expect(input.selectionEnd).toBe('Option 3'.length)
  })

  it('does not select the text when reopening without a selection', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)
    fireEvent.change(input, { target: { value: 'Opt' } })
    input.setSelectionRange(3, 3)
    fireEvent.keyDown(input, { key: 'Escape' })

    fireEvent.click(input)

    expect(input.selectionStart).toBe(3)
    expect(input.selectionEnd).toBe(3)
  })

  it('centres the selected option in the list when it opens', () => {
    const itemHeight = 50
    const listHeight = 200
    vi.spyOn(HTMLElement.prototype, 'offsetTop', 'get').mockImplementation(
      function (this: HTMLElement) {
        const siblings = Array.from(this.parentElement?.children ?? [])
        return siblings.indexOf(this) * itemHeight
      },
    )
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(
      itemHeight,
    )
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(
      listHeight,
    )

    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    const input = openResults(container)
    fireEvent.click(screen.getByText('Option 20'))
    fireEvent.click(input)

    expect(screen.getByRole('listbox').scrollTop).toBe(
      20 * itemHeight - (listHeight - itemHeight) / 2,
    )
  })

  it('opens at the top when nothing is selected', () => {
    const { container } = render(
      <SearchInput searchList={searchList} onFound={noop} />,
    )
    openResults(container)

    expect(screen.getByRole('listbox').scrollTop).toBe(0)
  })

  describe('combobox semantics', () => {
    const renderSearch = () =>
      render(
        <SearchInput
          id="search"
          label="Day"
          searchList={searchList}
          onFound={noop}
        />,
      )

    it('does not reference title help text when there is no label', () => {
      render(
        <SearchInput
          id="search"
          renderAsTitle
          assistiveText="Pick a day"
          searchList={searchList}
          onFound={noop}
        />,
      )

      expect(screen.getByRole('combobox')).not.toHaveAttribute(
        'aria-describedby',
      )
    })

    it('exposes a combobox that controls a labelled listbox of options', () => {
      renderSearch()
      const input = screen.getByRole('combobox', { name: 'Day' })
      expect(input).toHaveAttribute('aria-autocomplete', 'list')
      expect(input).toHaveAttribute('aria-expanded', 'false')
      expect(input).not.toHaveAttribute('aria-controls')

      fireEvent.click(input)

      const listbox = screen.getByRole('listbox', { name: 'Day' })
      expect(input).toHaveAttribute('aria-expanded', 'true')
      expect(input).toHaveAttribute('aria-controls', listbox.id)
      expect(screen.getAllByRole('option')).toHaveLength(searchList.length)
    })

    it('does not label options with "_list_item"', () => {
      renderSearch()
      fireEvent.click(screen.getByRole('combobox'))

      expect(
        screen.getByRole('option', { name: 'Option 0' }),
      ).toBeInTheDocument()
      expect(screen.queryByLabelText(/_list_item/)).not.toBeInTheDocument()
    })

    it('points aria-activedescendant at the highlighted option while arrowing', () => {
      renderSearch()
      const input = screen.getByRole('combobox')
      fireEvent.click(input)
      expect(input).not.toHaveAttribute('aria-activedescendant')

      fireEvent.keyDown(input, { key: 'ArrowDown' })
      const options = screen.getAllByRole('option')
      expect(input).toHaveAttribute('aria-activedescendant', options[0].id)
      expect(options[0]).toHaveAttribute('aria-selected', 'true')
      expect(options[1]).toHaveAttribute('aria-selected', 'false')

      fireEvent.keyDown(input, { key: 'ArrowDown' })
      expect(input).toHaveAttribute('aria-activedescendant', options[1].id)

      fireEvent.keyDown(input, { key: 'ArrowUp' })
      fireEvent.keyDown(input, { key: 'ArrowUp' })
      expect(input).toHaveAttribute(
        'aria-activedescendant',
        options[options.length - 1].id,
      )
    })

    it('selects the highlighted option on Enter', () => {
      const onFound = vi.fn()
      render(
        <SearchInput label="Day" searchList={searchList} onFound={onFound} />,
      )
      const input = screen.getByRole('combobox')
      fireEvent.click(input)
      fireEvent.keyDown(input, { key: 'ArrowDown' })
      fireEvent.keyDown(input, { key: 'Enter' })

      expect(onFound).toHaveBeenCalledWith('option-0')
    })

    it('closes the list on Escape and reopens it with ArrowDown', () => {
      renderSearch()
      const input = screen.getByRole('combobox')
      fireEvent.click(input)
      fireEvent.keyDown(input, { key: 'ArrowDown' })

      fireEvent.keyDown(input, { key: 'Escape' })
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
      expect(input).toHaveAttribute('aria-expanded', 'false')
      expect(input).not.toHaveAttribute('aria-activedescendant')

      fireEvent.keyDown(input, { key: 'ArrowDown' })
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it.each([
      ['clicking outside', () => fireEvent.click(document.body)],
      [
        'clicking the caret',
        () => fireEvent.click(screen.getByTitle('icon-button')),
      ],
    ])(
      'reopens with no highlighted option after %s closes the list',
      (_, close) => {
        renderSearch()
        const input = screen.getByRole('combobox')
        fireEvent.click(input)
        fireEvent.keyDown(input, { key: 'ArrowDown' })
        expect(input).toHaveAttribute('aria-activedescendant')

        close()
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

        fireEvent.click(screen.getByTitle('icon-button'))
        expect(screen.getByRole('listbox')).toBeInTheDocument()
        expect(input).not.toHaveAttribute('aria-activedescendant')
      },
    )

    it('keeps Escape from closing a surrounding Modal while the list is open', () => {
      const handleClick = vi.fn()
      render(
        <Modal showModal handleClick={handleClick} title="Pick a day">
          <SearchInput label="Day" searchList={searchList} onFound={noop} />
        </Modal>,
      )
      const input = screen.getByRole('combobox')
      fireEvent.click(input)

      fireEvent.keyDown(input, { key: 'Escape' })
      expect(handleClick).not.toHaveBeenCalled()

      fireEvent.keyDown(input, { key: 'Escape' })
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('announces "No results" and survives arrow keys and Enter on an empty list', () => {
      const onFound = vi.fn()
      render(
        <SearchInput label="Day" searchList={searchList} onFound={onFound} />,
      )
      const input = screen.getByRole('combobox')
      fireEvent.click(input)
      expect(screen.getByRole('status')).toBeEmptyDOMElement()

      fireEvent.change(input, { target: { value: 'zzz' } })

      expect(screen.getByRole('status')).toHaveTextContent('No results')
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
      expect(input).toHaveAttribute('aria-expanded', 'false')

      fireEvent.keyDown(input, { key: 'ArrowDown' })
      fireEvent.keyDown(input, { key: 'ArrowUp' })
      fireEvent.keyDown(input, { key: 'Enter' })
      expect(input).not.toHaveAttribute('aria-activedescendant')
      expect(onFound).not.toHaveBeenCalled()
    })

    it('announces the text of a custom notFoundComponent', () => {
      render(
        <SearchInput
          label="Day"
          searchList={searchList}
          onFound={noop}
          notFoundComponent={(searchTerm) => (
            <div>
              <p>
                <span aria-hidden="true">🔍</span>No matches for &apos;
                {searchTerm}&apos;.
              </p>
              <p>
                Try another spelling
                <br />
                or browse the list.
              </p>
            </div>
          )}
        />,
      )
      const input = screen.getByRole('combobox')
      fireEvent.click(input)

      fireEvent.change(input, { target: { value: 'zzz' } })
      expect(screen.getByRole('status')).toHaveTextContent(
        "No matches for 'zzz'. Try another spelling or browse the list.",
      )

      fireEvent.change(input, { target: { value: 'zzzz' } })
      expect(screen.getByRole('status')).toHaveTextContent(
        "No matches for 'zzzz'. Try another spelling or browse the list.",
      )

      fireEvent.change(input, { target: { value: 'Option' } })
      expect(screen.getByRole('status')).toBeEmptyDOMElement()
    })
  })
})
