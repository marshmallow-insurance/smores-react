import { beforeEach, expect, it, vi } from 'vitest'
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

const openResults = (container: HTMLElement) => {
  const input = container.querySelector('input')!
  fireEvent.click(input)
  return input
}

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
  })
})
