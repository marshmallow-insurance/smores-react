import React, { FC, ReactNode, useEffect } from 'react'

interface Props {
  onNotFound?: () => void
  notFoundComponent?: ReactNode
}

export const EmptyResults: FC<Props> = ({ onNotFound, notFoundComponent }) => {
  useEffect(() => {
    onNotFound && onNotFound()
  }, [])

  if (notFoundComponent) {
    return <li>{notFoundComponent}</li>
  }

  return <li>No results</li>
}
