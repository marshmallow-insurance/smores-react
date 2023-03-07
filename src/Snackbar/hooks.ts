import { useSnackbarContext } from './SnackbarContainer'

export const useSnackbar = () => {
  const { addSnackbar } = useSnackbarContext()

  return { addSnackbar }
}
