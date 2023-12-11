import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Stack: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#stack)">
        <path
          d="M21.971 12.416L12 15.939l-9.971-3.523a.998.998 0 10-.666 1.884l10.304 3.642a.997.997 0 00.666 0L22.637 14.3a1 1 0 10-.666-1.884zM1.362 8.289l10.304 3.653a1.007 1.007 0 00.668 0l10.304-3.653a2.029 2.029 0 001.361-1.859 2.028 2.028 0 00-1.243-1.939L12.392.08a.995.995 0 00-.783 0L1.244 4.49A2.029 2.029 0 00.001 6.43a2.03 2.03 0 001.361 1.859zm10.635-6.201l9.973 4.316L12 9.939 2.03 6.404l-.003-.074 9.97-4.242zm9.97 16.287L12 21.938l-9.967-3.563a1 1 0 00-.673 1.883l10.304 3.684a1.015 1.015 0 00.672-.001l10.304-3.684a1 1 0 10-.673-1.882z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="stack">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
