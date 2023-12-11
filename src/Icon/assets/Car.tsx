import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Car: FC<Props> = ({ color }) => {
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
        d="M21 10.424V5c0-2.757-2.243-5-5-5H8C5.243 0 3 2.243 3 5v5.424A5.003 5.003 0 000 15v4a1 1 0 001 1h1v3a1 1 0 002 0v-3h16v3a1 1 0 002 0v-3h1a1 1 0 001-1v-4a5.003 5.003 0 00-3-4.576zM5 13.995c-.552 0-1 .453-1 1.005a1 1 0 002 0v-.01a.996.996 0 00-1-.995zM8 2C6.346 2 5 3.346 5 5v5h14V5c0-1.654-1.346-3-3-3H8zm14 16H2v-3c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v3zm-4-3c0-.552.448-1.005 1-1.005s1 .443 1 .995V15a1 1 0 01-2 0z"
        fill={color}
      />
    </svg>
  )
}
