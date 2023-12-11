import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Iphone: FC<Props> = ({ color }) => {
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
        d="M6 0h12c1.654 0 3 1.346 3 3v18c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3V3c0-1.654 1.346-3 3-3zm5.62 20.92c-.12-.05-.23-.12-.33-.21-.09-.101-.16-.21-.21-.33A.995.995 0 0111 20c0-.13.03-.26.08-.38.05-.13.12-.24.21-.33.38-.37 1.04-.37 1.42 0 .18.189.29.45.29.71 0 .13-.02.26-.08.38-.05.12-.12.229-.21.33a.994.994 0 01-1.09.21zM19 21c0 .552-.449 1-1 1H6c-.551 0-1-.448-1-1v-3h14v3zM5 16h14V3c0-.551-.449-1-1-1H6c-.551 0-1 .449-1 1v13z"
        fill={color}
      />
    </svg>
  )
}
