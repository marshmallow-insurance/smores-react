import React, { useState, FC } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'

type ModalProps = {
  title?: string,
  body?: string
}

export const Modal: FC<ModalProps> = ({
  title = '',
  body = ''
}) => {
  const [showModal, setShowModal] = useState(false)

  const toggleOpen = () => {
    setShowModal(!showModal)
  }

  return (
    <Wrapper>
    <Overlay />
    <Container>
      <Box flex alignItems="center" justifyContent="space-between">
        <Text tag="h2" typo="header-small" align="left">{title}</Text>
        <IconContainer onClick={toggleOpen}>
          <Icon render="cross" color="blue7" size={32} />
        </IconContainer>
      </Box>
      <Text tag="p" typo="desc-small" color="grey8" align="left">
        {body}
      </Text>

    </Container>
  </Wrapper>
)}

const Wrapper = styled.div`
  position: relative;
`

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
  left: calc(50%);
  top: calc(50%);
  border: 1px solid ${theme.colors.grey3};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px;
`

const IconContainer = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`


// interface ICard {
//   maxWidth: string
//   marginX: string
//   marginY: string
//   narrow: boolean
//   wide: boolean
// }

// type Props = {
//   children: ReactNode
//   className?: string
//   /** margin */
//   maxWidth?: string
//   /** left-right margin */
//   marginX?: string
//   /** top-bottom margin */
//   marginY?: string
//   /** Narrow padding */
//   narrow?: boolean
//   /** Wide padding */
//   wide?: boolean
// }

// export const Modal: FC<Props> = ({
//   children,
//   className = '',
//   maxWidth = '',
//   marginX = '',
//   marginY = '',
//   narrow = false,
//   wide = false,
// }) => (
//   <Container
//     className={className}
//     maxWidth={maxWidth}
//     marginX={marginX}
//     marginY={marginY}
//     narrow={narrow}
//     wide={wide}
//   >
//     {children}
//   </Container>
// )

// const Container = styled.div<ICard>`
//   background: ${theme.colors.white};
//   border: 1px solid ${theme.colors.grey2};
//   box-sizing: border-box;
//   box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.08);
//   border-radius: 8px;

//   max-width: ${p => p.maxWidth};
//   margin-top: ${p => p.marginY};
//   margin-right: ${p => p.marginX};
//   margin-bottom: ${p => p.marginY};
//   margin-left: ${p => p.marginX};

//   padding: ${p => (p.narrow ? '16px' : p.wide ? '32px' : '24px')};

//   @media (min-width: 768px) {
//     padding: ${p => (p.narrow ? '24px' : p.wide ? '48px' : '32px')};
//   }
// `
