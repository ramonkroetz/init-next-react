'use-client'

import type { PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeContext'

export default function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
