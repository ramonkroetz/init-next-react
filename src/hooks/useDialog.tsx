import { useCallback, useRef } from 'react'
import type { PropsWithChildren } from 'react'

import s from './dialog.module.css'

type DialogProps = {
  hasCloseButton?: boolean
}

export function useDialog({ hasCloseButton = true }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const close = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  const show = useCallback(() => {
    if (!dialogRef.current) {
      return
    }

    dialogRef.current.showModal()

    // Close on backdrop click
    dialogRef.current.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget) {
        close()
      }
    })
  }, [close])

  const Dialog = useCallback(
    ({ children }: PropsWithChildren) => (
      <dialog className={s.dialog} ref={dialogRef}>
        {children}
        {hasCloseButton && (
          <button className={s.closeButton} onClick={close} type="button">
            X
          </button>
        )}
      </dialog>
    ),
    [close, hasCloseButton],
  )

  return { show, close, Dialog }
}
