import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { theme } from '../theme'
import { createPortal } from 'react-dom'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import useBodyScrollLock from './useBodyScrollLock'

interface IModalWrapper {
  // showModal state
  showModal: boolean
}
interface IModalContainer {
  // drawer state
  drawer: boolean
  // modal width
  width: string
  // showModal state
  showModal: boolean
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
  icon = '',
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
  const hasOpened = useRef(false)
  const [opened, setOpened] = useState(false)

  useBodyScrollLock({ node: modalRef.current, showModal })

  useEffect(() => {
    if (modalRef.current === null) return

    if (!hasOpened.current && showModal) {
      hasOpened.current = true
      setOpened(true)
    }
  }, [showModal])

  return createPortal(
    <Wrapper
      showModal={showModal}
      ref={modalRef}
      className={opened ? 'opened' : ''}
    >
      <Overlay showModal={showModal} onClick={handleClick} />
      <Container
        showModal={showModal}
        drawer={drawer}
        width={width || '460px'}
        className={containerClass}
      >
        <Box
          flex
          alignItems="flex-start"
          justifyContent="space-between"
          mb="8px"
        >
          <TitleElements flex direction="column">
            {icon !== '' && (
              <Icon render={icon} size={42} color="secondary" mb="16px" />
            )}
            <Text tag="h2" typo="heading-small" align="left">
              {title}
            </Text>
          </TitleElements>
          {cross && (
            <IconContainer onClick={handleClick}>
              <Icon render="cross" color="secondary" size={32} />
            </IconContainer>
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

const fadeIn = keyframes`
 0% { opacity:0; }
 100% { opacity: 0.4; }
`
const fadeInAnimation = css`
  ${fadeIn} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`
const fadeOut = keyframes`
 0% { opacity: 0.4; }
 100% { opacity:0; }
`
const fadeOutAnimation = css`
  ${fadeOut} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`
const scaleUp = keyframes`
 0% { transform: scale(0.8) translateY(1000px); opacity: 0; }
 100% { transform: scale(1) translateY(0px); opacity: 1; }
`
const scaleUpAnimation = css`
  ${scaleUp} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`
const scaleDown = keyframes`
 0% { transform: scale(1) translateY(0px); opacity: 1; }
 100% { transform: scale(0.8) translateY(1000px); opacity: 0; }
`
const scaleDownAnimation = css`
  ${scaleDown} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards
`
const quickScaleDown = keyframes`
 0% {  transform: scale(1); }
 99.9% {  transform: scale(1); }
 100% {  transform: scale(); }
`
const quickScaleDownAnimation = css`
  ${quickScaleDown} 0s .5s linear forwards
`

const Wrapper = styled(Box)<IModalWrapper>`
  display: flex;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  animation: ${({ showModal }) => (showModal ? '' : quickScaleDownAnimation)};

  &.opened {
    transform: scale(1);
  }
`

const Overlay = styled.div<IModalWrapper>`
  position: fixed;
  background: ${theme.colors.secondary};
  cursor: pointer;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${({ showModal }) =>
    showModal ? fadeInAnimation : fadeOutAnimation};
`

const Container = styled.div<IModalContainer>`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.outline};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  max-width: ${({ width }) => width};
  position: fixed;
  max-height: calc(100vh - 64px);
  overflow: auto;
  opacity: 0;

  animation: ${({ showModal }) =>
    showModal ? scaleUpAnimation : scaleDownAnimation};

  ${({ drawer }) =>
    drawer === true &&
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
`

const IconContainer = styled.div`
  cursor: pointer;
  background: ${theme.colors.background};
  border-radius: 32px;
  margin-right: 8px;

  &:hover {
    background: ${theme.colors.background};
  }

  svg {
    padding: 3px;
  }
`

const TitleElements = styled(Box)`
  align-self: center;
`
