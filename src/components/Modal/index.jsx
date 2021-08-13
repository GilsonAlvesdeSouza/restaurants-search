import React, { useEffect } from 'react';
import PortalModal from './Portal';
import { Dialog, Overley } from './styles';

const Modal = ({ children, open, onclose }) => {
  useEffect(() => {
    const onEsc = (e) => {
      if (e.keyCode === 27) onclose();
    };

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onclose]);
  if (!open) return null;

  const onOverlayClick = () => {
    onclose();
  };

  const onDialog = (e) => {
    e.stopPropagation();
  };

  return (
    <PortalModal>
      <Overley onClick={onOverlayClick}>
        <Dialog onClick={onDialog}>{children}</Dialog>
      </Overley>
    </PortalModal>
  );
};

export default Modal;
