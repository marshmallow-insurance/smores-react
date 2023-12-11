import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const House: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.633 9.226L22 7.89V1.75a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.231L12.633.226a1 1 0 00-1.267 0l-11 9a1 1 0 001.266 1.548l.368-.3V20.75c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V10.474l.367.3a.997.997 0 001.407-.14 1 1 0 00-.141-1.408zM15 21.75H9v-4c0-1.654 1.346-3 3-3s3 1.346 3 3v4zm5-1c0 .552-.45 1-1 1h-2v-4c0-2.757-2.243-5-5-5s-5 2.243-5 5v4H5c-.55 0-1-.448-1-1V8.838l8-6.546 8 6.546V20.75zm0-14.497l-2-1.636V2.75h2v3.503z"
        fill={color}
      />
    </svg>
  )
}
