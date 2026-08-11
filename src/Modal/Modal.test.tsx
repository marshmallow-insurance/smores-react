import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '../testUtils'
import { Modal } from './Modal'
import { Button } from '../Button'
import { noop } from '../utils/noop'

describe('Modal', () => {
  it('renders correctly with default props', () => {
    const { baseElement } = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correctly with sticky header', () => {
    const { baseElement } = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
        stickyHeader
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correctly with a footer', () => {
    const { baseElement } = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
        footer={
          <>
            <Button secondary handleClick={noop}>
              Find out more
            </Button>
            <Button primary handleClick={noop}>
              Got it
            </Button>
          </>
        }
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correctly with a sticky footer', () => {
    const { baseElement } = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
        footer={
          <Button primary handleClick={noop}>
            Got it
          </Button>
        }
        stickyFooter
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('ignores stickyFooter when no footer is passed', () => {
    const withoutStickyFooter = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
      >
        <div>Modal Content ...</div>
      </Modal>,
    )
    const withStickyFooter = render(
      <Modal
        showModal={true}
        handleClick={noop}
        width={'600px'}
        title={'Modal Title'}
        stickyFooter
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(withStickyFooter.baseElement.innerHTML).toBe(
      withoutStickyFooter.baseElement.innerHTML,
    )
  })

  it('exposes an accessible dialog labelled by the title', () => {
    render(
      <Modal showModal={true} handleClick={noop} title={'Modal Title'}>
        <div>Modal Content ...</div>
      </Modal>,
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAccessibleName('Modal Title')
  })

  it('moves focus into the dialog when it opens', () => {
    render(
      <Modal showModal={true} handleClick={noop} title={'Modal Title'}>
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(screen.getByRole('dialog')).toHaveFocus()
  })

  it('restores focus to the previously focused element on close', () => {
    const trigger = document.createElement('button')
    document.body.appendChild(trigger)
    trigger.focus()

    const { rerender } = render(
      <Modal showModal={true} handleClick={noop} title={'Modal Title'}>
        <div>Modal Content ...</div>
      </Modal>,
    )
    expect(screen.getByRole('dialog')).toHaveFocus()

    rerender(
      <Modal showModal={false} handleClick={noop} title={'Modal Title'}>
        <div>Modal Content ...</div>
      </Modal>,
    )

    expect(trigger).toHaveFocus()
    trigger.remove()
  })

  it('calls handleClick on Escape when closeOnOverlayClick is true', () => {
    const handleClick = vi.fn()
    render(
      <Modal showModal={true} handleClick={handleClick} title={'Modal Title'}>
        <div>Modal Content ...</div>
      </Modal>,
    )

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('ignores Escape when closeOnOverlayClick is false', () => {
    const handleClick = vi.fn()
    render(
      <Modal
        showModal={true}
        handleClick={handleClick}
        title={'Modal Title'}
        closeOnOverlayClick={false}
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(handleClick).not.toHaveBeenCalled()
  })

  it('wraps Tab focus between the first and last focusable elements', () => {
    render(
      <Modal
        showModal={true}
        handleClick={noop}
        title={'Modal Title'}
        footer={
          <Button primary handleClick={noop}>
            Got it
          </Button>
        }
      >
        <div>Modal Content ...</div>
      </Modal>,
    )

    const closeButton = screen.getByRole('button', { name: 'Close modal' })
    const gotItButton = screen.getByRole('button', { name: 'Got it' })

    gotItButton.focus()
    expect(gotItButton).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Tab' })
    expect(closeButton).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(gotItButton).toHaveFocus()
  })
})
