import React, {
  createContext,
  FC,
  useState,
  useCallback,
  ReactNode,
  useContext,
} from 'react'
import styled from 'styled-components'
import { SnackbarItem } from './SnackbarItem'
import { CreateSnack, Snackbar, SnackbarContextType } from './types'

export const SnackbarContext = createContext<SnackbarContextType>({
  addSnackbar: () => {
    throw new Error('Please add the SnackbarContainer to your application')
  },
})

export const useSnackbarContext = () => useContext(SnackbarContext)

export const SnackbarContainer: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  let snackbarId = 0
  const [snackbars, setSnackbars] = useState<Snackbar[]>([])

  // create snackbar unique ID
  const newSnackId = useCallback(() => {
    const newId = `MM_SNACKBAR_${snackbarId}`
    snackbarId++
    return newId
  }, [snackbarId])

  const addSnackbar = (snackbar: CreateSnack) => {
    const newSnack = {
      ...snackbar,
      id: newSnackId(),
    }
    setSnackbars([...snackbars, newSnack])
  }

  const deleteSnackbar = (id: string) => {
    setSnackbars(snackbars.filter((snackbar) => snackbar.id !== id))
  }

  return (
    <SnackbarContext.Provider
      value={{
        addSnackbar,
      }}
    >
      {children}
      <SnackbarWrapper>
        {snackbars.map((snackbar) => (
          <SnackbarItem
            key={snackbar.id}
            {...snackbar}
            deleteSnack={deleteSnackbar}
          />
        ))}
      </SnackbarWrapper>
    </SnackbarContext.Provider>
  )
}

const SnackbarWrapper = styled.div`
  position: fixed;
  bottom: 35px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 90%;
  max-width: 875px;
  z-index: 99;
`
