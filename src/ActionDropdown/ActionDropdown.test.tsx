import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { ActionDropdown } from './ActionDropdown'
import { ActionListItem } from './List'
import { noop } from '../utils/noop'
import { Modal } from '../Modal'

const options: ActionListItem[] = [
  {
    label: 'Default grey',
    value: 'DEFAULT',
    bgColor: 'color.surface.base.100',
    textColor: 'color.text.base',
  },
  {
    label: 'Brand',
    value: 'ACTION',
    bgColor: 'color.surface.brand.300',
    textColor: 'color.text.base',
  },
]

describe('ActionDropdown', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <ActionDropdown
        value={{ label: 'Default grey', value: 'DEFAULT' }}
        list={options}
        onSelect={noop}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('positions the menu with position: fixed, so a scrolling parent does not clip it', () => {
    const { container } = render(
      <ActionDropdown
        value={{ label: 'Default grey', value: 'DEFAULT' }}
        list={options}
        onSelect={noop}
      />,
    )
    fireEvent.click(screen.getByRole('combobox'))

    const listbox = screen.getByRole('listbox')
    expect(listbox).toHaveStyle({ position: 'fixed' })
    // In the DOM next to the trigger rather than in a portal
    expect(container).toContainElement(listbox)
  })

  describe('accessibility', () => {
    it('exposes a labelled combobox that opens a listbox', () => {
      render(
        <ActionDropdown
          label="Status"
          value={{ label: 'Default grey', value: 'DEFAULT' }}
          list={options}
          onSelect={noop}
        />,
      )
      const trigger = screen.getByRole('combobox', { name: /Status/ })

      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
      expect(trigger).toHaveAttribute('aria-expanded', 'false')

      fireEvent.click(trigger)

      expect(trigger).toHaveAttribute('aria-expanded', 'true')
      expect(screen.getByRole('listbox')).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: 'Default grey' }),
      ).toHaveAttribute('aria-selected', 'true')
    })

    it('gives the trigger an accessible name when there is no label', () => {
      render(
        <ActionDropdown
          value={{ label: 'Default grey', value: 'DEFAULT' }}
          list={options}
          onSelect={noop}
        />,
      )

      expect(
        screen.getByRole('combobox', { name: 'Select an option' }),
      ).toBeInTheDocument()
    })

    it('opens with the keyboard and selects an option with Enter', () => {
      const onSelect = vi.fn()
      render(
        <ActionDropdown
          value={{ label: 'Default grey', value: 'DEFAULT' }}
          list={options}
          onSelect={onSelect}
        />,
      )
      const trigger = screen.getByRole('combobox')

      fireEvent.keyDown(trigger, { key: 'ArrowDown' })
      expect(trigger).toHaveAttribute('aria-expanded', 'true')

      fireEvent.keyDown(screen.getByRole('listbox'), { key: 'ArrowDown' })
      fireEvent.keyDown(screen.getByRole('listbox'), { key: 'Enter' })

      expect(onSelect).toHaveBeenCalledWith(options[1])
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })

    it('closes on Escape and returns focus to the trigger', () => {
      render(
        <ActionDropdown
          value={{ label: 'Default grey', value: 'DEFAULT' }}
          list={options}
          onSelect={noop}
        />,
      )
      const trigger = screen.getByRole('combobox')

      trigger.focus()
      fireEvent.click(trigger)
      fireEvent.keyDown(screen.getByRole('listbox'), { key: 'Escape' })

      expect(trigger).toHaveAttribute('aria-expanded', 'false')
      expect(trigger).toHaveFocus()
    })

    it('keeps Escape from closing a surrounding Modal while the menu is open', () => {
      const handleClick = vi.fn()
      render(
        <Modal showModal handleClick={handleClick} title="Pick a status">
          <ActionDropdown
            value={{ label: 'Default grey', value: 'DEFAULT' }}
            list={options}
            onSelect={noop}
          />
        </Modal>,
      )
      const trigger = screen.getByRole('combobox')

      fireEvent.click(trigger)
      fireEvent.keyDown(screen.getByRole('listbox'), { key: 'Escape' })
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
      expect(handleClick).not.toHaveBeenCalled()

      // Escape on the trigger closes the menu too, without closing the Modal
      fireEvent.click(trigger)
      fireEvent.keyDown(trigger, { key: 'Escape' })
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
      expect(handleClick).not.toHaveBeenCalled()

      // With the menu closed, Escape closes the Modal
      fireEvent.keyDown(trigger, { key: 'Escape' })
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('shows a focus ring on the trigger for keyboard focus', () => {
      render(
        <ActionDropdown
          value={{ label: 'Default grey', value: 'DEFAULT' }}
          list={options}
          onSelect={noop}
        />,
      )
      const trigger = screen.getByRole('combobox')

      expect(trigger).toHaveStyleRule(
        'outline',
        expect.stringContaining('2px'),
        {
          modifier: ':focus-visible',
        },
      )
    })

    it('closes when clicking outside', () => {
      render(
        <div>
          <span>Outside</span>
          <ActionDropdown
            value={{ label: 'Default grey', value: 'DEFAULT' }}
            list={options}
            onSelect={noop}
          />
        </div>,
      )
      const trigger = screen.getByRole('combobox')

      fireEvent.click(trigger)
      fireEvent.pointerDown(document.body)
      fireEvent.mouseDown(document.body)

      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })
  })
})
