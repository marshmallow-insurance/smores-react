import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Included: FC<Props> = ({ color }) => {
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
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill={color}
      />
      <path
        d="M18.4808 6.924C18.1605 6.6585 17.6895 6.70275 17.424 7.02L10.3552 15.5025L6.41625 12.8768C6.0705 12.6458 5.6055 12.7395 5.376 13.0845C5.14575 13.4288 5.23875 13.8953 5.58375 14.1248L10.0837 17.1248C10.2112 17.2088 10.356 17.25 10.4992 17.25C10.7152 17.25 10.9282 17.157 11.0767 16.98L18.5768 7.98C18.8415 7.662 18.798 7.18875 18.4808 6.924V6.924Z"
        fill="white"
      />
    </svg>
  )
}
