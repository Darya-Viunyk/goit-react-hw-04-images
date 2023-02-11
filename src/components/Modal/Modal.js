import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImageURL }) {
  const onKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onKeydown]);

  const onClikOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={style.modalBackdrop} onClick={onClikOverlay}>
      <div className={style.modalContent}>{largeImageURL}</div>
    </div>,
    modalRoot
  );
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
