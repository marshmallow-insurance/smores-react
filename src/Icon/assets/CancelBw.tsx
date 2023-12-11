import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const CancelBw: FC<Props> = ({ color }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
      <path d="M1.846 2.77h20.308v20.307H1.846V2.769Z" fill="#fff" />
      <path d="M1.846 9.23h20.308v13.847H1.846V9.23Z" fill="#fff" />
      <path
        d="M14.117 12.27a.922.922 0 1 1 1.305 1.306l-2.117 2.117 2.117 2.116a.922.922 0 1 1-1.305 1.305L12 16.998l-2.116 2.116a.92.92 0 0 1-1.306 0 .922.922 0 0 1 0-1.305l2.117-2.117-2.117-2.116a.922.922 0 1 1 1.306-1.305L12 14.387l2.117-2.116Z"
        fill={color}
      />
      <path
        d="M21 2h-2V1a1 1 0 1 0-2 0v1H7V1a1 1 0 1 0-2 0v1H3C1.346 2 0 3.346 0 5v16c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3Zm1 19a1 1 0 0 1-1 1H3c-.552 0-1-.449-1-1V5a1 1 0 0 1 1-1h2v2a1 1 0 1 0 2 0V4h10v2a1 1 0 1 0 2 0V4h2c.552 0 1 .449 1 1v16Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.077 10.154H1.847V8.308h21.23v1.846Z"
        fill={color}
      />
    </svg>
  )
}
