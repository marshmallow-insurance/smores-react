import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Notification: FC<Props> = ({ color }) => {
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
        <path d="M14.905 19.25a3 3 0 11-5.81 0M22 19H2l4-7V7a6 6 0 1112 0v5l4 7z" />
      </g>
    </svg>
  )
}
