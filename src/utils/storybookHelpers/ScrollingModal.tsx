import { FC, ReactNode, useState } from 'react'
import { Button } from '../../Button'
import { Modal } from '../../Modal'
import { Text } from '../../Text'

type Props = {
  children: ReactNode
}

/**
 * An open Modal whose content scrolls, with `children` placed after a long
 * block of text and just before the end. Scrolled to the bottom, `children`
 * sit close to the bottom edge of the viewport, where a menu that opens below
 * them would be clipped by the Modal. Once closed, it can be opened again
 * with a button.
 */
export const ScrollingModal: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(true)

  return (
    <>
      {!showModal && (
        <Button onClick={() => setShowModal(true)}>Open modal</Button>
      )}
      <Modal
        title="Scrolling modal"
        showModal={showModal}
        handleClick={() => setShowModal(false)}
        stickyHeader
      >
        {Array.from({ length: 10 }, (_, index) => (
          <Text key={index} mb="space.200">
            The content of this modal is longer than the screen, so the modal
            scrolls. Scroll down to the field at the bottom.
          </Text>
        ))}
        {children}
        <Text mt="space.200">The end of the modal.</Text>
      </Modal>
    </>
  )
}

/**
 * Scrolls the modal that contains `element` to the bottom, and waits for the
 * scroll event, so that it can't close a menu that is opened straight after
 */
export const scrollModalToBottom = async (element: HTMLElement) => {
  const scrollArea = element.closest('[role="dialog"]')?.firstElementChild
  if (!scrollArea) return
  scrollArea.scrollTop = scrollArea.scrollHeight
  await new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve)),
  )
}
