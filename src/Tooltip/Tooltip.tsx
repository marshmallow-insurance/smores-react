import React, { FC, ReactNode, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { Text } from '../Text'
import { Color, theme } from '../theme'
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  arrow,
  FloatingArrow,
  type Placement,
} from '@floating-ui/react'

export interface TooltipProps {
  children: ReactNode
  content: string | ReactNode
  position: Placement
  maxWidth?: number
  title?: string
  underline?: boolean
  variant?: TooltipVariant
  zIndex?: number
  portalContainer?:
    | HTMLElement
    | null
    | React.MutableRefObject<HTMLElement | null>
  bgColor?: Color
}

export enum TooltipVariant {
  PRIMARY = 'PRIMARY',
  FALLBACK = 'FALLBACK',
}

type VariantValue = { textColor: Color }

const tooltipVariants = {
  [TooltipVariant.PRIMARY]: {
    textColor: 'liquorice',
  },
  [TooltipVariant.FALLBACK]: {
    textColor: 'cream',
  },
} satisfies Record<TooltipVariant, VariantValue>

const ARROW_HEIGHT = 8
const GAP = 4

export const Tooltip: FC<TooltipProps> = ({
  children,
  title,
  content,
  position,
  maxWidth = 500,
  underline = false,
  zIndex = 10,
  portalContainer,
  bgColor: bgColorProp,
  variant = TooltipVariant.PRIMARY,
}) => {
  const [showTip, setShowTip] = useState<boolean>(false)
  const arrowRef = useRef(null)

  const variantValue = tooltipVariants[variant]
  const bgColor = bgColorProp ? theme.colors[bgColorProp] : theme.colors.custard

  const randomId = crypto.randomUUID()

  const { refs, floatingStyles, context } = useFloating({
    open: showTip,
    placement: position,
    onOpenChange: setShowTip,
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      flip(),
      shift(),
      arrow({ element: arrowRef, padding: 14 }),
    ],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ])

  return (
    <Container>
      <UnderlinedChild
        id={randomId}
        $underline={underline}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </UnderlinedChild>
      {showTip && (
        <FloatingPortal root={portalContainer}>
          <Tip
            ref={refs.setFloating}
            className="tooltip"
            $showTip={showTip}
            $maxWidth={maxWidth}
            $zIndex={zIndex}
            $background={bgColor}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <FloatingArrow ref={arrowRef} context={context} fill={bgColor} />
            {title && (
              <Text tag="h5" typo="desc-medium" color={variantValue.textColor}>
                {title}
              </Text>
            )}
            {(typeof content === 'string' && (
              <Text typo="desc-light" color={variantValue.textColor}>
                {content}
              </Text>
            )) ||
              content}
          </Tip>
        </FloatingPortal>
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

export const Tip = styled.div<{
  $showTip: boolean
  $maxWidth?: number
  $zIndex: number
  $background: string
}>`
  position: absolute;
  margin: auto;
  background: ${({ $background }) => $background};
  padding: 16px 12px 20px;
  border-radius: 16px;
  max-width: 450px;
  opacity: ${({ $showTip }) => ($showTip ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  cursor: default;
  z-index: ${({ $zIndex }) => ($zIndex ? $zIndex : '10')};

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({ $maxWidth }) => $maxWidth && -$maxWidth / 2 + 'px'};
  max-width: ${({ $maxWidth }) => $maxWidth && $maxWidth + 'px'};
`
