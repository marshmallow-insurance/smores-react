import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Edit: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.121 8.122A2.982 2.982 0 0021 6c0-.801-.312-1.555-.879-2.121A2.976 2.976 0 0018 3c-.801 0-1.555.312-2.121.879l-1.464 1.464 4.243 4.243 1.463-1.464zM17.243 11L13 6.757 4.667 15.09 3 21l5.91-1.667L17.243 11z"
        fill={color}
      />
    </svg>
  )
}
