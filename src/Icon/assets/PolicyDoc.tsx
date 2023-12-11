import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const PolicyDoc: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" clipRule="evenodd" fill={color}>
        <path d="M4.85 0h14.3C20.724 0 22 1.287 22 2.875v18.25C22 22.713 20.724 24 19.15 24H4.85C3.276 24 2 22.713 2 21.125V2.875C2 1.287 3.276 0 4.85 0zm0 1.917c-.525 0-.95.429-.95.958v18.25c0 .53.425.958.95.958h14.3c.525 0 .95-.429.95-.958V2.875a.954.954 0 00-.95-.958H4.85z" />
        <path d="M6 13a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM6 17a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1z" />
      </g>
    </svg>
  )
}
