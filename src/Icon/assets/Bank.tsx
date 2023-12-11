import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Bank: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.14L1.48 7.877a1 1 0 11-.957-1.756l11-6a.998.998 0 01.956 0l11 6a1 1 0 11-.958 1.756L12.001 2.14zM21 19a1 1 0 11-2 0v-8h-2v8a1 1 0 11-2 0v-8h-2v8a1 1 0 11-2 0v-8H9v8a1 1 0 11-2 0v-8H5v8a1 1 0 11-2 0v-9a1 1 0 011-1h16a1 1 0 011 1v9zM1 22a1 1 0 100 2h22a1 1 0 100-2H1zM12 4.99a1 1 0 011 1c0 .552-.447 1.005-1 1.005-.553 0-1-.443-1-.995v-.01a1 1 0 011-1z"
        fill={color}
      />
    </svg>
  )
}
