import React from 'react';
import { useEffect } from 'react';

import styles from '../modal-overlay/modal-overlay.module.css';

const ECK_KEYCODE = 27

export type ModalOverlayProps = {
  onCloseModal: () => void
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  onCloseModal
}) => {
useEffect(() => {
  const close = (e:any) => {
    if(e.keyCode === ECK_KEYCODE){
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