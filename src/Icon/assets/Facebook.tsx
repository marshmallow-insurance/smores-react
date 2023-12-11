import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Facebook: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.51.005L14.393 0C10.89 0 8.625 2.318 8.625 5.906V8.63H5.49a.49.49 0 00-.49.49v3.945c0 .27.22.49.49.49h3.135v9.956c0 .27.22.489.49.489h4.091a.49.49 0 00.49-.49v-9.956h3.666a.49.49 0 00.49-.489l.002-3.946a.49.49 0 00-.49-.49h-3.668V6.322c0-1.11.265-1.673 1.713-1.673h2.101c.27 0 .49-.22.49-.49V.494a.49.49 0 00-.49-.489z"
        fill={color}
      />
    </svg>
  )
}
