'use client'

import { i18n } from '@lingui/core'
import { I18nProvider as LinguiProvider } from '@lingui/react'
import { type PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react'
import linguiConfig from '../../lingui.config.js'

import { messages as enMessages } from '../locales/en'
import { messages as ptBRMessages } from '../locales/pt-BR'

const languages = linguiConfig.locales
const defaultLanguage = linguiConfig.locales[0]

const languageMessages = {
  en: enMessages,
  'pt-BR': ptBRMessages,
}
i18n.load(languageMessages)
i18n.activate(defaultLanguage)

type I18nContextProps = {
  language: string
  languages: string[]
  setLanguage: (locale: string) => void
}

const I18nContextInitialState: I18nContextProps = {
  language: defaultLanguage,
  languages,
  setLanguage: () => {},
}

const I18nContext = createContext(I18nContextInitialState)

export function I18nProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState('')

  useEffect(() => {
    const browserLanguage = languages.includes(navigator.language) ? navigator.language : defaultLanguage
    setLanguage(browserLanguage)
  }, [])

  useEffect(() => {
    if (language) {
      i18n.activate(language)
    }
  }, [language])

  const value = useMemo(() => ({ language, languages, setLanguage }), [language])

  if (!language) return null

  return (
    <LinguiProvider i18n={i18n}>
      <I18nContext value={value}>{children}</I18nContext>
    </LinguiProvider>
  )
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
