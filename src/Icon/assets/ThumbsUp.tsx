import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const ThumbsUp: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={color} strokeWidth="2">
        <path d="M20 9h-7.625l1.472-3.889c.377-.996.042-2.135-.802-2.73-.964-.679-2.264-.427-2.937.569L6.019 9H6v9a4 4 0 004 4h6.7c.79 0 1.507-.466 1.828-1.188l3.3-7.425c.113-.255.172-.532.172-.812V11a2 2 0 00-2-2v0z" />
        <path
          d="M5 22H3a1 1 0 01-1-1V10a1 1 0 011-1h3v12a1 1 0 01-1 1z"
          fill={color}
        />
      </g>
    </svg>
  )
}
