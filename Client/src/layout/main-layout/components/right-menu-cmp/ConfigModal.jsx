import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function ConfigModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        //   console.log(showModal)
        }}
      >
        Configuracion
      </button>
    {(showModal === true) &&
    createPortal(
    <div className='w-40 modal h-80'>
        <div>I'm a modal dialog</div>
        <button onClick={ () => {setShowModal(false)}}>Close</button>
    </div>,
    document.body
    )}
    </>
  );
}
