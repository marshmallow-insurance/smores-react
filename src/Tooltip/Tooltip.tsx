import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../Text'
import { theme } from '../theme'

type Position = 'top' | 'bottom' | 'left' | 'right'
type Size = 'small' | 'large'
type ArrowPosition = 'left' | 'right' | 'center' | 'top' | 'bottom'

export interface TooltipProps {
  children: ReactNode
  title?: string
  content: string | ReactNode
  position: Position
  underline?: boolean
  size?: Size
  arrowPosition?: ArrowPosition
  shadow?: boolean
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  content,
  position = 'top',
  underline = false,
  size = 'small',
  arrowPosition = 'center',
  shadow = false,
}) => {
  const tipContainer = useRef<HTMLDivElement>(null)
  const [tooltipPosition, setTooltipPosition] = useState<Position>(position)

  const checkInbounds = (element: DOMRect) =>
    element.top >= 0 &&
    element.left >= 0 &&
    element.bottom <= window.innerHeight &&
    element.right <= window.innerWidth

  const handleTipViewport = useCallback(() => {
    const dimensions = tipContainer.current?.getBoundingClientRect()

    if (!dimensions) return
    if (checkInbounds(dimensions)) return

    switch (tooltipPosition) {
      case 'top':
        setTooltipPosition('bottom')
        break
      case 'bottom':
        setTooltipPosition('top')
        return
      case 'left':
        setTooltipPosition('right')
        return
      case 'right':
        setTooltipPosition('left')
        return
      default:
        setTooltipPosition('top')
        return
    }
  }, [tipContainer, tooltipPosition])

  useEffect(() => {
    window.addEventListener('resize', handleTipViewport)
    window.addEventListener('scroll', handleTipViewport)
    return () => {
      window.removeEventListener('resize', handleTipViewport)
      window.removeEventListener('scroll', handleTipViewport)
    }
  }, [handleTipViewport])

  return (
    <Container underline={underline}>
      <span>{children}</span>
      <Tip
        className="tooltip"
        position={tooltipPosition}
        size={size}
        arrowPosition={arrowPosition}
        shadow={shadow}
        ref={tipContainer}
      >
        {title && (
          <Text tag="h5" typo="desc-medium" color="secondary">
            {title}
          </Text>
        )}
        {(typeof content === 'string' && (
          <Text typo="desc-light" color="secondary">
            {content}
          </Text>
        )) ||
          content}
      </Tip>
    </Container>
  )
}

export const Container = styled.div<{ underline: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ underline }) =>
    underline &&
    css`
      border-bottom: 1px dashed ${theme.colors.primary};
    `}

  > span:hover + .tooltip {
    opacity: 1;
  }
`

const arrowPaddingSize = 18
const arrowInset = 26
const arrowCenterPosition = 'calc(50% - 12px)'
const arrowPadding = `calc(100% + ${arrowPaddingSize}px);`
const calculateTipPosition = `calc(50% - ${
  arrowPaddingSize / 2 + arrowInset
}px);`

const handleTipPosition = (arrowPosition: ArrowPosition) => {
  switch (arrowPosition) {
    case 'left':
      return css`
        left: ${calculateTipPosition};
      `
    case 'right':
      return css`
        right: ${calculateTipPosition};
      `
    case 'top':
      return css`
        top: ${calculateTipPosition};
      `
    case 'bottom':
      return css`
        bottom: ${calculateTipPosition};
      `
    default:
      return 'calc(100% + 18px)'
  }
}

const handleHorizontalArrowPosition = (arrowPosition: ArrowPosition) => {
  switch (arrowPosition) {
    case 'left':
      return css`
        left: ${arrowInset}px;
      `
    case 'right':
      return css`
        right: ${arrowInset}px;
      `
    default:
      return css`
        left: ${arrowCenterPosition};
      `
  }
}

const handleVerticalArrowPosition = (arrowPosition: ArrowPosition) => {
  switch (arrowPosition) {
    case 'top':
      return css`
        top: ${arrowInset}px;
      `
    case 'bottom':
      return css`
        bottom: ${arrowInset}px;
      `
    default:
      return css`
        top: ${arrowCenterPosition};
      `
  }
}

const top = css<{ arrowPosition: ArrowPosition }>`
  bottom: ${arrowPadding};
  ${({ arrowPosition }) => handleTipPosition(arrowPosition)};

  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({ arrowPosition }) => handleHorizontalArrowPosition(arrowPosition)}
  }
`

const bottom = css<{ arrowPosition: ArrowPosition }>`
  top: ${arrowPadding};
  ${({ arrowPosition }) => handleTipPosition(arrowPosition)};

  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({ arrowPosition }) => handleHorizontalArrowPosition(arrowPosition)}
  }
`

const left = css<{ arrowPosition: ArrowPosition }>`
  right: ${arrowPadding};

  ${({ arrowPosition }) => handleTipPosition(arrowPosition)};
  &:before {
    right: -12px;
    transform: rotate(180deg);
    ${({ arrowPosition }) => handleVerticalArrowPosition(arrowPosition)}
  }
`
const right = css<{ arrowPosition: ArrowPosition }>`
  left: ${arrowPadding};

  ${({ arrowPosition }) => handleTipPosition(arrowPosition)};
  &:before {
    ${({ arrowPosition }) => handleVerticalArrowPosition(arrowPosition)}
    left: -12px;
  }
`

export const Tip = styled.div<{
  position: Position
  size: Size
  arrowPosition: ArrowPosition
  shadow: boolean
}>`
  position: absolute;
  margin: auto;
  background: ${theme.colors.background};
  width: ${({ size }) => (size === 'small' ? '201px' : '237px')};
  padding: 16px 12px 20px;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${({ position }) => position === 'top' && top}
  ${({ position }) => position === 'bottom' && bottom}
	${({ position }) => position === 'left' && left}
	${({ position }) => position === 'right' && right}
	${({ shadow }) =>
    shadow &&
    css`
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${theme.colors.background} transparent transparent;
    position: absolute;
  }
`
