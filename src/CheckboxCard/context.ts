import { createContext } from 'react'

type CheckboxCardGroupContextValue = {
  /** The group is invalid, so each card in it shows the invalid state */
  error?: boolean
  /** id of the group's error message, set only while the message shows */
  errorMsgId?: string
}

export const CheckboxCardGroupContext =
  createContext<CheckboxCardGroupContextValue>({})
