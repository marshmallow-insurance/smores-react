import { Theme } from './ThemeProvider/ThemeProvider'

declare module 'styled-components' {
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
  //@ts-expect-error - this is so we can re-decalre `useTheme` with our theme type
  export const useTheme: () => Theme
}
