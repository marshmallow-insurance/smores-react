import React, { RefObject, useState } from 'react'

export const useKeyPress = function (
  targetKey: string,
  ref: RefObject<HTMLInputElement>,
) {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  React.useEffect(() => {
    ref.current?.addEventListener('keydown', downHandler)
    ref.current?.addEventListener('keyup', upHandler)

    return () => {
      ref.current?.removeEventListener('keydown', downHandler)
      ref.current?.removeEventListener('keyup', upHandler)
    }
  })

  return keyPressed
}
