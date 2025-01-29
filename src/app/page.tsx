'use client'
import ExportedImage from 'next-image-export-optimizer'
import NextIcon from '@/public/images/next.svg'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import s from './page.module.css'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={s.page}>
      <main className={s.main}>
        <NextIcon className={s.logo} />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <ExportedImage src={'/images/example.png'} alt="Example Image." priority width={411} height={385} />
        <Link href={'/about'}>About</Link>
        <button type="button" onClick={toggleTheme}>
          Theme {theme}
        </button>
      </main>
    </div>
  )
}
