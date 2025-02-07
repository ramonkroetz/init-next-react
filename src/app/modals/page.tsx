'use client'

import { useMessageModal } from '@/src/components/modals/MessageModal'
import cn from 'classnames'
import s from './modals.module.css'

export default function Modals() {
  const { MessageModal: DefaultModal, showMessageModal: showDefaultModal } = useMessageModal({
    title: 'Modal de messagem',
    text: 'Modal de messagemModal de messagemModal de messagemModal de messagem',
    onConfirm: () => console.log('confirmado'),
  })
  const { MessageModal: AlertModal, showMessageModal: showAlertModal } = useMessageModal({
    title: 'Modal de Alerta',
    text: 'Modal de AlertaModal de AlertaModal de AlertaModal de Alerta',
    type: 'ALERT',
    onConfirm: () => console.log('confirmado'),
  })
  const { MessageModal: ErrorModal, showMessageModal: showErrorModal } = useMessageModal({
    title: 'Modal de Erro',
    text: 'Modal de ErroModal de ErroModal de ErroModal de ErroModal de Erro',
    type: 'ERROR',
    onConfirm: () => console.log('confirmado'),
  })
  const { MessageModal: SuccessModal, showMessageModal: showSuccessModal } = useMessageModal({
    title: 'Modal de Sucesso',
    text: 'Modal de SucessoModal de SucessoModal de SucessoModal de SucessoModal de Sucesso',
    type: 'SUCCESS',
    onConfirm: () => console.log('confirmado'),
  })

  return (
    <div className={s.page}>
      <DefaultModal />
      <AlertModal />
      <ErrorModal />
      <SuccessModal />
      <div className={s.buttonWrappers}>
        <button className={cn(s.button)} type="button" onClick={showDefaultModal}>
          Open Modal Default
        </button>
        <button type="button" className={cn(s.button, s.buttonAlert)} onClick={showAlertModal}>
          Open Modal Alert
        </button>
        <button type="button" className={cn(s.button, s.buttonError)} onClick={showErrorModal}>
          Open Modal Error
        </button>
        <button type="button" className={cn(s.button, s.buttonSuccess)} onClick={showSuccessModal}>
          Open Modal Sucesso
        </button>
      </div>
    </div>
  )
}
