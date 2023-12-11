import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Boost: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <rect
          x="8.772"
          y="11.355"
          width="2"
          height="9.577"
          rx="1"
          transform="rotate(45 8.772 11.355)"
        />
        <rect
          x="7.366"
          y="12.761"
          width="2"
          height="6"
          rx="1"
          transform="rotate(-45 7.366 12.761)"
        />
        <rect
          x="20.816"
          y="5"
          width="2"
          height="14.779"
          rx="1"
          transform="rotate(45 20.816 5)"
        />
      </g>
    </svg>
  )
}
