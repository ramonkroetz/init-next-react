'use client'
import { type PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemePalette = {
  '--background': string
  '--foreground': string
}

type ThemeContextProps = {
  theme: Theme
  toggleTheme: () => void
}

const ThemePaletteColors: {[key in Theme]: ThemePalette} = {
  dark: {
    '--background': 'var(--cod-gray)',
    '--foreground': 'var(--gallery)',
  },
  light: {
    '--background': 'var(--gallery)',
    '--foreground': 'var(--cod-gray)',
  }
}

const ThemeContextInitialState: ThemeContextProps = {
  theme: 'dark',
  toggleTheme: () => {},
}

const ThemeContext = createContext(ThemeContextInitialState)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(ThemeContextInitialState.theme)

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;

    for (const [variable, color] of Object.entries(ThemePaletteColors[theme])) {
      root.style.setProperty(variable, color)
    }

  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}

export const useTheme = () => useContext(ThemeContext)
