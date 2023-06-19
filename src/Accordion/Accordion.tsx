import React, { FC, ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { theme } from '../theme'
import { Text } from '../Text'
import { MarginProps } from '../utils/space'

export type AccordionProps = {
  title: string
  subTitle?: string
  borderTop?: boolean
  fullBorder?: boolean
  onToggle?: (isOpen: boolean) => void
  children: ReactNode
  defaultIsOpen?: boolean
} & MarginProps

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  onToggle,
  defaultIsOpen = false,
  borderTop = false,
  subTitle,
  fullBorder = false,
  ...marginProps
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const px = fullBorder ? '16px' : '0'

  const handleToggle = () => {
    const nextOpenState = !isOpen
    onToggle?.(nextOpenState)
    setIsOpen(nextOpenState)
  }

  return (
    <Wrapper borderTop={borderTop} fullBorder={fullBorder} {...marginProps}>
      <TopContainer
        flex
        alignItems="center"
        justifyContent="space-between"
        onClick={handleToggle}
        py={fullBorder ? { custom: 20 } : '16px'}
        px={px}
      >
        <TitleContainer>
          <Text tag="h2" typo="headline-regular">
            {title}
          </Text>
          {subTitle && (
            <Text tag="label" color="sesame" typo="label">
              {subTitle}
            </Text>
          )}
        </TitleContainer>

        <CaretIcon
          render="caret"
          size={24}
          color="liquorice"
          isOpen={isOpen}
          borderTop={borderTop}
        />
      </TopContainer>
      {isOpen && (
        <Box pt="12px" pb="16px" px={px}>
          {children}
        </Box>
      )}
    </Wrapper>
  )
}

interface IAccordion {
  isOpen: boolean
  borderTop?: boolean
  fullBorder?: boolean
}

const Wrapper = styled(Box)<Omit<IAccordion, 'isOpen'>>(
  ({ borderTop, fullBorder }) => css`
    border-bottom: 1px solid ${theme.colors.chia};
    ${borderTop && `border-top: 1px solid ${theme.colors.chia};`}

    ${fullBorder &&
    css`
      border: 1px solid ${theme.colors.chia};
      border-radius: 8px;
      margin-bottom: 14px;
    `}
  `,
)

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const TopContainer = styled(Box)`
  cursor: pointer;
`

const CaretIcon = styled(Icon)<IAccordion>(
  ({ isOpen }) => css`
    transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.6s ease;
  `,
)
