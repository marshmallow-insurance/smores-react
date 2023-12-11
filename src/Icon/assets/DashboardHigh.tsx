import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const DashboardHigh: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" clipRule="evenodd" fill={color}>
        <path d="M12 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1zM19 12a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM1 12a1 1 0 011-1h2a1 1 0 110 2H2a1 1 0 01-1-1zM19.778 4.222a1 1 0 010 1.414L18.364 7.05a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM4.222 4.222a1 1 0 011.414 0L7.05 5.636A1 1 0 115.636 7.05L4.222 5.636a1 1 0 010-1.414zM12 14a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z" />
        <path d="M17.207 9.793a1 1 0 010 1.414l-3.086 3.086a1 1 0 01-1.414-1.414l3.086-3.086a1 1 0 011.414 0z" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" />
      </g>
    </svg>
  )
}
