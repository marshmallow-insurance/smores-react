import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Fuel: FC<Props> = ({ color }) => {
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
        d="M19.707 2.293l3.414 3.414c.566.566.879 1.32.879 2.122V21c0 1.654-1.346 3-3 3s-3-1.346-3-3v-5a1 1 0 00-1-1h-1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V8c0-4.411 3.589-8 8-8s8 3.589 8 8v5h1c1.654 0 3 1.346 3 3v5a1 1 0 002 0V10.816A2.966 2.966 0 0121 11c-1.654 0-3-1.346-3-3 0-1.238.754-2.302 1.826-2.76l-1.533-1.533a.999.999 0 111.414-1.414zM2 11v11h12V11H2zm12-2H2V8c0-3.309 2.691-6 6-6s6 2.691 6 6v1zm6-1a1.001 1.001 0 002 0 1.001 1.001 0 00-2 0z"
        fill={color}
      />
    </svg>
  )
}
