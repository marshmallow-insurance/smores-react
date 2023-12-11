import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const LogOut: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3H5a2 2 0 00-2 2v14a2 2 0 002 2h7M17 16l4-4-4-4M21 12H9" />
      </g>
    </svg>
  )
}
