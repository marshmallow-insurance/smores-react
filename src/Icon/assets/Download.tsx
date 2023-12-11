import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Download: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.292 15.706A1.01 1.01 0 0012 16a1.01 1.01 0 00.708-.294l3.999-3.999a.999.999 0 10-1.414-1.414L13 12.586V3a1 1 0 10-2 0v9.586l-2.293-2.293a.999.999 0 10-1.414 1.414l3.999 3.999zM19 20H5a1 1 0 100 2h14a1 1 0 100-2z"
        fill={color}
      />
    </svg>
  )
}
