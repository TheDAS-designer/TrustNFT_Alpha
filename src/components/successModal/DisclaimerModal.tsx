import React, { useCallback, useState, useMemo } from 'react'

import Button from '../Button'
import CardIcon from '../CardIcon'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'

interface DisclaimerModal extends ModalProps {
  onConfirm: () => void
  tx?: string 
}

const DisclaimerModal: React.FC<DisclaimerModal> = ({
  onConfirm,
  onDismiss,
  tx
}) => {
  const [step, setStep] = useState('disclaimer')

  const handleConfirm = useCallback(() => {
    onConfirm()
    onDismiss()
  }, [onConfirm, onDismiss])

  const modalContent = useMemo(() => {
    if (step === 'disclaimer') {
      return (
        <div>
          <p>Success!</p>
          <a>
            tx
          </a>
        </div>
      )
    } else {
      return (
        <div>
          <p>Attention SUSHI Uniswap LPs</p>
          <p>
            The only Uniswap pool that is compatible with SUSHI is SUSHI/yCRV
            (Curve yPool tokens)
          </p>
          <p>Providing liquidity for other Uniswap pools is dangerous</p>
          <p>You will LOSE your share of rebases</p>
        </div>
      )
    }
  }, [step])

  const button = useMemo(() => {
    if (step === 'disclaimer') {
      return (
        <Button
          text="Next"
          variant="secondary"
          onClick={() => setStep('uniswap')}
        />
      )
    } else {
      return <Button text="I understand" onClick={handleConfirm} />
    }
  }, [setStep, step, handleConfirm])

  return (
    <Modal>
      <ModalTitle text={`Warning`} />
      <CardIcon>✔️</CardIcon>
      <ModalContent>{modalContent}</ModalContent>
      <ModalActions>{button}</ModalActions>
    </Modal>
  )
}

export default DisclaimerModal
