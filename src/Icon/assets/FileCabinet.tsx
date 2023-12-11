import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const FileCabinet: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        clipPath="url(#fileCabinet)"
      >
        <path d="M2.998 1.998a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1v-18a1 1 0 00-1-1h-18zm-3 1a3 3 0 013-3h18a3 3 0 013 3v18a3 3 0 01-3 3h-18a3 3 0 01-3-3v-18z" />
        <path d="M-.002 12a1 1 0 011-1h22a1 1 0 010 2h-22a1 1 0 01-1-1zM8 6a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM8 16.996a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z" />
      </g>
      <defs>
        <clipPath id="fileCabinet">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
