import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Minus: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 11H4a1 1 0 000 2h16a1 1 0 000-2z" fill={color} />
    </svg>
  )
}
