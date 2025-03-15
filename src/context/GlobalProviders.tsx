'use client'

import { configure } from 'client-error-logger'
import type { PropsWithChildren } from 'react'

import { I18nProvider } from './I18nProvider'
import { ThemeProvider } from './ThemeContext'

configure({
  debug: process.env.NEXT_PUBLIC_LOG_ENDPOINT === 'debug',
  logEndpoint: '/log',
})

export default function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <I18nProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nProvider>
  )
}
