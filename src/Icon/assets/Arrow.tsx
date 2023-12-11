import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Arrow: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.087 12.401c.014.033.042.058.06.089a.99.99 0 00.177.238c.008.007.01.018.018.025l8 7a1 1 0 101.316-1.505L5.661 13H21a1 1 0 100-2H5.661l5.997-5.248a1 1 0 10-1.316-1.504l-8 7c-.008.007-.011.018-.018.025a.99.99 0 00-.177.238c-.018.031-.045.056-.06.089a.97.97 0 000 .801z"
        fill={color}
      />
    </svg>
  )
}
