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
import { useEventListener } from '../hooks'
import { theme } from '../theme'

type Position = 'top' | 'bottom' | 'left' | 'right'
type ArrowPosition = Position | 'center'

export interface TooltipProps {
  children: ReactNode
  content: string | ReactNode
  position: Position
  maxWidth?: number
  title?: string
  underline?: boolean
  fallbackStyle?: boolean
  defaultArrowPosition?: ArrowPosition
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  content,
  maxWidth = 500,
  underline = false,
  fallbackStyle = false,
  defaultArrowPosition = 'center',
}) => {
  const tipContainer = useRef<HTMLDivElement>(null)
  const documentRef = useRef<Document>(document)
  const [showTip, setShowTip] = useState<boolean>(false)
  const [tooltipPosition, setTooltipPosition] = useState<Position>('top')
  const [arrowPosition, setArrowPosition] =
    useState<ArrowPosition>(defaultArrowPosition)

  const checkInbounds = (element: DOMRect): boolean =>
    element.top >= 0 &&
    element.left >= 0 &&
    element.bottom <= window.innerHeight &&
    element.right <= window.innerWidth

  const handleTipViewport = useCallback(() => {
    const shouldChangeXAxis =
      tooltipPosition === 'left' || tooltipPosition === 'right'
    const shouldChangeYAxis =
      tooltipPosition === 'top' || tooltipPosition === 'bottom'

    const handleArrowAxisChange = () => {
      if (arrowPosition === 'left') {
        setArrowPosition('top')
      }
      if (arrowPosition === 'right') {
        setArrowPosition('bottom')
      }

      if (arrowPosition === 'top') {
        setArrowPosition('left')
      }
      if (arrowPosition === 'bottom') {
        setArrowPosition('right')
      }
    }

    const dimensions = tipContainer.current?.getBoundingClientRect()

    if (!dimensions) return
    if (checkInbounds(dimensions)) return

    // If in bounds but not defaulted to top; default
    if (dimensions.top >= 0 && tooltipPosition !== 'top') {
      setArrowPosition(defaultArrowPosition)
      setTooltipPosition('top')
      return
    }
    // if top out of bounds
    if (dimensions.top < 0) {
      shouldChangeXAxis && handleArrowAxisChange()
      setTooltipPosition('bottom')
      return
    }
    // if right out of bounds
    if (dimensions.right > window.innerWidth) {
      shouldChangeYAxis && handleArrowAxisChange()
      setTooltipPosition('left')
      return
    }
    // if left out of bounds
    if (dimensions.left < 0) {
      shouldChangeYAxis && handleArrowAxisChange()
      setTooltipPosition('right')
      return
    }
    // If bottom out of bounds
    if (dimensions.bottom > window.innerHeight) {
      shouldChangeXAxis && handleArrowAxisChange()
      setTooltipPosition('top')
      return
    }
  }, [tipContainer, tooltipPosition, arrowPosition])

  useEffect(() => {
    handleTipViewport()
  }, [])

  useEventListener({
    eventName: 'resize',
    callback: handleTipViewport,
    ref: documentRef,
  })

  useEventListener({
    eventName: 'scroll',
    callback: handleTipViewport,
    ref: documentRef,
  })

  return (
    <Container>
      <UnderLinedText
        underline={underline}
        cursor="pointer"
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
      >
        {children}
      </UnderLinedText>
      <TipWrapper>
        <Tip
          className="tooltip"
          showTip={showTip}
          position={tooltipPosition}
          arrowPosition={arrowPosition}
          ref={tipContainer}
          maxWidth={maxWidth}
          fallbackStyle={fallbackStyle}
        >
          {title && (
            <Text
              tag="h5"
              typo="desc-medium"
              color={fallbackStyle ? 'cream' : 'liquorice'}
            >
              {title}
            </Text>
          )}
          {(typeof content === 'string' && (
            <Text
              typo="desc-light"
              color={fallbackStyle ? 'cream' : 'liquorice'}
            >
              {content}
            </Text>
          )) ||
            content}
        </Tip>
      </TipWrapper>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:hover + .tooltip {
    opacity: 1;
  }
`

const UnderLinedText = styled(Text)<{ underline: boolean }>`
  ${({ underline }) =>
    underline &&
    css`
      border-bottom: 1px dashed ${theme.colors.marshmallowPink};
    `}
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
    right: -11px;
    transform: rotate(180deg);
    ${({ arrowPosition }) => handleVerticalArrowPosition(arrowPosition)}
  }
`
const right = css<{ arrowPosition: ArrowPosition }>`
  left: ${arrowPadding};

  ${({ arrowPosition }) => handleTipPosition(arrowPosition)};
  &:before {
    ${({ arrowPosition }) => handleVerticalArrowPosition(arrowPosition)}
    left: -11px;
  }
`

const TipWrapper = styled.div`
  position: fixed;
  pointer-events: none;
`

export const Tip = styled.div<{
  showTip: boolean
  position: Position
  arrowPosition: ArrowPosition
  maxWidth?: number
  fallbackStyle?: boolean
}>`
  position: absolute;
  margin: auto;
  background: ${theme.colors.custard};
  padding: 16px 12px 20px;
  border-radius: 16px;
  max-width: 450px;
  opacity: ${({ showTip }) => (showTip ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  cursor: default;
  z-index: 10;

  left: 50%;
  transform: translateX(-50%);

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({ maxWidth }) => maxWidth && -maxWidth / 2 + 'px'};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth + 'px'};

  ${({ position }) => position === 'top' && top}
  ${({ position }) => position === 'bottom' && bottom}
	${({ position }) => position === 'left' && left}
	${({ position }) => position === 'right' && right}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${theme.colors.custard} transparent transparent;
    position: absolute;
  }

  ${({ fallbackStyle }) =>
    fallbackStyle &&
    css`
      background: ${theme.colors.feijoa};
      &:before {
        border-color: transparent ${theme.colors.feijoa} transparent transparent;
      }
    `};
`
