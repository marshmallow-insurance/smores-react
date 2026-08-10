import { expect, it } from 'vitest'
import { render } from '../testUtils'
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
})
