import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Checkout: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.07 12.024l6.148-10.949a.676.676 0 000-.733C22.075.147 21.834 0 21.595 0H8.914c-.24 0-.48.147-.624.342L1.758 11.633c-.144.245-.144.538 0 .734l6.532 11.29a.697.697 0 00.624.343h12.68c.24 0 .48-.147.624-.342a.676.676 0 000-.733l-6.147-10.9zm-.816-1.466l-5.09-9.092h10.23l-5.14 9.092zM8.866 2.2l5.524 9.824-5.524 9.825L3.2 12.024 8.866 2.2zm1.297 20.334l5.091-9.092 5.091 9.092H10.163z"
        fill={color}
      />
    </svg>
  )
}
