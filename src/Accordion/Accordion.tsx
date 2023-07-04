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
  filledBackground?: boolean
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
  filledBackground,
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
    <Wrapper
      borderTop={borderTop}
      fullBorder={fullBorder}
      {...marginProps}
      filledBackground={filledBackground}
    >
      <TopContainer
        flex
        alignItems="center"
        justifyContent="space-between"
        onClick={handleToggle}
        py="16px"
        pr="16px"
        pl={px}
      >
        <TitleContainer>
          <Text tag="h2" typo="headline-regular" color="liquorice">
            {title}
          </Text>
          {subTitle && (
            <Text tag="label" color="liquorice" typo="label" mt={{ custom: 4 }}>
              {subTitle}
            </Text>
          )}
        </TitleContainer>

        <CaretIcon
          render="caret"
          size={24}
          color="marzipan"
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
  filledBackground?: boolean
}

const Wrapper = styled(Box)<Omit<IAccordion, 'isOpen'>>(
  ({ borderTop, fullBorder, filledBackground }) => css`
    border-bottom: 1px solid ${theme.colors.oatmeal};
    ${borderTop && `border-top: 1px solid ${theme.colors.oatmeal};`}

    ${fullBorder &&
    css`
      border: 1px solid ${theme.colors.oatmeal};
      border-radius: 16px;
    `}

    ${filledBackground &&
    css`
      background: ${theme.colors.custard};
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
