import { expect, it } from 'vitest'
import { render, screen } from '../testUtils'
import { Modal, ModalProps } from './Modal'
import { noop } from '../utils/noop'

const renderModal = (props: Partial<ModalProps> = {}) =>
  render(
    <Modal showModal={true} handleClick={noop} title={'Modal Title'} {...props}>
      <div>Modal Content ...</div>
    </Modal>,
  )

const getHeader = () =>
  screen.getByRole('heading', { name: 'Modal Title' }).parentElement
    ?.parentElement

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

  it('only makes the header sticky when stickyHeader is set', () => {
    const { unmount } = renderModal()
    expect(getHeader()).not.toHaveStyleRule('position', 'sticky')
    unmount()

    renderModal({ stickyHeader: true })
    expect(getHeader()).toHaveStyleRule('position', 'sticky')
  })

  it('renders the footer, sticky only when stickyFooter is set', () => {
    const { unmount } = renderModal({ footer: <button>Got it</button> })
    const footer = screen.getByRole('button', { name: 'Got it' }).parentElement
    expect(footer).not.toHaveStyleRule('position', 'sticky')
    unmount()

    renderModal({ footer: <button>Got it</button>, stickyFooter: true })
    expect(
      screen.getByRole('button', { name: 'Got it' }).parentElement,
    ).toHaveStyleRule('position', 'sticky')
  })

  it('locks body scroll while open and unlocks it on close', () => {
    const { rerender } = renderModal({ showModal: false })
    expect(document.body.style.overflow).not.toBe('hidden')

    rerender(
      <Modal showModal={true} handleClick={noop}>
        <div>Modal Content ...</div>
      </Modal>,
    )
    expect(document.body.style.overflow).toBe('hidden')

    rerender(
      <Modal showModal={false} handleClick={noop}>
        <div>Modal Content ...</div>
      </Modal>,
    )
    expect(document.body.style.overflow).not.toBe('hidden')
    expect(document.body.style.top).toBe('')
  })

  it("keeps an open modal's lock when another modal unmounts", () => {
    renderModal()
    const closedModal = render(
      <Modal showModal={false} handleClick={noop}>
        <div>Other modal</div>
      </Modal>,
    )

    closedModal.unmount()
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('keeps the lock and scroll offset until the last stacked modal closes', () => {
    const bottomModal = renderModal()
    const topModal = renderModal({ title: 'Top modal' })
    expect(document.body.style.top).toBe('0px')

    topModal.unmount()
    expect(document.body.style.overflow).toBe('hidden')
    expect(document.body.style.top).toBe('0px')

    bottomModal.unmount()
    expect(document.body.style.overflow).not.toBe('hidden')
    expect(document.body.style.top).toBe('')
  })

  it('unlocks body scroll on unmount', () => {
    const { unmount } = renderModal()
    expect(document.body.style.overflow).toBe('hidden')

    unmount()
    expect(document.body.style.overflow).not.toBe('hidden')
  })
})
