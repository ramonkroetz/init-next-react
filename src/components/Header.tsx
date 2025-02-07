import s from './Header.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <h1>Header</h1>
      </div>
    </header>
  )
}
