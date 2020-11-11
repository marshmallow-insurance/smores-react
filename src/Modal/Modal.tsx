import React, { ReactNode, FC } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../theme'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'

interface IModal {
  // showModal state
  showModal: boolean
}

type ModalProps = {
  title?: string,
  body?: string,
  children?: ReactNode,
  showModal?: boolean,
  handleClick: () => void
}

export const Modal: FC<ModalProps> = ({
  title = '',
  body = '',
  children = '',
  showModal = false,
  handleClick,
}) => {

  return (
    <Wrapper showModal={showModal}>
      <Overlay />
      <Container>
        <Box flex alignItems="center" justifyContent="space-between">
          <Text tag="h2" typo="header-small" align="left">{title}</Text>
          <IconContainer onClick={handleClick}>
            <Icon render="cross" color="blue7" size={32} />
          </IconContainer>
        </Box>
        <Text tag="p" typo="desc-small" color="grey8" align="left">
          {children}
        </Text>
      </Container>
  </Wrapper>
)}

const Wrapper = styled(Box)<IModal>(
  ({showModal}) => css`
    display: ${showModal ? 'block' : 'none'};
    position: relative;
    height: calc(100vh);
    width: 100%;
  `
)

const Overlay = styled.div`
  position: absolute;
  background: ${theme.colors.blue7};
  opacity: 0.4;
  height: calc(100vh);
  width: 100%;
`

const Container = styled.div`
  background: ${theme.colors.white};
  z-index: 999;
  position: absolute;
  border: 1px solid ${theme.colors.grey3};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px;
  max-width: 456px;
  left: calc(50% - 460px / 2);
  top: calc(50% - 265px / 2 + 0.5px);
`

const IconContainer = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
