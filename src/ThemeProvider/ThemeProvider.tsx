import React, { ReactNode } from 'react'
import * as designTokens from '@mrshmllw/smores-foundations/build/web/variables.json'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

export const SmoresThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={designTokens}>{children}</ThemeProvider>
}

export type Theme = typeof designTokens
