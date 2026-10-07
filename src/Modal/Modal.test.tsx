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
})
