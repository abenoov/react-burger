import React from 'react';
import { createPortal } from 'react-dom';

import styles from '../modal/modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

export type ModalProps = {
  children: React.ReactNode
  open: boolean
  onCloseModal: () => void
  title: string
}

export const Modal: React.FC<ModalProps> = ({open, children, onCloseModal, title}) => {
  // console.log("itemData", itemData)
  if (!open) return null
  const modalRoot = document.getElementById('portal');
  return (modalRoot ? createPortal(
    <>
      <ModalOverlay onCloseModal={onCloseModal}/>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{title}</h4>
          <img 
            alt="close icon"
            src="../../images/close-icon.svg"
            onClick={onCloseModal}
            className={styles.closeIcon}
          />
        </div>
        {children}
      </div>
    </>,
   modalRoot) : null);  
}

export default Modal;