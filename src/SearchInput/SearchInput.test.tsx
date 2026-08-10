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

describe('SearchInput', () => {
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
