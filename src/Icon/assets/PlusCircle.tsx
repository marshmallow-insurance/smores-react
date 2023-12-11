import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const PlusCircle: FC<Props> = ({ color }) => {
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
        d="M20.49 3.51c-4.681-4.68-12.299-4.68-16.98 0-4.68 4.682-4.68 12.298 0 16.98A11.97 11.97 0 0012 24c3.073 0 6.148-1.17 8.488-3.51 4.682-4.682 4.682-12.3.001-16.98zM16.001 11h-3.001V7.998a1 1 0 00-2.001 0v3.001H7.998a1 1 0 000 2H11v3.002a1 1 0 002 0V13h3.002a1 1 0 000-2.001zM4.925 19.074c3.9 3.9 10.249 3.9 14.15 0 3.9-3.901 3.9-10.248 0-14.149A9.974 9.974 0 0012 2a9.977 9.977 0 00-7.075 2.924c-3.9 3.901-3.9 10.249 0 14.15z"
        fill={color}
      />
    </svg>
  )
}
