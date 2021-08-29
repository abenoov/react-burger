import React from 'react';
import ReactDom from 'react-dom';

import styles from '../styles/modal.module.css';

export type ModalProps = {
  children: any,
  open: boolean
  onClose: any
}

export const Modal: React.FC<ModalProps> = ({open, children, onClose}) => {
  if (!open) return null
  
  return (
    <>
      <button onClick={onClose}>Close Modal</button>
      <div>{children}</div>
    </>
  
  );
}

export default Modal;