import { expect, it } from 'vitest'
import { render } from '../testUtils'
import { Modal } from './Modal'
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
})
