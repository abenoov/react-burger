import React from 'react';
import { createPortal } from 'react-dom';

import styles from '../styles/modal.module.css';
import ModalOverlay from './modal-overlay';

export type ModalProps = {
  children: any,
  open: boolean,
  onCloseModal: any,
  title: String
}

export const Modal: React.FC<ModalProps> = ({open, children, onCloseModal, title}) => {
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