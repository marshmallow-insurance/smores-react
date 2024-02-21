import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { Box } from '../Box'
import { Text } from '../Text'
import { useEventListener } from '../hooks'
import { theme } from '../theme'
import { debounce } from '../utils/debounce'

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
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  content,
  position = 'top',
  maxWidth = 500,
  underline = false,
  fallbackStyle = false,
}) => {
  const documentRef = useRef<Document>(document)
  const tipContainer = useRef<HTMLDivElement>(null)
  const [showTip, setShowTip] = useState<boolean>(false)
  const [tooltipPosition, setTooltipPosition] = useState<Position>(position)
  const [childEl, setChildEl] = useState<HTMLElement | null>(null)
  const [tooltipCoords, setTooltipCoords] = useState({ top: 0, left: 0 })

  const randomId = uuidv4()

  const checkInbounds = (element: DOMRect): boolean =>
    element.top >= 0 &&
    element.left >= 0 &&
    element.bottom <= window.innerHeight &&
    element.right <= window.innerWidth

  const handleTipViewport = useCallback(() => {
    const dimensions = tipContainer.current?.getBoundingClientRect()

    if (!dimensions) return
    if (checkInbounds(dimensions)) return

    // If in bounds but not defaulted to top; default
    if (dimensions.top >= 0 && tooltipPosition !== 'top') {
      setTooltipPosition('top')
      return
    }
    // if top out of bounds
    if (dimensions.top < 0) {
      setTooltipPosition('bottom')
      return
    }
    // if right out of bounds
    if (dimensions.right > window.innerWidth) {
      setTooltipPosition('left')
      return
    }
    // if left out of bounds
    if (dimensions.left < 0) {
      setTooltipPosition('right')
      return
    }
    // If bottom out of bounds
    if (dimensions.bottom > window.innerHeight) {
      setTooltipPosition('top')
      return
    }
  }, [tipContainer, tooltipPosition])

  useEffect(() => {
    handleTipViewport()
    setChildEl(document.getElementById(randomId))
  }, [])

  useEffect(() => {
    setTooltipPosition(position)
  }, [position])

  const arrowSize = 18

  const calculateTooltipPosition = (): { top: number; left: number } => {
    if (!childEl) return { top: 0, left: 0 }
    if (!tipContainer.current) return { top: 0, left: 0 }

    const childPosition = childEl.getBoundingClientRect()
    const tipDimensions = tipContainer.current.getBoundingClientRect()

    let top = 0
    let left = 0

    switch (tooltipPosition) {
      case 'top':
        top =
          childPosition.top + window.scrollY - tipDimensions.height - arrowSize
        left =
          childPosition.left +
          window.scrollX +
          childPosition.width / 2 -
          tipDimensions.width / 2
        break
      case 'bottom':
        top = childPosition.bottom + window.scrollY + arrowSize
        left =
          childPosition.left +
          window.scrollX +
          childPosition.width / 2 -
          tipDimensions.width / 2
        break
      case 'left':
        left =
          childPosition.left + window.scrollX - tipDimensions.width - arrowSize
        top =
          childPosition.top +
          window.scrollY +
          childPosition.height / 2 -
          tipDimensions.height / 2
        break
      case 'right':
        left = childPosition.right + window.scrollX + arrowSize
        top =
          childPosition.top +
          window.scrollY +
          childPosition.height / 2 -
          tipDimensions.height / 2
        break
      default:
        break
    }
    return { top, left }
  }

  useEffect(() => {
    if (childEl) {
      setTooltipCoords(calculateTooltipPosition())
    }
  }, [
    position,
    window.scrollY,
    tipContainer.current,
    childEl,
    childEl?.getBoundingClientRect().top,
    childEl?.getBoundingClientRect().left,
  ])

  useEventListener({
    eventName: 'resize',
    callback: debounce(handleTipViewport, 100),
    ref: documentRef,
  })

  useEventListener({
    eventName: 'scroll',
    callback: debounce(handleTipViewport, 100),
    ref: documentRef,
  })

  return (
    <Container>
      <UnderlinedChild
        id={randomId}
        $underline={underline}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
      >
        {children}
      </UnderlinedChild>
      {childEl &&
        createPortal(
          <Tip
            className="tooltip"
            $showTip={showTip}
            $position={position}
            $arrowPosition={tooltipPosition}
            ref={tipContainer}
            $maxWidth={maxWidth}
            $fallbackStyle={fallbackStyle}
            style={{
              position: 'absolute',
              top: `${tooltipCoords.top}px`,
              left: `${tooltipCoords.left}px`,
            }}
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
          </Tip>,
          document.body,
        )}
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

const UnderlinedChild = styled(Box)<{ $underline: boolean }>`
  cursor: pointer;
  ${({ $underline }) =>
    $underline &&
    css`
      border-bottom: 1px dashed ${theme.colors.marshmallowPink};
    `}
`

const arrowInset = 26
const arrowCenterPosition = 'calc(50% - 6px)'
const arrowVerticalCenter = 'calc(50% - 12px)'

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
        top: ${arrowVerticalCenter};
      `
  }
}

const top = css<{ $arrowPosition: ArrowPosition }>`
  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({ $arrowPosition }) => handleHorizontalArrowPosition($arrowPosition)}
  }
`

const bottom = css<{ $arrowPosition: ArrowPosition }>`
  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({ $arrowPosition }) => handleHorizontalArrowPosition($arrowPosition)}
  }
`

const left = css<{ $arrowPosition: ArrowPosition }>`
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({ $arrowPosition }) => handleVerticalArrowPosition($arrowPosition)}
  }
`

const right = css<{ $arrowPosition: ArrowPosition }>`
  &:before {
    left: -11px;
    ${({ $arrowPosition }) => handleVerticalArrowPosition($arrowPosition)}
  }
`

export const Tip = styled.div<{
  $showTip: boolean
  $position: Position
  $arrowPosition: ArrowPosition
  $maxWidth?: number
  $fallbackStyle?: boolean
}>`
  position: absolute;
  margin: auto;
  background: ${theme.colors.custard};
  padding: 16px 12px 20px;
  border-radius: 16px;
  max-width: 450px;
  opacity: ${({ $showTip }) => ($showTip ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  cursor: default;
  z-index: 10;

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({ $maxWidth }) => $maxWidth && -$maxWidth / 2 + 'px'};
  max-width: ${({ $maxWidth }) => $maxWidth && $maxWidth + 'px'};

  ${({ $arrowPosition }) => $arrowPosition === 'top' && top}
  ${({ $arrowPosition }) => $arrowPosition === 'bottom' && bottom}
	${({ $arrowPosition }) => $arrowPosition === 'left' && left}
	${({ $arrowPosition }) => $arrowPosition === 'right' && right}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${theme.colors.custard} transparent transparent;
    position: absolute;
  }

  ${({ $fallbackStyle }) =>
    $fallbackStyle &&
    css`
      background: ${theme.colors.feijoa};
      &:before {
        border-color: transparent ${theme.colors.feijoa} transparent transparent;
      }
    `};
`
