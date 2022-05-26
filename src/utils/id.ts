import { useMemo } from 'react'

let idCount = 0

const smoresIdPrefix = 'MM_SMORES'

const createId = (): string => {
  const id = `${smoresIdPrefix}_${idCount}`
  idCount += 1

  console.log('createId', id)
  return id
}

export const useUniqueId = (id?: string) => {
  const returnedId = useMemo(() => id || createId(), [id])

  return returnedId
}
