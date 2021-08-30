import React from 'react';
import { useEffect } from 'react';

import styles from '../styles/modal-overlay.module.css';

export type ModalOverlayProps = {
  onCloseModal: any
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  onCloseModal
}) => {
useEffect(() => {
  const close = (e:any) => {
    if(e.keyCode === 27){
      onCloseModal()
    }
  }
  window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[])

  return (
    <div className={styles.modalOverlay} onClick={onCloseModal}/>
  );
}

export default ModalOverlay;