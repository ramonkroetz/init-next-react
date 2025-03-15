import { useCallback } from 'react'

import { useDialog } from '@/src/hooks/useDialog'

import s from './MessageModal.module.css'

type MessageModalProps = {
  title: string
  text: string
  type?: 'ALERT' | 'SUCCESS' | 'ERROR'
  onConfirm?: () => void
}

export function useMessageModal({ title, text, type = 'ALERT', onConfirm = () => {} }: MessageModalProps) {
  const { Dialog, close, show } = useDialog({})

  const renderLabel = useCallback(() => {
    switch (type) {
      case 'ALERT':
        return <p>ALERTA</p>
      case 'ERROR':
        return <p>ERRO</p>
      case 'SUCCESS':
        return <p>SUCESSO</p>
    }
  }, [type])

  const handleConfirm = useCallback(() => {
    onConfirm?.()
    close()
  }, [close, onConfirm])

  return {
    closeMessageModal: close,
    showMessageModal: show,
    MessageModal: () => (
      <Dialog>
        <div className={s.messageModalWrapper}>
          {renderLabel()}
          <h2>{title}</h2>
          <p>{text}</p>
          <button type="button" className={s.confirmButton} onClick={handleConfirm}>
            Ok
          </button>
        </div>
      </Dialog>
    ),
  }
}
