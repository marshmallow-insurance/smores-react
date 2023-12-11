import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const SendMessage: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#sendMessage)">
        <path
          d="M23.935.667a.969.969 0 00-.228-.374 1 1 0 00-.377-.229 1.017 1.017 0 00-.314-.061h-.03a1.03 1.03 0 00-.246.031L1.753 5.695l-.024.007A2.394 2.394 0 00.004 7.863a2.309 2.309 0 001.4 2.285l8.815 3.631 3.641 8.837a2.298 2.298 0 002.276 1.379c1.021-.064 1.869-.741 2.168-1.748l5.661-20.986a.994.994 0 00-.03-.594zM2.188 8.309c-.134-.06-.197-.167-.188-.32a.393.393 0 01.288-.365L19.646 2.94l-8.895 8.895-8.563-3.526zM16.38 21.702a.395.395 0 01-.368.297c-.165.014-.262-.054-.311-.166l-3.536-8.584 8.895-8.895-4.68 17.348z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="sendMessage">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
