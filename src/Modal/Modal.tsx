import React, { FC, ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { IconStrict } from '../IconStrict'
import { Text, type TextProps } from '../Text'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

interface IModalContainer {
  // drawer state
  $drawer: boolean
  // modal width
  $width: string
}

export type ModalProps = {
  /**
   * Title of the modal
   * @default "" (empty string)
   *
   * @example
   * ```tsx
   * <Modal title="MultiCar Account" />
   * ```
   *
   * @example
   * ```tsx
   * <Modal title={{ typo: 'hero', children: 'MultiCar Account' }} />
   * ```
   */
  title?: string | TitleProps
  icon?: string
  children?: ReactNode
  rightPanel?: ReactNode
  showModal?: boolean
  handleClick: () => void
  drawer?: boolean
  cross?: boolean
  width?: string
  containerClass?: string
  portalContainer?: Element | DocumentFragment
  closeOnOverlayClick?: boolean
}

export type TitleProps = TextProps

const getDefaultTitleProps = (title: string): TitleProps => ({
  children: title,
  tag: 'h2',
  typo: 'heading-small',
  align: 'left',
})

export const Modal: FC<ModalProps> = ({
  title = '',
  children,
  rightPanel,
  showModal = false,
  handleClick,
  drawer = true,
  cross = true,
  width,
  containerClass,
  portalContainer = document.body,
  closeOnOverlayClick = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useBodyScrollLock({ node: modalRef.current, showModal })

  const isTitleString = typeof title === 'string'
  const titleProps = isTitleString ? getDefaultTitleProps(title) : title

  if (!showModal) return null

  return createPortal(
    <Wrapper ref={modalRef}>
      <Overlay
        onClick={() => closeOnOverlayClick && handleClick()}
        $closeOnOverlayClick={closeOnOverlayClick}
      />
      <Container
        $drawer={drawer}
        $width={width || '460px'}
        className={containerClass}
      >
        <Box
          flex
          alignItems="flex-start"
          justifyContent="space-between"
          mb="8px"
        >
          <TitleElements flex direction="column">
            <Text {...titleProps} />
          </TitleElements>
          <Box flex alignItems="center" gap={'8px'}>
            {rightPanel}
            {cross && (
              <IconStrict
                render="cross"
                title="Close modal"
                backgroundColor="oatmeal"
                handleClick={handleClick}
                size={36}
              />
            )}
          </Box>
        </Box>
        <Box flex direction="column">
          {children}
        </Box>
      </Container>
    </Wrapper>,
    portalContainer,
  )
}

const Wrapper = styled(Box)`
  display: flex;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Overlay = styled.div<{ $closeOnOverlayClick: boolean }>`
  position: fixed;
  background: ${({ theme }) => theme.color.surface.base[900]};
  cursor: ${(props) => (props.$closeOnOverlayClick ? 'pointer' : 'default')};
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Container = styled.div<IModalContainer>(
  ({ $drawer, $width }) => css`
    background: ${({ theme }) => theme.color.background[100]};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: ${$width};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;
    transition: all 0.3s ease-in-out;

    ${$drawer === true &&
    css`
      @media (max-width: 768px) {
        max-width: none;
        border-radius: 16px 16px 0px 0px;
        padding: 10% 24px;
        max-height: 90vh;

        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
      }
    `}
  `,
)

const TitleElements = styled(Box)`
  align-self: center;
`
