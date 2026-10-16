import { beforeEach, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { noop } from '../utils/noop'
import { SearchInput } from './SearchInput'

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
})
