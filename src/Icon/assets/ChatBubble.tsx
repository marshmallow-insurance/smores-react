import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const ChatBubble: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" clipRule="evenodd" fill={color}>
        <path d="M0 10.5C0 5.254 4.254 1 9.5 1h5a9.5 9.5 0 010 19h-.197l-5.748 3.832A1 1 0 017 23v-3.34c-4.032-1.099-7-4.777-7-9.16zM9.5 3A7.5 7.5 0 002 10.5c0 3.687 2.665 6.749 6.176 7.376A1 1 0 019 18.86v2.271l4.445-2.963A1 1 0 0114 18h.5a7.5 7.5 0 000-15h-5z" />
        <path d="M7 10a1 1 0 011 1v.01a1 1 0 11-2 0V11a1 1 0 011-1zM12 10a1 1 0 011 1v.01a1 1 0 11-2 0V11a1 1 0 011-1zM17 10a1 1 0 011 1v.01a1 1 0 11-2 0V11a1 1 0 011-1z" />
      </g>
    </svg>
  )
}
