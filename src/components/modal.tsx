import React from 'react';
import { createPortal } from 'react-dom';

import styles from '../styles/modal.module.css';
import ModalOverlay from './modal-overlay';

export type ModalProps = {
  children: any,
  open: boolean,
  onCloseModal: any
}

export const Modal: React.FC<ModalProps> = ({open, children, onCloseModal}) => {
  if (!open) return null

  const modalRoot = document.getElementById('portal');

  return (modalRoot ? createPortal(
    <>
      <ModalOverlay onCloseModal={onCloseModal}/>
      <div className={styles.modal}>
        <button onClick={onCloseModal}>Close Modal</button>
        {/* <div>{children}</div> */}
      </div>
    </>,
   modalRoot) : null);  
}

export default Modal;