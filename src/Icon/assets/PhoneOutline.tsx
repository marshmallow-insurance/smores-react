import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const PhoneOutline: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.462 16.538l-2.647-2.647a1.834 1.834 0 00-2.593 0l-2.195 2.195a11.414 11.414 0 01-6.114-6.113l2.195-2.195a1.834 1.834 0 000-2.594L7.462 2.537a1.834 1.834 0 00-2.594 0L3.61 3.795a5.553 5.553 0 00-1.505 4.998c1.288 6.6 6.502 11.814 13.102 13.102a5.552 5.552 0 004.998-1.505l1.258-1.258a1.833 1.833 0 000-2.594z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
