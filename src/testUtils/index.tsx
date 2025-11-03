import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { SmoresThemeProvider } from '../ThemeProvider/ThemeProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SmoresThemeProvider>{children}</SmoresThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export * from '@testing-library/jest-dom/vitest'
export * from 'jest-styled-components'

export { customRender as render }
