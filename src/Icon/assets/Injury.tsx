import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Injury: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#injury)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.172 16.364L7.637 2.83 2.829 7.637l13.535 13.535 4.808-4.808zM9.051 1.414a2 2 0 00-2.828 0L1.415 6.224a2 2 0 000 2.828L14.95 22.586a2 2 0 002.828 0l4.808-4.808a2 2 0 000-2.828L9.051 1.415z"
          fill={color}
        />
        <path
          d="M1.414 17.778a2 2 0 010-2.828L14.95 1.414a2 2 0 012.829 0l4.808 4.808a2 2 0 010 2.829L9.05 22.586a2 2 0 01-2.829 0l-4.808-4.808z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.364 2.828L2.828 16.364l4.808 4.808L21.172 7.636l-4.808-4.808zM1.414 14.95a2 2 0 000 2.828l4.808 4.808a2 2 0 002.829 0L22.586 9.051a2 2 0 000-2.829l-4.808-4.808a2 2 0 00-2.828 0L1.414 14.95z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.828 11.829zm-2.12-.708a1 1 0 000 1.415l1.413 1.414a1 1 0 001.415 0l1.414-1.414a1 1 0 000-1.415l-1.414-1.414a1 1 0 00-1.415 0l-1.414 1.414z"
          fill={color}
        />
        <mask id="a" fill="#fff">
          <rect
            x="15"
            y="6.415"
            width="2"
            height="4"
            rx="1"
            transform="rotate(-45 15 6.415)"
          />
        </mask>
        <rect
          x="15"
          y="6.415"
          width="2"
          height="4"
          rx="1"
          transform="rotate(-45 15 6.415)"
          fill={color}
          stroke={color}
          strokeWidth="2"
          mask="url(#a)"
        />
        <g>
          <mask id="b" fill="#fff">
            <rect
              x="5"
              y="16.415"
              width="2"
              height="4"
              rx="1"
              transform="rotate(-45 5 16.415)"
            />
          </mask>
          <rect
            x="5"
            y="16.415"
            width="2"
            height="4"
            rx="1"
            transform="rotate(-45 5 16.415)"
            fill={color}
            stroke={color}
            strokeWidth="2"
            mask="url(#b)"
          />
        </g>
      </g>
      <defs>
        <clipPath id="injury">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
