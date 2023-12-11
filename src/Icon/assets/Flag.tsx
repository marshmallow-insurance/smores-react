import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Flag: FC<Props> = ({ color }) => {
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
        d="M21.894 5.447L19.118 11l2.777 5.553A.998.998 0 0121 18h-5.782c-1.606 0-3.213-.379-4.649-1.097A8.476 8.476 0 006.782 16H3v7a1 1 0 11-2 0V1a1 1 0 112 0v1h5.793c1.612 0 3.226.383 4.666 1.106 1.098.552 3.331.894 4.769.894H21a1 1 0 01.894 1.447zm-10.463 9.65a8.476 8.476 0 003.787.903h4.164l-2.276-4.552a1 1 0 010-.895L19.382 6h-1.154c-1.34 0-4.064-.3-5.667-1.106A8.43 8.43 0 008.793 4H3v10h3.782c1.606 0 3.213.379 4.649 1.097z"
        fill={color}
      />
    </svg>
  )
}
