'use client'
import example from '@/public/images/example.png'
import NextIcon from '@/public/images/next.svg'
import { Trans, useLingui } from '@lingui/react/macro'
import Link from 'next/link'
import { Image } from '../components/Image'
import { useI18n } from '../context/I18nProvider'
import { useTheme } from '../context/ThemeContext'
import s from './page.module.css'

export default function Home() {
  const { t } = useLingui()
  const { theme, toggleTheme } = useTheme()
  const { setLanguage, languages } = useI18n()

  return (
    <div className={s.page}>
      <button className={s.button} type="button" onClick={toggleTheme}>
        <Trans>Theme {theme}</Trans>
      </button>
      <Link className={s.button} href={'/pokemon'}>
        <Trans>Pokemon Page</Trans>
      </Link>
      <Link className={s.button} href={'/modals'}>
        <Trans>Modals Page</Trans>
      </Link>
      <div className={s.locales}>
        {languages.map((language) => (
          <button className={s.button} key={language} type="button" onClick={() => setLanguage(language)}>
            {language}
          </button>
        ))}
      </div>
      <NextIcon className={s.logo} />
      <ol>
        <li>
          <Trans>
            Get started by editing <code>app/page.tsx</code>.
          </Trans>
        </li>
        <li>
          <Trans>Save and see your changes instantly.</Trans>
        </li>
      </ol>

      <div className={s.imageWrapper}>
        <Image src={example} alt={t`Example Image.`} priority width={411} height={385} />
      </div>
    </div>
  )
}
