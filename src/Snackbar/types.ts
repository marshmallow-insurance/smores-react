export interface Snackbar {
  id: string
  message: string
  autoCloseTime?: 4 | 5 | 6 | 7 | 8 | 9 | 10
  leadingIcon?: string
  canManuallyClose?: boolean
  showCloseIcon?: boolean
}

export type CreateSnack = Omit<Snackbar, 'id'>

export interface SnackbarContextType {
  addSnackbar: (snackbar: CreateSnack) => void
}
