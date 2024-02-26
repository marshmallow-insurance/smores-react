import React, { FC } from 'react'
import { SearchInput, SearchInputProps } from './SearchInput'

const list = [
  {
    label: 'Monday',
    value: 'Monday',
  },
  {
    label: 'Tuesday',
    value: 'Tuesday',
  },
  {
    label: 'Wednesday',
    value: 'Wednesday',
  },
  {
    label: 'Thursday',
    value: 'Thursday',
  },
  {
    label: 'Friday',
    value: 'Friday',
  },
  {
    label: 'Saturday',
    value: 'Saturday',
  },
  {
    label: 'Sunday',
    value: 'Sunday',
  },
]

export const Container: FC<SearchInputProps> = ({ showIcon }) => {
  return (
    <SearchInput
      id="days"
      label="Days"
      placeholder="Search days"
      searchList={list}
      onFound={(val) => console.log('found', val)}
      showIcon={showIcon}
    />
  )
}
