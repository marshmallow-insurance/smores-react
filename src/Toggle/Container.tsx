import React, { useState } from 'react'
import { Toggle } from './Toggle'

export const Container = () => {
  const [active, setActive] = useState(false)

  return (
    <Toggle
      id="toggleId"
      checked={active}
      onToggle={() => setActive(!active)}
    />
  )
}
