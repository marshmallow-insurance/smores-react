import React, { FC } from 'react'
import styled from 'styled-components'
import { Color, theme } from '../theme'

import { EmotionPosition, EmotionWrapper } from './EmotionWrapper'
import { Emotion, Marshform } from './MarshformGenerator'

interface Props {
  color: Color
  shape: Marshform
  width?: number
  emotion?: Emotion
  emotionPosition?: EmotionPosition
}

export const MarshformWrapper: FC<Props> = ({
  color,
  shape,
  width = 100,
  emotion,
  emotionPosition,
}) => {
  console.log(emotionPosition)
  return (
    <Container>
      {emotion && (
        <EmotionWrapper
          emotion={emotion}
          width={width}
          emotionPosition={emotionPosition}
        />
      )}
      {shape === 'arch' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 113"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            fillRule="evenodd"
            d="M71.758 0C32.504 0 .634 31.815.634 71.083l.024.04v42.675h142.199V71.124l.024-.041C142.881 31.815 111.012 0 71.758 0Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {shape === 'arrow' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 56"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M139.681 19.86 121.544 0H21.971L3.834 19.86c-2.206 2.438-3.2 5.514-3.2 8.59 0 3.075.994 6.15 3.2 8.589l18.137 19.86h99.573l18.137-19.86c2.206-2.438 3.2-5.514 3.2-8.59 0-3.075-.994-6.15-3.2-8.589Z"
          />
        </svg>
      )}
      {shape === 'bumper' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 71"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M36.196 0h71.123c19.628 0 35.562 15.935 35.562 35.562v35.562H.634V35.562C.634 15.935 16.568 0 36.196 0Z"
          />
        </svg>
      )}
      {shape === 'car' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 106"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M142.881 56.899c0-11.784-9.553-21.337-21.337-21.337h-7.112V28.45c0-15.713-12.738-28.45-28.45-28.45H29.083C13.371 0 .633 12.737.633 28.45v78.236h142.248V56.899Z"
          />
        </svg>
      )}
      {shape === 'circle' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 142"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M71.882 142.247c39.28 0 71.124-31.843 71.124-71.123S111.162 0 71.882 0C32.602 0 .758 31.843.758 71.124c0 39.28 31.843 71.123 71.124 71.123Z"
          />
        </svg>
      )}
      {shape === 'crest' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 121 142"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M60.484 0 .634 35.562v45.163c0 11.492 5.497 22.288 14.758 28.962l45.092 32.56 45.093-32.56c9.261-6.674 14.758-17.47 14.758-28.962V35.562L60.485 0Z"
          />
        </svg>
      )}
      {shape === 'document' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 128"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M21.97 0C10.188 0 .635 9.553.635 21.337c0 11.784 9.553 21.337 21.337 21.337-11.784 0-21.337 9.553-21.337 21.337 0 11.784 9.553 21.337 21.337 21.337-11.784 0-21.337 9.553-21.337 21.338 0 11.784 9.553 21.337 21.337 21.337h120.91V0H21.971Z"
          />
        </svg>
      )}
      {shape === 'eggTimer' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 170 152"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            fillRule="evenodd"
            d="M122.035 76.5c28.198-13.767 47.799-42.872 47.799-76.5H.634c0 33.628 19.6 62.733 47.799 76.5C20.14 90.232.633 119.303.633 153h169.201c0-33.697-19.507-62.768-47.799-76.5Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {shape === 'hexagon' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 136 142"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M89.026 6.046C82.662 2.04 75.432 0 68.201 0c-7.23 0-14.46 2.04-20.824 6.046L.634 35.562v71.124l46.743 29.516c6.363 4.005 13.594 6.045 20.824 6.045 7.23 0 14.461-2.04 20.825-6.045l46.743-29.516V35.562L89.026 6.046Z"
          />
        </svg>
      )}
      {shape === 'house' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 128"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M89.538 6.414C84.302 2.134 78.14 0 71.758 0c-6.383 0-12.544 2.134-17.781 6.414L.634 49.787v78.236H142.88V49.787L89.538 6.414Z"
          />
        </svg>
      )}
      {shape === 'losenge' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 113"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M107.318 113.798H36.195C16.568 113.798.633 97.863.633 78.236V0H142.88v78.236c0 19.627-15.934 35.562-35.562 35.562Z"
          />
        </svg>
      )}
      {shape === 'meter' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 106"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            fillRule="evenodd"
            d="M71.758 0C32.477 0 .634 31.854.634 71.124l35.562 35.562h71.123l35.562-35.562C142.881 31.854 111.038 0 71.758 0Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {shape === 'pointer' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 121 142"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M60.484 0C27.431.004.634 27.167.634 60.455c0 26.49 18.427 43.688 21.123 46.231l38.727 35.561 38.727-35.561c2.697-2.543 21.124-19.742 21.124-46.23 0-33.29-26.797-60.452-59.85-60.456Z"
          />
        </svg>
      )}
      {shape === 'semiCircle' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 71"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            fillRule="evenodd"
            d="M.634 0c0 39.28 31.843 71.124 71.124 71.124 39.28 0 71.123-31.843 71.123-71.124H.634Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {shape === 'van' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 106"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M142.881 106.686H.634V28.449C.634 12.748 13.37 0 29.084 0h71.123l42.674 42.674v64.012Z"
          />
        </svg>
      )}
      {shape === 'warning' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143 113"
          width={width}
          fill="none"
        >
          <path
            fill={theme.colors[color]}
            d="M141.459 78.236 88.386 8.716C84.002 2.966 77.531.038 71.046 0c-6.484.038-12.955 2.966-17.34 8.716L.634 78.236l28.165 35.562h84.495l28.165-35.562Z"
          />
        </svg>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  position: relative;
`
