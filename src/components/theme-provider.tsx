import * as React from "react"

export interface ThemeProviderProps {
  children: React.ReactNode
  [key: string]: unknown
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>
}
