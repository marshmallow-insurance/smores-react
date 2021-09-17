import React, { useState } from 'react'
import { SearchInput } from './SearchInput'

export const list = [
  {
    label: 'Monday',
  },
  {
    label: 'Tuesday',
  },
  {
    label: 'Wednesday',
  },
  {
    label: 'Thursday',
  },
  {
    label: 'Friday',
  },
  {
    label: 'Saturday',
  },
  {
    label: 'Sunday',
  },
]

export const Container = () => {
  return (
    <SearchInput
      id="days"
      label="Days"
      placeholder="Search days"
      searchList={list}
      onFound={() => {}}
    />
  )
}
