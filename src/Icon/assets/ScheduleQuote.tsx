import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const ScheduleQuote: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" clipRule="evenodd" fill={color}>
        <path d="M9 9.5A2.5 2.5 0 0111.5 7h2a1 1 0 110 2h-2a.5.5 0 000 1h1a2.5 2.5 0 010 5h-2a1 1 0 010-2h2a.5.5 0 000-1h-1A2.5 2.5 0 019 9.5z" />
        <path d="M12 5.5a1 1 0 011 1V8a1 1 0 01-2 0V6.5a1 1 0 011-1zm0 7.5a1 1 0 011 1v1.5a1 1 0 01-2 0V14a1 1 0 011-1zM7 0a1 1 0 011 1v2a1 1 0 01-2 0V1a1 1 0 011-1zm5 0a1 1 0 011 1v2a1 1 0 01-2 0V1a1 1 0 011-1zm5 0a1 1 0 011 1v2a1 1 0 01-2 0V1a1 1 0 011-1z" />
        <path d="M5 4a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H5zM2 5a3 3 0 013-3h14a3 3 0 013 3v16a3 3 0 01-3 3H5a3 3 0 01-3-3V5z" />
        <path d="M6 19a1 1 0 011-1h10a1 1 0 010 2H7a1 1 0 01-1-1z" />
      </g>
    </svg>
  )
}
