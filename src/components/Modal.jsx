import { createPortal } from 'react-dom';
import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';

import Button from './Button';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="rounded-2xl p-6  bg-zinc-100 backdrop:bg-zinc-950/60 shadow-md"
    >
      {children}
      <form method="dialog" className="text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
