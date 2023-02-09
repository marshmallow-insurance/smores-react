import styled, { css } from 'styled-components'
import { theme } from '../theme'
import { TooltipPosition } from './Tooltip'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > span:hover + .tooltip {
    opacity: 1;
  }
`

const padding = 8

const top = css`
  bottom: calc(100% + ${padding}px);
  &:before {
    bottom: -9px;
    left: calc(50% - 6px);
    transform: rotate(-90deg);
  }
`

const bottom = css`
  top: calc(100% + ${padding}px);

  &:before {
    top: -9px;
    left: calc(50% - 6px);
    transform: rotate(90deg);
  }
`

const left = css`
  right: calc(100% + ${padding}px);

  &:before {
    top: calc(50% - 6px);
    right: -6px;
    transform: rotate(180deg);
  }
`
const right = css`
  left: calc(100% + ${padding}px);

  &:before {
    top: calc(50% - 6px);
    left: -6px;
  }
`

export const Tip = styled.div<{ position: TooltipPosition }>`
  position: absolute;
  margin: auto;
  background: ${theme.colors.background};
  width: 240px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${({ position }) => position === 'top' && top}
  ${({ position }) => position === 'bottom' && bottom}
	${({ position }) => position === 'left' && left}
	${({ position }) => position === 'right' && right}

  &:before {
    content: '';
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent ${theme.colors.background} transparent transparent;
    position: absolute;
  }
`
