import React, { FC, useState } from 'react'

import { Button } from '../Button'

function sleep(delay: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay)
  })
}

export const InteractivePlayground: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    void (async () => {
      setIsLoading(true)
      await sleep(1000)
      setIsLoading(false)
    })()
  }

  return (
    <Button primary icon="info" handleClick={handleClick} loading={isLoading}>
      Get started
    </Button>
  )
}
