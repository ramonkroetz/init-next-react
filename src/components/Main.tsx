import type { PropsWithChildren } from 'react'

import s from './Main.module.css'

export function MainContainer({ children }: PropsWithChildren) {
  return (
    <main className={s.main}>
      <div className={s.container}>{children}</div>
    </main>
  )
}
