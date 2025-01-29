'use client'

import { useTheme } from '@/src/context/ThemeContext'
import Link from 'next/link'

export default function About() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <h1>Example About Page</h1>
      <Link href={'/'}>Home</Link>
      <button type="button" onClick={toggleTheme}>
        Theme {theme}
      </button>
    </>
  )
}
