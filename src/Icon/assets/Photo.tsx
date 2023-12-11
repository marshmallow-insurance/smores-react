import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Photo: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2zm5-8H3C1.346 0 0 1.346 0 3v18c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3zm1 21a1 1 0 01-1 1H3a1 1 0 01-1-1v-3h20v3zM3.045 16L8 9.629 12.955 16h-9.91zM22 16h-6.511l-6.7-8.614c-.379-.486-1.199-.486-1.578 0L2 14.086V3a1 1 0 011-1h18a1 1 0 011 1v13z"
        fill={color}
      />
    </svg>
  )
}
