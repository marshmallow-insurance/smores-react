import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const EditContact: FC<Props> = ({ color }) => {
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
        d="M0 10a5 5 0 015-5h3a1 1 0 010 2H5a3 3 0 00-3 3v9a3 3 0 003 3h9a3 3 0 003-3v-3a1 1 0 112 0v3a5 5 0 01-5 5H5a5 5 0 01-5-5v-9z"
        fill={color}
      />
      <path
        d="M16.303 3.977l3.72 3.72M18.508 1.771L8.462 11.817 7 17l5.183-1.462L22.229 5.492a2.63 2.63 0 10-3.721-3.721v0z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
