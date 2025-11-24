import { FC, ReactNode, useEffect } from 'react'

interface Props {
  onNotFound?: (searchTerm: string) => void
  searchTerm: string
  notFoundComponent?: ReactNode
}

export const EmptyResults: FC<Props> = ({
  onNotFound,
  searchTerm,
  notFoundComponent,
}) => {
  useEffect(() => {
    onNotFound?.(searchTerm)
  }, [])

  if (notFoundComponent) {
    return <li>{notFoundComponent}</li>
  }

  return <li>No results</li>
}
