import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Burger: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6h18a1 1 0 100-2H3a1 1 0 100 2zm18 5H3a1 1 0 100 2h18a1 1 0 100-2zM3 18h18a1 1 0 110 2H3a1 1 0 110-2z"
        fill={color}
      />
    </svg>
  )
}
