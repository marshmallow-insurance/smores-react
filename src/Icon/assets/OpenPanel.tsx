import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const OpenPanel: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3.5h10M0 11.5h10M0 7.5h14.752M13.017 5.5 15 7.5l-1.983 2"
        stroke={color}
      />
    </svg>
  )
}
