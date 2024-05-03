import React, { FC, ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'
import { theme } from '../theme'

import { Box } from '../Box'
import { IconStrict } from '../IconStrict'
import { Text } from '../Text'
import { useBodyScrollLock } from './useBodyScrollLock'

interface IModalWrapper {
  // showModal state
  $showModal: boolean
}
interface IModalContainer {
  // drawer state
  $drawer: boolean
  // modal width
  $width: string
}

export type ModalProps = {
  title?: string
  icon?: string
  children?: ReactNode
  showModal?: boolean
  handleClick: () => void
  drawer?: boolean
  cross?: boolean
  width?: string
  containerClass?: string
  portalContainer?: Element | DocumentFragment
}

export const Modal: FC<ModalProps> = ({
  title = '',
  children,
  showModal = false,
  handleClick,
  drawer = true,
  cross = true,
  width,
  containerClass,
  portalContainer = document.body,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useBodyScrollLock({ node: modalRef.current, showModal })

  return createPortal(
    <Wrapper $showModal={showModal} ref={modalRef}>
      <Overlay onClick={handleClick} />
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
            <Text tag="h2" typo="heading-small" align="left">
              {title}
            </Text>
          </TitleElements>
          {cross && (
            <IconStrict
              render="cross"
              backgroundColor="oatmeal"
              handleClick={handleClick}
              size={36}
            />
          )}
        </Box>
        <Box flex direction="column">
          {children}
        </Box>
      </Container>
    </Wrapper>,
    portalContainer,
  )
}

const Wrapper = styled(Box)<IModalWrapper>(
  ({ $showModal }) => css`
    display: ${$showModal ? 'flex' : 'none'};
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
)

const Overlay = styled.div`
  position: fixed;
  background: ${theme.colors.liquorice};
  cursor: pointer;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Container = styled.div<IModalContainer>(
  ({ $drawer, $width }) => css`
    background: ${theme.colors.coconut};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: ${$width};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;

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
