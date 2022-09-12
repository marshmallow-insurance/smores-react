import type { SetStateAction } from 'react'
import { useCallback, useState } from 'react'

export const useControllableState = <StateType>({
  initialState,
  stateProp,
}: {
  initialState: StateType
  stateProp: StateType | undefined
}) => {
  const [state, setState] = useState(initialState)

  const returnedState = stateProp !== undefined ? stateProp : state
  const returnedSetState = useCallback<
    (state: SetStateAction<StateType>) => void
  >(
    (nextState) => {
      if (stateProp !== undefined) {
        return
      }

      setState(nextState)
    },
    [state, stateProp],
  )

  return [returnedState, returnedSetState] as const
}
