import { createPortal } from 'react-dom';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="flex flex-col gap-5 rounded-2xl p-6  bg-zinc-100"
    >
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
