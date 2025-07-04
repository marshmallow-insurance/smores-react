import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { SnackbarItem } from './SnackbarItem'
import {
  CreateSnack,
  Snackbar,
  SnackbarContextType,
  SnackbarContainerProps,
} from './types'

export const SnackbarContext = createContext<SnackbarContextType>({
  addSnackbar: () => {
    throw new Error('Please add the SnackbarContainer to your application')
  },
})

export const useSnackbarContext = () => useContext(SnackbarContext)

export const SnackbarContainer: FC<SnackbarContainerProps> = ({
  children,
  portalContainer = document.body,
}) => {
  const snackbarIdRef = useRef(0)
  const [snackbars, setSnackbars] = useState<Snackbar[]>([])

  // create snackbar unique ID
  const newSnackId = useCallback(() => {
    const newId = `MM_SNACKBAR_${snackbarIdRef.current}`
    snackbarIdRef.current = +1
    return newId
  }, [])

  const addSnackbar = useCallback((snackbar: CreateSnack) => {
    const newSnack = {
      ...snackbar,
      id: newSnackId(),
    }
    setSnackbars([...snackbars, newSnack])
  }, [])

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
      {createPortal(
        <SnackbarWrapper>
          {snackbars.map((snackbar) => (
            <SnackbarItem
              key={snackbar.id}
              {...snackbar}
              deleteSnack={deleteSnackbar}
            />
          ))}
        </SnackbarWrapper>,
        portalContainer,
      )}
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
  z-index: 1000;
`
